import React from 'react'

export default function TodoCard(props) {
  const {children} = props
  return (
      <li className='todoItem' >
        {children}
          <div className='actionContainer'>
           <i className="fa-solid fa-pen-to-square"></i>
           <i className="fa-solid fa-trash-can"></i>
           </div>     
      </li>
  )
}
