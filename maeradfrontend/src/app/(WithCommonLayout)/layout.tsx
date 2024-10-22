import Nav from "../components/shered/Nav";


const CommonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Nav/>
           {children} 
        </div>
    );
};

export default CommonLayout;