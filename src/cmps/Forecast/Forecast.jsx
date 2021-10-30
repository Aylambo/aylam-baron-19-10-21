import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import CurrentDay from './CurrentDay';
import UpcomingDays from './UpcomingDays';
import { addFavorite, removeFavorite } from '../../store/actions/favoritesAction.js'

const Forecast = ({ forecast }) => {

    const dispatch = useDispatch()
    
        const onAdd = (place) => {
            
            if (place.isFavorite) {
                dispatch(addFavorite(place))  
            } else {    
                dispatch(removeFavorite(place._id))
            }}

    return (

        <Container>
            <Row className="main-row">
                <Col className="col-1" xs={12} md={10}>
                    <div > 
                        <CurrentDay {...forecast.currentDay} onAdd={onAdd} />
                    </div>
                </Col>
            </Row>
            <Row className="main-row2">
                <Col className="col-2" xs={12} md={10} >
                <div>
                    <UpcomingDays days={forecast.upcomingDays} />
                </div>
                </Col>
            </Row>

        </Container>
    )

}

export default Forecast

