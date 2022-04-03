import React, {useState, useEffect} from "react";
import { Container, Col, Row, Image, Button, Form} from "react-bootstrap";
import servicePage1 from "../assets/servicePage1.jpg"
import { useParams } from "react-router-dom";
import { fetchOneService } from "../http/serviceAPI";
import {createInter} from "../http/serviceAPI"
 

const ServicePage = () => {

     
    const [service, setService] = useState({info: []})
    const {id} = useParams()

    const [nameUser, setNameUser] = useState()
    const [data, setData] = useState()
    const [time, setTime] = useState()
    const [classCar, setClassCar] = useState()
  
    useEffect(() => {
        fetchOneService(id).then(data => setService(data))
    }, [])
     
    const addInter = () => {
        const formData = new FormData()
        formData.append('nameService', service.name)
        formData.append('nameUser', nameUser)
        formData.append('data', data)
        formData.append('time', time)
        formData.append('classCar', classCar)
 
        createInter(formData).then(data => funcAlert())
    }
     
    function funcAlert() {
        return alert("Замовлення прийнято")
    }
     
    return  (
        <div>
            <Container className="mt-3">
                <Row> 
                    <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + service.img} width={400}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">  
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                            <p>{service.price} UAH</p>
                             
                        </Row>
                    </Col>
                    <Col md={4} className="d-flex flex-column align-items-center">
                        <Row>
                            <h3 className="text-center m-auto">Замовлення</h3>
                            <Form.Control className="mt-3" placeholder="Введіть ваше ім'я..." value={nameUser} onChange={e => setNameUser(e.target.value)}/>
                            <Form.Control className="mt-3" placeholder="Введіть дату Наприклад: 01.01.2022" value={data} onChange={e => setData(e.target.value)}/>
                            <Form.Control className="mt-3" placeholder="Введіть час Наприклад: 11:00" value={time} onChange={e => setTime(e.target.value)}/>
                            <Form.Control className="mt-3" placeholder="Введіть клас вашого авто" value={classCar} onChange={e => setClassCar(e.target.value)}/>
                            <Button variant="success" className="mt-3" onClick={addInter}> Замовити</Button>
                        </Row>
   
                    </Col>
                </Row>
                
            </Container>

            <div class="jumbotron jumbotron-fluid mt-5 pb-2" style={{backgroundColor: "#CCCCCC"}}> 
                <div class="container">
                    <Image className="rounded mx-auto d-block" src={servicePage1} width="80%"/>
                   <h2>Класифікація автомобілів</h2>
                        <ul class="list-unstyled">
                            <li class="mb-2" style={{fontSize:20, fontFamily:"Alexander"}}> 
                                <b>1 КЛАС (малий, особливо малий)</b> – Audi A1, Toyota Yaris, Mini Cooper, BMW 1, Audi A3, Nissan Juke, Fiat 500, Mercedes-Benz A
                            </li>
                            <li class="mb-2" style={{fontSize:20, fontFamily:"Alexander"}}> 
                                <b>2 КЛАС (середній, бізнес, спорт купе)</b> – Audi A4, BMW 3, Mercedes-Benz C, Lexus IS, Infiniti G35, Jaguar X-Type, Jaguar XF, Jaguar S-Type, Audi A6, BMW 5, Mercedes-Benz E, Lexus ES, Lexus GS, Toyota Camry, Audi TT, MINI Countryman
                            </li>
                            <li class="mb-2" style={{fontSize:20, fontFamily:"Alexander"}}> 
                                <b>3 КЛАС (середній кросовер-позашляховик)</b> – W Tiguan, Lexus NX, Lexus RX, BMW X3, BMW X4, BMW X5, BMW X6, , Porsche 911, Porsche Macan, Porsche Cayenne, Mazda CX-5, Mazda CX7, Mercedes Benz M, Nissan Murano, Infiniti FX, Mercedes-Benz S, Bentley, BMW 7, Audi Q5, Audi R8, Audi A8
                            </li>
                            <li style={{fontSize:20, fontFamily:"Alexander"}}> 
                                <b>4 КЛАС (повнорозмірний кросовер – позашляховик, Lux sedan)</b> – Maybach, Rolls-Royce, Ferrari, Lamborghini, Bentley Mulsanne, Bentayga, Cadillac Escalade, Range Rover, Toyota Land Cruiser, Audi Q7, Mazda CX-9, Honda Pilot, Mercedes Benz GL, Mercedes Benz G, VW Touareg
                            </li>
                        </ul>
                </div>
            </div>

        </div>
    )
} 

export default ServicePage;

 