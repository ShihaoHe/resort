import React from 'react'
import { Link } from 'react-router-dom'

import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import Style from '../components/Style'
import { RoomContext } from '../context'

class SingleRoom extends React.Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(this.state.slug);

        if(!room) {
            return (
                <div className='error'>
                    <h3>no such room could be found</h3>
                    <Link to='rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </div>
            )
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [main, ...defaultImages] = images;
        console.log(defaultImages);

        return (
            <>
            <Style img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/resort/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </Banner>
            </Style>
            <section className='single-room'>
                <div className='single-room-images'>
                    {defaultImages.map((item, index) => (
                        <img key={index} src={item} alt={name} />
                    ))}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>details
                        </h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <ul className='room-extras'>
                    {extras.map((item, index) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleRoom;