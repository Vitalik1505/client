import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import adminbg from "../assets/adminbg.jpg"
import CreateService from "../components/modals/CreateService"
import ShowІnterdiction from "../components/modals/ShowІnterdiction"

const Admin = () => {
    const [serviceCreatVisible, setServiceCreatVisible] = useState(false)
    const [serviceInterVisible, setServiceInterVisible] = useState(false)
    return  (
        <div style={{backgroundImage: "url(" + adminbg + ")", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
         <Container className="d-flex flex-column" style={{height: window.innerHeight - 54}}>
             <Button variant={"success"} className="mt-3 pt-2" onClick={() => setServiceCreatVisible(true)}>Добавити послугу</Button>
             <Button variant={"success"} className="mt-3 pt-2" onClick={() => setServiceInterVisible(true)}>Перегляд замовлень</Button>
             <CreateService show={serviceCreatVisible} onHide={() => setServiceCreatVisible(false)}/>
             <ShowІnterdiction show={serviceInterVisible} onHide={() => setServiceInterVisible(false)}/>
         </Container>
         </div>
    )
}
export default Admin;