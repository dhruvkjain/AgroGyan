import "./NoPage.css";
import img from "../assets/front.png"
const NoPage = () => {
    return (
        <div className="flex bg-[#09bc8a] justify-center items-center">
            <img src={img} className="front flex justify-center items-center w-fit h-[90vh]" >
            </img>
            <div className="absolute translate-y-[-280%] translate-x-[80%] text-2xl p-6 rounded-xl bg-white text-black mix-blend-screen">AGROGYAN</div>
        </div>
    );
  };
  
  export default NoPage;