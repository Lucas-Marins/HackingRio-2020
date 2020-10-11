import styled from 'styled-components';

export const Container = styled.div`
    form {

        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 3px;
        position: fixed;
        bottom:5%;
        width: 100%;
        img {
            width: 50px;
            border-radius: 50%;
            background: #000;
        }
        input {
            padding: 10px; 
            width: 50%; 
            margin-right: 0.5%;
        }
        
        button {
            width: 20%; 
            border: none; 
            padding: 10px;
            color: #000;
            background:#f0eeee;
        }
    }
`;