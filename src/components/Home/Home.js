import React, { useState } from 'react';
import './Home.scss'
import Navbar from '../Shared/Navbar/Navbar';
import Searchbar from './Searchbar';
import Trending from '../Trending/Trending';

const Home = () => {

    return (
        <div>
            <Navbar />
            <Searchbar/>
            <Trending />
        </div>
    );
};

export default Home;