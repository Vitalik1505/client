import React, {useContext, useState} from 'react';
import {Card, Container, Form, Row} from 'react-bootstrap';
import {Button} from "react-bootstrap"
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/consts";
import mainService from "../assets/mainService.jpg"
import {login, registration} from "../http/userAPI"
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import {useHistory} from "react-router-dom" 

const Auth = observer( () => {
    
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const click = async () => {
    try {
            let data
            if (isLogin) {
                data = await login(email, password);
                if(data.role === "ADMIN") { user.setIsAdmin(true) }
                else{user.setIsAdmin(false)}
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
            
        } catch (e) {
            alert(e.response.data.message);
        } 
    }
     
    return  (
        <div style={{backgroundImage: "url(" + mainService + ")", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
                <Card style={{width:600}} className="p-5 bg-dark text-light">
                    <h2 className="m-auto mb-3">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                        <Form className="d-flex flex-column">
                            <Form.Control className="mt-3" placeholder="Введіть емайл..." value={email} onChange={e => setEmail(e.target.value)}/>
                            <Form.Control className="mt-3" type="password" placeholder="Введіть пароль..." value={password} onChange={e => setPassword(e.target.value)}/> 
                                <Row className="d-flex justify-content-between mt-3>"> 
                                    {isLogin ?
                                        <div className="mt-2">
                                            <NavLink to={REGISTRATION_ROUTE}>Створити акаунт</NavLink>
                                        </div>
                                    :
                                        <div className="mt-2">
                                            <NavLink to={LOGIN_ROUTE}>Є акаунт</NavLink>
                                        </div>
                                    }
                                        <Button className="mt-3" variant={"outline-success"} onClick={click}>
                                            {isLogin ? 'Ввійти' : 'Зареєструватись'}
                                        </Button>
                                </Row>
                            </Form> 
                    </Card>
            </Container>
        </div>
    )
})
 
export default Auth;