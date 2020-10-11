import styled from 'styled-components';

export const Container = styled.div`
 padding: 10px;
    form {
        display: grid;

        input {
            margin: 10px 0 10px 0;
        }

        select {
            &:nth-child(2n+1) {
                margin-top: 10px;
            }
        }

        button {
            bottom:5%;
            background: #00acb3;
            width:93%;
            padding: 10px;
            text-align:center;
            text-decoration: none;
            position: fixed;
            transition: 0.3s;
            border-radius: 25px;
            border: transparent;
            color: #fff;

            display:flex;
            justify-content: center;
            align-items: center;

            .icon {
                padding-left: 5px;
            }
    
            &:hover {
                background-color: #00898F;
            }
        }
    }
`;