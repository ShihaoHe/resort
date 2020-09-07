import React from 'react'
import { Link } from 'react-router-dom'

import Background from '../components/Background'
import Banner from '../components/Banner'
import RoomContainer from '../components/RoomContainer'

const Rooms = (props) => {
    console.log(props);
    return (
        <>
        <Background className='roomsHero'>
            <Banner title='our rooms'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Background>
            <RoomContainer />
        </>
    );
}

export default Rooms;