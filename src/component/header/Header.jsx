import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='flex justify-between bg-[#1C2B35] py-3'>
            <img className='pl-16' src={logo} alt="" />
            <div className='text-white pr-16'>
                <a className='ml-5' href="/shop">Shop</a>
                <a className='ml-5' href="/order">Order</a>
                <a className='ml-5' href="/inventory">Inventory</a>
                <a className='ml-5' href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;