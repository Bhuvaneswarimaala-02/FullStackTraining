import '../../assets/css/NavBar.css'
import {Link} from 'react-router-dom'
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/use-effect'>UseEffect</Link></li>
                    <li><Link to='/UseRef'>UseRef</Link></li>
                    <li><Link to='/UseContext'>UseContext</Link></li>
                    <li><Link to='/UseMemo'>UseMemo</Link></li>
                    <li><Link to='/Images'>Images</Link></li>
                    <li><Link to='/Mongodb'>Mongodb</Link></li>
                    <li><Link to='/SignupPage'>Signup Page</Link></li>
                    <li><Link to='/LoginPage'>Login Page</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;