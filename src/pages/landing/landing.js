import React from 'react';
import Buttons from '../../components/button/button'
import NavBar from '../../components/navBar/navBar';
import Heading from '../../components/heading/heading';
import Subheading from '../../components/subheading/subheading';
import Showcase from '../../components/showcase/showcase';
import './landing.css';

function landing() {
    return(
        <>
        <div className="page">
                    <div className='content'>
                        <div className="header">
                            <div className="navBar">
                                    <NavBar />
                            </div>
                        </div>

                        <div className='mainContent'>
                
                        <div className='text'>
                            <div className='headerText'>
                                <Heading />
                            </div>
                            <div className='subheaderText'>
                                <Subheading />
                            </div>
                        </div>

                        <div className="button">        
                                <Buttons />
                            </div>
                        <div className='showcase'>
                            <Showcase />
                        </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default landing;

