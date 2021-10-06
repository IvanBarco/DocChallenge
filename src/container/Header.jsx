import React, { useState } from 'react';
import '../Styles/sass/Header.scss';
import { AiFillSetting, AiOutlineDown } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import { BsHouseDoor } from 'react-icons/bs';

export function Header() {
    return (
        <div className= 'Header'>
                <figure className='header_imgLogo'>
                    <img src='https://www.docred.com/images/SVG/logo-docred-color.svg' alt='SiteLogo' />
                </figure>
            <div className='Header_luse'>
                    <img className='lupa' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png' alt='magnifyinGlass' />
                   <input className='search' type= 'text' placeholder='¿Qué estas buscando?'/>
            </div> 
                <button className='button'>                    
                    <BsHouseDoor size='2em' color='white' /><pre>  Inicio </pre><AiOutlineDown color='white' />
                </button>
            <div className= 'menuButton'>
                <button className='bellButton'>
                    <VscBellDot size='2em' color='white' />
                </button >
                    <img className='menu_img' src='https://www.markuptag.com/images/user-img-3.jpg' alt='profilePhoto' />
                <button className='fillButton'>
                    <AiFillSetting size='2em' color='white' />
                </ button>
            </div>
        </div>
    )
}