import React from 'react';
import '../Styles/sass/Main.scss';
import { Aside } from '../component/Aside';
import { Decoco } from '../component/Decoco';

export function Main() {
    return (
        <div className='main'>
            <Decoco />
            <Aside />
        </div>
    )
}
