import React from 'react'
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit})=> {
    return(
        <div >
            <p className='f3 tc'>{'This Magic Brain will detect faces in your pictures, Give it a try'}</p>
            <div className='form center'>
                <div className='w-100 Pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70  ' type='text' onChange={onInputChange}/>
                <button onClick={onButtonSubmit}className='w-30 f4  pv2 ph3 link dib grow white bg-light-purple '>{'Detect'}</button>
                </div>
            </div>
      </div>
       
    )
}
export default ImageLinkForm