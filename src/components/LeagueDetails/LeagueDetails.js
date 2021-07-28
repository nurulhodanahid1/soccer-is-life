import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import maleImg from "../../images/male.png";
import femaleImg from "../../images/female.png"

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.leagues[0]))
    }, [leagueId]);
    const [gender, setGender] = useState("Male");
    // console.log(leagueDetails)
    const { strFacebook, strTwitter, strYoutube, intFormedYear, strCountry, strSport, strGender, strSports, strDescriptionEN, strLeague, strBadge } = leagueDetails;
    return (
        <div>
            <div className="home-banner">
                <Image className="img-width" src={strBadge} />
            </div>
            <div className="banner-bg"></div>
            <Container>
                <div className="details-banner">
                    <Row>
                        <Col md={5}>
                            <h2>{strLeague}</h2>
                            <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h4>
                            <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                            <h4><FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</h4>
                            <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                        </Col>
                        <Col md={7}>
                            {strGender === gender ? (
                                <Image className="img-height rounded" src={maleImg} alt={strSports} />
                            ) : (
                                <Image className="img-height rounded" src={femaleImg} alt={strSports} />
                            )}
                        </Col>
                    </Row>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="footer-icon text-center">
                    <ul>
                        <li><a href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default LeagueDetails;