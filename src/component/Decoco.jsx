import React from 'react';
import '../Styles/sass/Decoco.scss';
import { BsStar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';
import { Docstorie } from './Docstorie';


export function Decoco() {
    return (
        <div className='decoco'>
             <img className='decoco_img' src= 'https://res.cloudinary.com/docred/image/upload/t_feed/FDA_aprueba_tratamiento_para_ALZHEIMER_6c31532745.jpg' alt='imagen main' />
           <Docstorie /> 
           <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut a voluptates alias sint sed esse<br /> consequuntur itaque. Mollitia nobis ex culpa omnis, porro saepe perferendis aperiam quidem recusandae dolores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut a voluptates alias sint sed esse<br /> consequuntur itaque. Mollitia nobis ex culpa omnis, porro saepe perferendis aperiam quidem recusandae dolores.
                Lorem ipsum dolor sit<br /> amet consectetur, adipisicing elit. Explicabo pariatur minus praesentium voluptatibus reprehenderit, repudiandae fugit<br /><br /> soluta tempore totam molestiae ab quas possimus? Beatae exercitationem <br />repudiandae quod consectetur fugiat optio.
                Lorem ipsum dolor sit<br /><br /> amet consectetur adipisicing elit. Officia aut nemo alias dolorum cupiditate earum expedita aliquam quaerat <br /><br />deleniti? Odio eum, harum ut quisquam quaerat alias aut possimus tempora quod.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repudiandae velit quidem dolore necessitatibus hic voluptatum aliquid et iusto. Pariatur ipsam reprehenderit explicabo optio<br /><br /> fugit nihil incidunt iure illo consequuntur.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus amet sunt deserunt dicta ex sint vero natus rem suscipit voluptate libero magnam eos dolorem, ipsum debitis est veritatis provident officiis.<br /><br />
                Lorem ipsum dolor<br /><br /> sit amet consectetur adipisicing elit. Harum illum recusandae autem, ratione amet corporis, adipisci voluptate enim perspiciatis ipsum exercitationem rem quos<br /> accusamus debitis deserunt explicabo repellendus culpa fugit?<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem natus laborum dignissimos porro quisquam eveniet velit perferendis<br /> iure hic ipsa assumenda, placeat officiis voluptatibus doloribus reprehenderit maiores quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate distinctio, magni quia optio animi veritatis? Excepturi rerum dolorem neque veniam, porro consequuntur fugit, adipisci animi eum iure quas quasi!
                Lorem ipsum dolor <br />sit amet consectetur, adipisicing elit. Veniam rem cumque ullam maiores<br /><br /> nemo expedita sit voluptates excepturi cupiditate voluptatem voluptate saepe, unde magnam voluptas quaerat dolor perspiciatis. Cum, vitae.
                Lorem ipsum dolor<br /><br /> sit, amet consectetur adipisicing elit. Ratione consectetur quidem aliquam sunt voluptate dolorem porro quae rem blanditiis animi eum laborum, aperiam atque facere ut sint, vitae itaque beatae.
                Lorem ipsum dolor, sit amet <br /><br />consectetur adipisicing elit. Debitis aspernatur rerum tempora quibusdam et, repellat rem officia, natus distinctio quas ut eligendi<br />corrupti, inventore consequatur tenetur expedita aut quos voluptate!Lorem
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis molestiae consectetur voluptates, corrupti ex voluptas dolor nisi illo doloribus expedita dolores, possimus officiis<br /><br /> consequuntur reiciendis cumque fugit. Nostrum, architecto mollitia.
            </p>
            <div className='decoco_foo'>
                <span ><BsStar color='skyblue' />Destacar</span>
                <span ><BsChat color='skyblue' />Comentar</span>
                <span ><BsArrowUpRight color='skyblue' />Compartir</span>
            </div>
        </div>
    );
}
