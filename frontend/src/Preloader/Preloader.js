import React from 'react'
import preloader from './preloader.svg'
import s from './Preloader.module.css'

let Preloader = () => {
    return <div className={s.Preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader