import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    margin-top: 120px;

    div {
        line-height: 25px;

        img {
            border-radius: 50%;
            background: #000;
            width: 150px;
        }

        h1 {
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }

        h2 {
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
        }

        p {
            font-size: 14px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    ul {
        width: 250px;
        
        li {
            padding-top: 5px;
            
            button {
                padding: 5px 5px;
                width: 100%;
                border-radius: 25px;
                border: 1px solid #cccccc;
            }
        }
    }
`;