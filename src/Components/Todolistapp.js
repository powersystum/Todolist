import React from 'react'

function Todolistapp(props) {

  return (
    <li className="list-item">
    {props.item}
    <span className='icons'>
    <i className="fa-solid fa-trash-can icon-delete" 
    onClick={e=>{
        props.itemDelete(props.index)
    }}></i>
    </span>
</li>
  )
}

export default Todolistapp