import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Row, Col, Divider, Tooltip } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import { useDispatch } from "react-redux";

const Searchbar = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = e => {
        e.preventDefault();

        setQuery(e.target.value);

        const search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=046469c43912e47908d5650971d9d66a&language=en-US&page=1&include_adult=false&query=${query}';

        fetch(search_URL)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
    }

    

    return (
        <div className='container'>
            <form className="col-md-6 m-auto pt-5 pb-4 px-4 px-md-0">
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control py-2 search-input"
                        placeholder='Search for a movie'
                        onChange={handleSearch} />
                </div>
            </form>

            {
                (query.length * results.length > 0) &&
                <div>
                    <Divider orientation="left" className='custom-divider mb-3 mb-md-5'>Search Results</Divider>

                    <Row gutter={[{ xs: 16, sm: 24, md: 24, lg: 32 }, { xs: 16, sm: 24, md: 24, lg: 32 }]}>
                        {
                            results.map(movie => <MovieCard key={movie.id} {...movie} />)
                        }
                    </Row>
                </div>
            }
        </div>
    );
};

export default Searchbar;