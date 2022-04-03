import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceList from "../components/ServiceList";
import Image from "react-bootstrap/Image";
import service_left from "../assets/service_left.jpg"
import { observer } from 'mobx-react-lite';
import {Context} from "../index"
import {fetchServices} from "../http/serviceAPI"
import serviceBg from "../assets/serviceBg.jpg"

const Service = observer( () => {
    const {service} =  useContext(Context);

    useEffect(() => {
        fetchServices().then(data => service.setServices(data))
    })

    return  (
        <div style={{backgroundImage: "url(" + serviceBg + ")", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>  
         <Container>
            <Row>
                <Col md={3}>
                    <div className="mt-3 text-light p-1" style={{backgroundColor: 'rgba(52, 52, 52, 0.9)', borderRadius:'10px'}}>
                        <Image width={300}   src={service_left} style={{'borderRadius':'10px'}}/>
                        <p className="mt-3" style={{textIndent:'20px'}}> 
                            <b>Автокомплекс YOUR DETAILING - </b>
                             один з найсучасніших автокомплексів в Тернополі. Зручне розташування, плюс колосальна економія часу. Це вже оцінили понад 500 постійних наших клієнтів.
                        </p>
                        <p style={{textIndent:'20px'}}>
                            На території комплексу знаходиться автомийка тунельного типу з додатковими постами для догляду за салоном, що безсумнівно,
                            робить нас унікальними в сегменті автоматичних автомийок. Також на території розташований шиномонтаж. 
                            Для Вас послуги шиномонтажу надаються цілодобово. Ми з радістю візьмемо Ваші колеса на зберігання або допоможемо в покупці гуми. 
                            Для всіх клієнтів на постійній основі діє програма лояльності.
                            Активно шукаємо корпоративних клієнтів. Пропонуємо вигідні умови співпраці. На сьогоднішній день з нами працюють такі компанії,
                            як Sony Україна, DCH, Тетра Пак, агрохолдинг KERNEL і багато інших.
                        </p>
                    </div>
                </Col>
                <Col md={9} className="mb-3">
                    <ServiceList/>
                </Col>
            </Row>
         </Container>
        </div>
    )
})
export default Service;
