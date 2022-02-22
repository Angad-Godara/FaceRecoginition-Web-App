import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.jpg'

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt shadow-4" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa0.5"> 
                    <img src={brain} alt='logo' style={{borderRadius:'10px'}}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;