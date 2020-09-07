import React from 'react'
import { Link } from 'react-router-dom'

import Background from '../components/Background'
import Banner from '../components/Banner'

const Error = () => {
    return (
        <Background>
            <Banner title='404' subtitle='page not found'>
            <Link to='/' className='btn-primary'>
                return home
            </Link>
            </Banner>
        </Background>
    );
}

export default Error;