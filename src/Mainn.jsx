import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './componant/Header';
import Footer from './componant/Footer';

const Mainn = () => {
    return (
        <div className=''>
            <div className='w-[90%]  mx-auto '>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainn;