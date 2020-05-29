import React , { useState , useEffect } from 'react'
import Bal from '../images/balle.png'
import './Elem.css'

const TIME = 2000
function Ballon({down,stle,mov}) {

    return (
        <div>
            <img src={Bal}
            style={{
                position: 'relative',
                top: down ,
                left: mov
            }}
            id="bal"
            alt="bal" />
        </div>
    )
}

export default Ballon
