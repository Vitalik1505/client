import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SERVICEPAGE_ROUTE } from '../utils/consts';

const ServiceItem = ({service}) => {
    const history = useHistory() 
       
return (
        <Col md={3} onClick={() => history.push(SERVICEPAGE_ROUTE + '/' + service.id)}>
            <Card style={{ width: '15rem', backgroundColor: "#CCCCCC" }} className="mt-3 " >
                <Card.Img variant="top" src={process.env.REACT_APP_API_URL + service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                         {service.description}
                    </Card.Text>
                     <div className="d-flex">
                        <Button variant="success" className="align-right">Детальніше</Button> 
                        <div className="ms-auto">
                            {service.price} UAH
                        </div> 
                     </div>
                     
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ServiceItem