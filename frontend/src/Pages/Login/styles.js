import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height:100vh;
    display:flex;
    align-items: center;
    justify-content:center;
    
    div {
        width: 100%;

        img {
            width: 200px;
            padding-left: 40px;
        }

        h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
            padding: 50px 50px 0 50px;
            font-weight: 600;
        }
        
        form{ 
            padding: 50px;
            display: grid;
            label {
                padding: 20px 0 5px 0;
                font-family: Arial, Helvetica, sans-serif;
            }
            p {
                padding: 5px 0 10px 0;
                float:right;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }

`;
