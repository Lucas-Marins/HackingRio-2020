import React from 'react';

import { Container } from './styles';

import logo from '../../Assets/logo-myclass.svg';

function Login() {
    return (
        <Container>

            <div>
                <img src={logo} alt={logo}/>
                <h1>Login</h1>
                <form action="/teacher">
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder="Digite seu e-mail"/>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" required placeholder="Digite sua senha"/>

                    <p>
                        Forget Password?
                    </p>

                    <button type="submit" value="Submit">
                        Log in
                    </button>
                </form>
            </div>
        </Container>
    )
};

export default Login;
