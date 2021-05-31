import React, { useEffect, useState } from 'react';
import './Trending.scss'
import { Row, Col, Divider, Tooltip } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';



const Trending = () => {

    // const featured_URL = https://api.themoviedb.org/3/trending/movie/day?api_key=046469c43912e47908d5650971d9d66a

    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     fetch(featured_URL)
    //         .then(res => res.json())
    //         .then(data => setMovies(data.results));
    // }, [])

    const movies = useSelector((state) => {
        return state.movies.demoData;
    })

    return (
        <div className='container my-5 px-4 px-md-0'>
            <Divider orientation="left" className='custom-divider mb-3 mb-md-5'>Trending Now</Divider>

            <Row gutter={[{ xs: 16, sm: 24, md: 24, lg: 32 }, { xs: 16, sm: 24, md: 24, lg: 32 }]}>
                {
                    movies?.map(movie => <MovieCard key={movie.id} {...movie} from={'Trending'}/>)
                }
            </Row>
        </div>
    );
};

export default Trending;