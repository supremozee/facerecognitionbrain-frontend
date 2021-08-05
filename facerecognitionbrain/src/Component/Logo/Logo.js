import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import Brain from './Brain.png'

const Logo = ()=> {
    return(
        <div className=' mt0 ma4'>
            <Tilt className="Tilt br2 shadow-2"  options={{ max : 55 }} style={{ height: 100, width: 100 }} >
 <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} alt='brain'src={Brain}/> </div>
</Tilt>
        </div>
    )
}
export default Logo