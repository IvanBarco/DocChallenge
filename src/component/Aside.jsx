import React from 'react'
import { Card } from './Card';
import '../Styles/sass/Aside.scss'

export function Aside() {
  return (
    <div>
      <aside className='aside'>
        <p className='aside_p'><pre>Noticias relacionadas              ——————————————————————————————</pre></p>
         <div className='aside_card'>
          <Card />
          <Card />
          <Card />
          <Card />
         </div>
      </aside>
    </div>
  );
}
