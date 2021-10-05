import React from 'react';
import '../Styles/sass/Docstorie.scss';

export function Docstorie() {
  return (
    <div className='docstorie'>
      <h3 className='doc-title'> Lorem ipsum dolor sit amet
        <button>Guardar</button>
      </h3>
        <div className='doc-news'>
            <img src="https://res.cloudinary.com/docred/image/upload/t_thumb/DOCRED_Logo_Redes_Instagram_cf967b9d13.png" alt="Minilogo" width='100px' height='100px'/>
            <span><h3>Noticias DocRed</h3>
            <p>Equipo Editorial DocRed | Publicado: 16/10/21 | Lectura: 3 minutos</p>
            </span>
        </div>
        <div className='tags'>
            <span className='doc-tag1'>Medicina interna</span>
            <span className='doc-tag2'>Pediatría</span>
            <span className='doc-tag3'>Obstreticia</span>
        </div>
    </div>
  );
}
