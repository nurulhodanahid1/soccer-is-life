import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './League.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const League = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [leagueLogo, setLeagueLogo] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeagueLogo(data.leagues);
        })
    }, [idLeague]);
    const history = useHistory();
    const showLeagueInfo = (id) => {
        const url = `/league/${id}`;
        history.push(url);
    }
    return (
        <div className="container">
            <div className="league-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="d-block mx-auto img-fluid w-50" src={leagueLogo[0]?.strBadge} />
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text>Sports type {strSport}</Card.Text>
                        <Button onClick={() => showLeagueInfo(idLeague)} variant="outline-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default League;