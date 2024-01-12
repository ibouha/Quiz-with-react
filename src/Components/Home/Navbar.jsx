import { useNavigate } from 'react-router-dom';
import logoimage from '../../Assets/Untitled design (1).svg';
import '../Home/home.css';


const Navbar = () => {
    const Naviagte=useNavigate();
    return (
      <nav>
        <img src={logoimage} alt="Logo" className="logo" onClick={()=>{Naviagte('/')}} />
        <div>
          <ul>
            <li onClick={()=>{Naviagte('/')}}>Home</li>
            <li>services</li>
            <li>DevRecruit Academy</li>
            <li>About</li>
            <li className='contact'>Contact us <span>👋</span>
  </li>
          </ul>
        </div>
  
      </nav>
    );
  };
  export default Navbar;