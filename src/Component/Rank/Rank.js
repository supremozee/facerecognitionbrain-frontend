import React from 'react'

const Rank = ({entries, name})=> {
    return(
        <div>
            <div className='white f3 mb1'><p>{`${name} , your current rank of image entry is `}</p></div>
           <div className='white f1'><p>#{entries}</p></div> 
        </div>
    )
}
export default Rank