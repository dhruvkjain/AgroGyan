import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="bg-[#629460] ">
            <button className="read rounded-2xl p-2 m-2 bg-white bg-opacity-20 backdrop-blur-4xl text-black "><Link to="/">लेख पढ़ें</Link></button>
            <button className="connect rounded-2xl p-2 m-2 bg-white bg-opacity-20 backdrop-blur-4xl text-black "><Link to="/videochat">विशेषज्ञ के साथ जुड़ें</Link></button>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;