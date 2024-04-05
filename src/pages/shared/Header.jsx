import logo from '../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center  border'>
           <img  src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl mt-4'>{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;