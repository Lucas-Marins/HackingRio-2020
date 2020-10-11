import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    text-align: center;
    top: 0;
    position: absolute;
    width:100%;
    height: 200px;
    z-index: -1;
    
    background: rgba(90,156,187,1);
    background: -moz-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(90,156,187,1)), color-stop(100%, rgba(0,214,148,0.75)));
    background: -webkit-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -o-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: -ms-linear-gradient(left, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    background: linear-gradient(to right, rgba(90,156,187,1) 0%, rgba(0,214,148,0.75) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5a9cbb', endColorstr='#00d694', GradientType=1 );

    img {
        width: 180px;
        margin-bottom: 60px;
    }
`; 