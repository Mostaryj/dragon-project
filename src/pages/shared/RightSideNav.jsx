import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';




const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold"> Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
{/* contact */}
      <div className="p-4  mb-6">
        <h2 className="text-2xl font-semibold"> Find Us on</h2>
        <a className="flex p-4 text-lg mt-4  items-center gap-2 border rounded-t-lg" href="">
          <FaFacebook className="ml-3 text-blue-500"/><span>Facebook</span>
        </a>
        <a className="flex p-4 text-lg items-center gap-2 border-x " href="">
          <FaTwitter className="ml-3 text-blue-500"/><span>Twitter</span>
        </a>
        <a className="flex p-4 text-lg items-center gap-2 border rounded-b-lg" href="">
          <FaInstagram className="ml-3"/><span>Instagram</span>
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold"> Q Zone</h2>
      <img src={qzone1} alt="" />
      <img src={qzone2} alt="" />
      <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
