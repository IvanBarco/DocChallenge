import React from 'react';
import '../Styles/sass/Main.scss';
import { Card } from '../component/Card';
import { Decoco } from '../component/Decoco';

export function Main() {
    return (
        <div className='main'>
            <Decoco />
            <aside>
                <Card />
                <Card />
            </aside>
        </div>
    )
}
