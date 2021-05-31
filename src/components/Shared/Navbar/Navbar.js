import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import './Navbar.scss'

const Navbar = () => {

    const watchList = useSelector((state) => {
        return state.movies.watchList;
    })

    const watched = useSelector((state) => {
        return state.movies.watched;
    })

    return (
        <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">WatchList</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className='justify-content-end'>
                        <div className="navbar-nav  my-md-0 my-3">
                            <Link className="nav-link  px-2 text-center  my-md-0" to="/watched">
                                Watched
                                <span className='ms-2 badge'>{watched.length}</span></Link>
                            <Link className="nav-link  px-2 text-end  my-md-0 d-flex" to="/watchlist">
                                My Watchlist 
                                <span className='ms-2 badge'>{watchList.length}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;