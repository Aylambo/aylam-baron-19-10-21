import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import CurrentDay from './CurrentDay';
import UpcomingDays from './UpcomingDays';
import { addFavorite } from '../../store/actions/favoritesAction.js'
import {useMainContext} from '../../services/Context'

const Forecast = ({ forecast }) => {

    const dispatch = useDispatch()
    const {setIsFavorite} = useMainContext()
    
    const onAdd = (place) => {
        setIsFavorite(place.isFavorite);
        dispatch(addFavorite(place))
        
    }

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
