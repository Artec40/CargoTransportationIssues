import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div>Фильтр заявок</div>
            <div><input placeholder={'Номер заявки'}/>
                <button>Поиск</button>
            </div>
        </div>
    )
}

export default Navbar