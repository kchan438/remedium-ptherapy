import React from 'react';
import style from './PageStyle.css';
import Card from '../components/ContentCard';
import Carousel from '../components/ContentCardHolder';
import SearchBar from '../components/ContentSearchBar';

function ContentPage(props){

    return(
        <div>
            <div>
                <center>
                <SearchBar />
                <p className="header-text">My Content</p>
                </center>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    );
}

export default ContentPage;