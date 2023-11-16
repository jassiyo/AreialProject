import React from 'react'
import style from './InputCards.module.css'
import Cards from './Card/Cards';
import {data} from './Data'
import { NavLink } from 'react-router-dom';

const InputCards = () => {
  return (
    <>

    <div className={style.Container}>
    <div className={style.CardWrapper}>
            {/* function for render data from data.jsx */}
          {data.map(({ id, title, info, image, path }) => {
            return (
                <Cards className={style.programsProgram} key={id}>
                <NavLink to={path}><h4>{title}</h4></NavLink>
                    <p>{info}</p>
                    <img className={style.Images} src={image} alt={title} />
                </Cards>

            );
            
          })}
        </div>
    </div>
    </>
  )
}

export default InputCards