import React from 'react';
import './MovieCard.scss'
import { Row, Col, Divider, Empty } from 'antd';
import { message, Button } from 'antd';
import { faInfo, faMinus, faPlus, faRemoveFormat, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlusOutlined } from '@ant-design/icons';
import fillerPoster from '../../images/filler-poster.png'

import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, addToWatched, removeFromWatched, removeFromWatchlist } from '../../redux/actions/movieActions';

const MovieCard = (movie) => {

     const {id, title, poster_path, vote_average} = movie;

    const image_URL = `http://image.tmdb.org/t/p/w1280${poster_path}`

    const dispatch = useDispatch();

    const watchList = useSelector((state) => {
        return state.movies.watchList;
    })

    const watched = useSelector((state) => {
        return state.movies.watched;
    })

    let storedWatchList = watchList.find(o => o.id === movie.id);
    const watchListDisabled = storedWatchList ? true : false;

    let storedWatched = watched.find(o => o.id === movie.id);
    const watchedDisabled = storedWatched ? true : false;


    return (
        <Col className="gutter-row position-relative overflow-hidden movie-div" xs={12} sm={8} md={6} lg={4}>
            { poster_path ?
                <img src={image_URL} alt="" className="img-fluid rounded-top bg-dark" />
                :  <img src={fillerPoster} alt="" className="img-fluid rounded-top bg-dark" />}
            <p className='movie-rating shadow-sm'>{vote_average}</p>
            <div className='movie-info rounded-bottom shadow-sm overflow-hidden position-relative'>
                <p className='movie-title m-0'>{title}</p>
                
                {
                    movie.from === 'watchlist' ?
                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    onClick={()=> {
                        dispatch(addToWatched(movie));
                        dispatch(removeFromWatchlist(movie));
                        message.success({
                            content: 'Added to Watched',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />Add to Watched</button> 

                    : movie.from === 'watched' ?

                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    onClick={()=> { 
                        dispatch(removeFromWatched(movie));
                        message.success({
                            content: 'Removed',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faMinus} className='me-2' />Remove</button> 

                    :

                    <button 
                    className="btn btn-transparent my-0 add-to-list-btn"
                    disabled={watchListDisabled}
                    onClick={()=> { 
                        dispatch(addToWatchlist(movie));
                        message.success({
                            content: 'Added to WatchList',
                            className: 'message'
                        });
                    }}>
                    <FontAwesomeIcon icon={faPlus} className='me-2' />Add to Watchlist</button>
                }

            </div>
        </Col>
    );
};

export default MovieCard;