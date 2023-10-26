import React, { useState } from 'react'

function Todolist({ addlist }) {
    const [listApp, setListApp] = useState('');

    const handlechange =(e) => {
        setListApp(e.target.value)
        console.log(e)
    }
    const handlePress=(e)=>{
        if(e.keyCode ===13 ){
          addlist(listApp)
          setListApp("")
        }
    }
    return (
        <div className='container input_box'>
            <input type='text'
                placeholder='enter your tast....'
                value={listApp}
                onChange={(e) => handlechange(e)}
                onKeyDown={handlePress}
                style={{ width: '18rem', height: '2rem',border:'none' }}
                />
            <button className='btn box_btn'
                onClick={() => {
                    addlist(listApp)
                    setListApp("")
                }}

                style={{ width: '3rem', height: '40px', margin: '4px', padding: '3px', fontSize: '15px' }}>App</button>

        </div>
    )
}

export default Todolist