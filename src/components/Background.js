import React from 'react'
import Moon from '../images/icon-moon.svg'
import backgroundlight from '../images/bg-desktop-light.jpg'
import '../App.css';

export default function Background(props) {

  return (
    <div className='container-fluid text-center background'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='heading'>TODO LIST</h1>
                </div>
                {/* <div className='col'>
                    <img src={Moon} alt="Cresent Moon" />
                </div> */}
            </div>
                <input
                type='text'
                className='col text-center p-2' 
                placeholder='Create new todo...'
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        props.addToList(event.target.value)
                        event.target.value = ""
                    }}}
                 />
        </div>
        
        
    </div>
  )
}
