import React from 'react';
import logo from '../../images/logo.png'
import ironhack from '../../images/ironhack-logo.jpeg'

const Finalize = () => {
    return (
        <div className='final'>
            <div className = 'final-images'>
                <img src={logo}/>
                <img src={ironhack}/>
            </div>
            <h1>Agradecemos a compra!</h1>
        </div>
    );
}

export default Finalize;
