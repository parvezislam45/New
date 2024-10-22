import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // If the user just signed in, persist the access token in the token
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // Add access token to the session object for client-side use
            session.accessToken = token.accessToken;
            return session;
        },
        async signIn({ user }) {
            try {
                const csrfToken = await getCsrfToken();
                if (!csrfToken) {
                    console.error("Failed to retrieve CSRF token.");
                    return false;
                }

                const bodyData = JSON.stringify({ email: user.email, role: "user" });
                console.log("Sending data:", bodyData);

                const response = await fetch("http://127.0.0.1:8000/api/save-user/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,  // Include CSRF token
                    },
                    body: bodyData,
                    credentials: "include", // Ensure cookies are sent with the request
                });

                if (!response.ok) {
                    console.error("Failed to save user:", response.statusText);
                    return false;
                }

                return true;
            } catch (error) {
                console.error("Error during sign-in callback:", error);
                return false;
            }
        },
    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
};

// Function to get CSRF token
async function getCsrfToken() {
    try {
        const response = await fetch("http://127.0.0.1:8000/csrf/", {
            method: "GET",
            credentials: "include",  
        });

        if (!response.ok) {
            console.error("Failed to fetch CSRF token:", response.statusText);
            return null;
        }

        const data = await response.json();
        console.log("CSRF Token fetched:", data.csrfToken);  
        return data.csrfToken;
    } catch (error) {
        console.error("Error fetching CSRF token:", error);
        return null;
    }
}
