import React from 'react'
import { Link } from 'react-router-dom'

import Background from '../components/Background'
import Banner from '../components/Banner'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
        <Background>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to='/resort/rooms' className='btn-primary'>
                    our rooms
                </Link>
            </Banner>
        </Background>
        <Services />
        </>
    );
}

export default Home;