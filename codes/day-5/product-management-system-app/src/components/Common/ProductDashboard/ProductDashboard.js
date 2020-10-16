import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDashboard() {
    return (
        <>
            <h1>
                Product Management System
            </h1>
            <nav className='navbar navbar-default'>
                <Link to='/home'>
                    Home
                </Link>
                <Link to='/products'>
                    Products
                </Link>
                <Link to='/add'>
                    Add
                </Link>
            </nav>
        </>
    )
}
