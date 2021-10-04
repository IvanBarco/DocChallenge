import React from 'react';
import '../Styles/sass/Footer.scss';

export function Footer() {
    return (
        <div className = 'footer'>
            <img className = 'footer_img' src='https://www.docred.com/images/SVG/logo-docred-color.svg' alt='SiteLogo' />
                <a href='#'>Preguntas frecuentes</a>
                <a href='#'>Contáctanos</a>
                <a href='#'>Información</a>
            <h5>DocRed © 2021. Todos los derechos reservados</h5>
        </div>
    )
}
