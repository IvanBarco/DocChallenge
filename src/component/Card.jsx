import React from 'react';
import '../Styles/sass/Card.scss';
import { BsStar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

export function Card() {
    return (
        <div className='card'>
            <div className='card_img'>
                <figure>
                    <img className='img' src='https://res.cloudinary.com/docred/image/upload/t_feed/Imagen_de_portada_comprimida_8997198f09.jpg' alt='newsTheme' />
                </figure> 
            </div>
            <div className='card_info'>
                <p><b>Lorem ipsum dolor, sit amet consectetur adipisicing elit:<br /> Esse unde provident volutpad</b>
                    <br />By:lorem impsum Dolor.
                </p>
                <span>
                    <hr />
                </span>
                <div className='decovi'>
                    <><BsStar /> 50 </>
                    <><BsChat /> 40 </>
                    <><AiOutlineEye /> 75 </>
                </div>
            </div>
        </div>
    )
}