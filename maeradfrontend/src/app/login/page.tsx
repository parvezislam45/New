"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {

  
  return (
    <div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
          <div className="mb-7">
            <h3 className="font-semibold text-2xl text-gray-950">Sign In </h3>
            <p className="text-gray-950">
               Have an account?{" "}
              <a
                href="#"
                className="text-sm text-purple-700 hover:text-purple-700"
              >
                Sign Up
              </a>
            </p>
          </div>
          <div className="space-y-6">
            <div className="">
              <input
                className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="relative">
            <input
                className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm ml-auto">
                <a href="#" className="text-purple-700 hover:text-purple-600">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px w-16 bg-gray-900"></span>
              <span className="text-gray-900 font-normal">or</span>
              <span className="h-px w-16 bg-gray-900"></span>
            </div>
            <div className="flex justify-center gap-5 w-full ">
              <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
                type="submit"
                className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
              >
                <svg
                  className="w-4 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                  />
                </svg>
                <svg
                  className="w-4"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z"></path>
                </svg>
                <span className="text-gray-950">Google</span>
              </button>

              <button
              onClick={() =>
                signIn("facebook", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
               type="submit" className="w-full flex items-center gap-5 justify-center mb-6 md:mb-0 border border-gray-300 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-">
              <svg className="rounded-full"width={20}height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="blue"></path></svg>
               <span className="text-gray-950">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
