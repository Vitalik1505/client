import React, { useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import InterList from "../InterList";
import { fetchInter } from "../../http/serviceAPI";
import {Context} from "../../index"
import { observer } from "mobx-react-lite";
 
 

const ShowІnterdiction = observer(({show, onHide}) => {
    
    const {inter} = useContext(Context);

    useEffect( ()=> {
        fetchInter().then(data => inter.setInters(data))
    })
    return  (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton style={{backgroundColor: "#CCCCCC"}}>
        <Modal.Title id="contained-modal-title-vcenter">
             Перегяд замовлень
        </Modal.Title>
        </Modal.Header > 
            <Modal.Body style={{backgroundColor: "#E6E6E6"}}> 
                <InterList />
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#CCCCCC"}}>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal> 
         
    )
})
export default ShowІnterdiction;