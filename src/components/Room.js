import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { memo } from 'react'

import defaultImg from '../images/room-1.jpeg'

const Room = memo(
    ({ room }) => {
        const {name, slug, images, price } = room;

        return (
            <article className='room'>
                <div className='img-container'>
                    <img src={images[0] || defaultImg} alt='single room'/>
                    <div className='price-top'>
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/resort/rooms/${slug}`} className='btn-primary'>
                        features
                    </Link>
                </div>
                <p className='room-info'>{name}</p>
            </article>
        );
    });

    Room.propTypes = {
        room: PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.number.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
            price: PropTypes.number.isRequired
        })
    };

    export default Room;