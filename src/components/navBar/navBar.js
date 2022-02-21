import logo from '../../imgs/Nav Bar_landing page.png';
import './navBar.css';
function navBar(){
    return(
        <>
            <div className='navBar'>
                <img className='logo' src={logo} alt=""></img>
            </div>
            
        </>
    );
}

export default navBar;

