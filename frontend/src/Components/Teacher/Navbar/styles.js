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
        /* border: 0.3px solid #cdc7c2; */
        border-radius: 25px;
        text-align: center;
        align-items: center;
        display:flex;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        color: #fff;
        background: #52cacc;
        padding: 5px 15px;
        text-transform: uppercase;
        transition: 0.5s;
        /* font-size:/ */

        &:hover {
            background: #00acb3;
        }

        &:nth-child(2) {
            background:#d8d8d8;
            color: #000;
            transition: 0.5s;

            &:hover {
                background: #f6f6f6;
            }
        }
`;