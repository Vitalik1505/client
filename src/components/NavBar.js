import React, { useContext } from "react";
import {Context} from "../index"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { observer } from "mobx-react-lite";
import {useHistory} from "react-router-dom"
import { ABOUTAUTHOR_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, SERVICE_ROUTE, MAIN_ROUTE } from "../utils/consts";
 
 
const NavBar = observer (() => {
    const {user} = useContext(Context);
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    } 
    return (
        <Navbar bg="dark" variant="dark">
        <Container>   
        <Navbar.Brand>YOUR DETAILING</Navbar.Brand>      
                {user.isAuth ? 
                <Nav className="ms-auto" style={{color:"white"}}>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(MAIN_ROUTE)}>Головна</Button>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(SERVICE_ROUTE)}>Послуги</Button>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(ABOUTAUTHOR_ROUTE)}>Про автора</Button>
                    {user.isAdmin ? <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(ADMIN_ROUTE)}>Адмін Панель</Button> : <div> </div> }  
                    <Button variant={"outline-light"} className="ms-2" onClick={() => logOut()}>Вийти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color:"white"}}>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(MAIN_ROUTE)}>Головна</Button>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(SERVICE_ROUTE)}>Послуги</Button>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(ABOUTAUTHOR_ROUTE)}>Про автора</Button>
                    <Button variant={"outline-light"} className="ms-2" onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    )
})
 
export default NavBar;

