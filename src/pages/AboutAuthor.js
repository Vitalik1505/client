import React from "react";
import { Container, Card } from "react-bootstrap";
import mainAuthor from "../assets/mainAuthor.jpg"

const AboutAuthor = () => {
    return  (
        <div style={{backgroundImage: "url(" + mainAuthor + ")", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
                <Card style={{width:600}} className="p-5 bg-dark text-light">
                    <h2 className="m-auto mb-3">Про автора</h2>
                    <p>Виконав студент групи КІ-405 Пйонтковський Віталіій</p> 
                </Card>
            </Container>
        </div>
    )
}
export default AboutAuthor;