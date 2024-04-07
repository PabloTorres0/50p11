import React from 'react'

const Comp = ({title, info}) => {
  return (
    <div className="component-container">
        <div className='component-title'>{title}</div>        
        <div className='component-second-container'>
            <div className="component-info">{info}</div>
       </div>
    </div>
  )
}

export default Comp