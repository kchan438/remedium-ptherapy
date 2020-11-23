import React from 'react';
import style from './PageStyle.css';
import Card from '../components/ContentCard';
import Carousel from '../components/ContentCardHolder';
import SearchBar from '../components/ContentSearchBar';
import { Button } from 'react-bootstrap';

function ContentPage(props){

    return(
        <>
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
            <br></br>
            <center>
                <Button variant="primary" href='/contentitem'>Content Item Page</Button>
            </center>
        </>
    );
}

export default ContentPage;