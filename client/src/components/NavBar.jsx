import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button, Container } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant="outline-success" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant="outline-success" onClick={() => logOut()} className='ms-2'>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant="outline-success" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    )
})

export default NavBar