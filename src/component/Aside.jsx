import React from 'react'
import { Card } from './Card';

export function Aside() {
  return (
    <div>
      <aside>
        <p>Noticias relacionadas ______________</p>
        <Card />
        <Card />
        <Card />
        <Card />
      </aside>
    </div>
  );
}
