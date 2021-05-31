import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Tooltip } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import Navbar from '../Shared/Navbar/Navbar';
import Searchbar from '../Home/Searchbar';

const Watched = () => {

    const movies = useSelector((state) => {
        return state.movies.watched;
    })

    return (
        <section>
            <Navbar />
            <Searchbar />

            <div className='container my-5 px-4 px-md-0'>
                <Divider orientation="left" className='custom-divider mb-3 mb-md-5'>Watched</Divider>

                <Row gutter={[{ xs: 16, sm: 24, md: 24, lg: 32 }, { xs: 16, sm: 24, md: 24, lg: 32 }]}>
                    {
                        movies.length ?
                            movies.map(movie => <MovieCard key={movie.id} {...movie} from={'watched'} />)
                            :
                            <Col flex={1}>
                                <p className='custom-divider text-center'>Sorry! Watched List is empty</p>
                            </Col>
                    }
                </Row>
            </div>

        </section>
    );
};

export default Watched;