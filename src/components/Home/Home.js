import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import League from '../League/League';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // const shuffle = a => {
            //     for (let i = a.length; i; i--) {
            //         let j = Math.floor(Math.random() * i);
            //         [a[i - 1], a[j]] = [a[j], a[i - 1]];
            //     }
            // }
            // shuffle(data.leagues);
            const first12 = data.leagues.slice(0, 12);
            setLeagues(first12)
        })
    }, [])
    return (
        <div>
            <div className="home-banner">
                <h1>Soccer is Life</h1>
            </div>
            <div className="banner-bg"></div>
            {
                leagues.map(league => <League league={league} key={league.idLeague}></League>)
            }
        </div>
    );
};

export default Home;