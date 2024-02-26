import Sidebar from "./sidebar";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
    return (
        <div className="w-full flex items-center justify-between mt-10 px-5">
            <img src="./logoForTime.png" alt="logo" className="w-[80px]" />
            <Sidebar />
        </div>
    );
};

export default Header;
