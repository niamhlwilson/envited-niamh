import './showcase.css';
import left from '../../imgs/Product Image_Left.png';
import center from '../../imgs/Product Image_Middle.png';
import right from '../../imgs/Product Image_Right.png';

function Showcase() {
    return(
        <>
        <div className='showcase'>
            <img className='left' src={left} align="left" alt="to satisfy the accessability gods"></img>
            <img className='top' src={center} align="middle
            " alt="to satisfy the accessability gods"></img>
            <img className='top' src={right} align="right" alt="to satisfy the accessability gods"></img>
        </div>
            
        </>
    );
}

export default Showcase;