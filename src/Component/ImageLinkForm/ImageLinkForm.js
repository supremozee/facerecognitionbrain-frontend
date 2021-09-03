import React from 'react'
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange,onButtonSubmit, onKeyPress})=> {
    return(
        <div >
            <p className='f2 tc'>{'This magic brain will detect faces via image url, Give it a try'}</p>
            <div className='form center'>
                <div className='w-100 Pa4 br3 shadow-5'>
                <input id = 'inputimage' className='f4 pa2 w-70  ' type='text' onChange={onInputChange} onKeyPress={onKeyPress}/>
                <button onClick={onButtonSubmit}className='w-30 f4  pv2 ph3 link dib grow white bg-light-purple '>{'Detect'}</button>
                </div>
            </div>
      </div>
       
    )
}
export default ImageLinkForm