import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    display:flex;
    justify-content: space-evenly;
    width:100%;
    bottom:0;
`;

export const Button = styled(Link)`
        width: 150px;
        border: 0.3px solid #cdc7c2;
        text-align: center;
        align-items: center;
        display:flex;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        color: #fff;
        background:var(--green);
        padding: 5px 20px;
        border-radius: 25px;
        text-transform: uppercase;
        transition: 0.5s;

        &:hover {
            background: #1BB783;
        }

        &:nth-child(2) {
            background:#eeeeee;
            color: #000;
            transition: 0.5s;

            &:hover {
                background: #D6D6D6;
                /* color: #fff; */
            }
        }
`;