import React from 'react';
import './Styles/App.scss';
import { Header } from './container/Header';
import { Main } from './container/Main';
import { Footer } from './container/Footer';

export default function App () {
    return(
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
