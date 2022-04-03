import React, {useState}  from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import {Form} from 'react-bootstrap'
import {createService} from '../../http/serviceAPI'
 
const CreateService = ({show, onHide}) => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addService = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('img', file)
        createService(formData).then(data => onHide())
    }

    return  (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Добавити послугу
        </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Введіть назву послуги..."} className="mt-3" value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Control placeholder={"Введіть опис послуги..."} className="mt-3" value={description} onChange={e => setDescription(e.target.value)}/>
                    <Form.Control type="number" placeholder={"Введіть ціну послуги..."} className="mt-3" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                    <Form.Label className="mt-3">Додайте зображення послуги</Form.Label>
                    <Form.Control type="file" onChange={selectFile}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addService}>Добавити</Button>
            </Modal.Footer>
        </Modal> 
    )
}

export default CreateService;