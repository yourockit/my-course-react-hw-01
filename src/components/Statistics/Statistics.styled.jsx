import styled from "@emotion/styled";

export const Container = styled.section`
text-align: center;
width: 300px;
font-size: 16px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
border: 1px #858585 solid;
border-radius: 6px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
`;

export const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
height: 80px;
font-size: 20px;
font-weight: bold;
color: #858585;
text-transform: uppercase;
border-bottom: 1px #858585 solid;
margin: 0;
`;

export const StatList = styled.ul`
display: flex;
justify-content: center;
padding: 0;
margin: 0;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
list-style-type: none;
width: 100px;
height: 70px;
`; 

export const Label = styled.span`
color: #858585;
font-weight: 700;
`;

export const Percentage = styled.span`
font-size: 18px;
font-weight: bold; 
`;