import React from 'react'
import Bare from '../images/bar.png'
import './Elem.css'

function Bar({stle}) { 

    return (
        <div>
            <img src={Bare} style={{marginLeft : stle }} id="bar" alt="bar" />
        </div>
    )
}

export default Bar
