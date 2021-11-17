import React, {useEffect, useState} from 'react';
import '../Styles/sass/Card.scss';
import {cards} from '../asset/Cards';
import {db} from '../asset/db.json';
import { BsStar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

export function Card() {
    const api_local = 'http://localhost:3000/';
    useEffect(() => {
        fetch(api_local)
            .then((res)=> res.json())
        return () => {
            
        }
    }, []) 
    return (
        <div className='card'>
            <figure>
                <img className='img' src='https://res.cloudinary.com/docred/image/upload/t_feed/Imagen_de_portada_comprimida_8997198f09.jpg' alt='newsTheme'/>
            </figure>
            <div className='card_info'> 
                {/* <p><b>Lorem ipsum dolor <br /> Esse volutpad</b>
                    <br />By:lorem impsum Dolor.
                </p> */}
                <span>
                    <hr />
                </span>
                <div>
                    <><BsStar color='skyblue' /> 50 </>
                    <><BsChat color='skyblue' /> 40 </>
                    <><AiOutlineEye /> 75 </>
                </div>
            </div>
        </div>
    )
}