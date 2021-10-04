import React from 'react';
import '../Styles/sass/Header.scss';
import { AiFillSetting, AiOutlineDown } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { RiHome3Line } from 'react-icons/ri';

export function Header() {
    return (
        <div className= 'Header'>
                <figure className='header_imgLogo'>
                    <img src='https://www.docred.com/images/SVG/logo-docred-color.svg' alt='SiteLogo' />
                </figure>
            <div>
                    <GiMagnifyingGlass />
                   <input className='search' type= 'text' placeholder='¿Qué estas buscando?'/>
                <button>                    
                    <RiHome3Line/> Inicio <AiOutlineDown />
                </button>
            </div> 
            <div className= 'menuButton'>
                <button className='BellButton'>
                    <VscBellDot />
                </button>
                <img className='menu_img' src='../assets/IvanBarcoPicture.jpg' alt='profilePhoto' /><AiOutlineDown />
                <button className='FillButton'>
                    <AiFillSetting />
                </ button>
            </div>
        </div>
    )
}