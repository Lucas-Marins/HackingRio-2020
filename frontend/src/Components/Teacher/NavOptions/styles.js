import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-around;

    background: rgba(90,156,187,1);
    background: -moz-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(90,156,187,1)), color-stop(100%, rgba(0,214,148,0.75)));
    background: -webkit-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -o-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -ms-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: linear-gradient(to right, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5a9cbb', endColorstr='#00d694', GradientType=1 );

    p {
        color: #fff;
        display:flex;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const Button = styled(Link)`
    background: none;
    border: none;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    align-content: center;
    text-decoration: none;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
`;
