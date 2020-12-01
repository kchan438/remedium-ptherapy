import React from 'react';
import style from './PageStyle.css';
import Card from '../components/PatientCard';
import Carousel from '../components/PingsCardHolder';
import SearchBar from '../components/PingsSearchBar';

function PingsPage(props){

    return(
        <div className="page-background">
            <div>
                <center>
                <SearchBar />
                <p className="title-text">My Pings</p>
                </center>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    );
}

export default PingsPage;