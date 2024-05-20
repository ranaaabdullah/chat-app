import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/SideBar";
import Login from "../login/Login";

const Home = () => {
  return (
    <div className="flex justify-center items-center  h-screen   ">
      <div className= " flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
      {/* <Login/> */}
    </div>
  );
};
export default Home;
