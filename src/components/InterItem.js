import React  from 'react';
import { Card, Button } from 'react-bootstrap';

const InterItem = ({inter}) => {
return (
        <Card className="mt-3" style={{backgroundColor: "#CCCCCC"}}>
            <Card.Header as="h5">Замовлення № {inter.id}</Card.Header>
                <Card.Body>
                    <Card.Title> Послуга: {inter.nameService}</Card.Title>
                        <Card.Text>
                            <p> 
                                Замовник - {inter.nameUser} Дата: {inter.data} Час: {inter.time} Клас авто: {inter.classCar}  
                            </p>  
                        </Card.Text>
                        <Button variant="success">Прийняти</Button>
                        <Button variant="warning" className="ms-3">Відмовити</Button>
                        <Button variant="danger" className="ms-3">Видалити</Button>
                </Card.Body>
        </Card>
    )
}

export default InterItem