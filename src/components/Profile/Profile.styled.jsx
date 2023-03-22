import styled from "@emotion/styled";

export const Container = styled.div`
text-align: center;
width: 300px;
font-size: 16px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
border-radius: 6px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
`;

export const Description = styled.div`
padding-bottom: 25px;
`;

export const Avatar = styled.img`
border: 1px #858585 solid;
border-radius: 50%;
height: 150px;
margin: 25px;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: bold;
margin: 5px;
`;

export const Tag = styled.p`
color: #858585;
font-weight: 700;
margin: 5px;
`;

export const Location = styled.p`
color: #858585;
font-weight: 700;
margin: 5px;
`;

export const Stats = styled.ul`
display: flex;
justify-content: center;
padding: 0;
margin: 0;
`;

export const StatEl = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
list-style-type: none;
border-top: 1px #858585 solid;
width: 100px;
height: 70px;
`; 

export const Label = styled.span`
color: #858585;
font-weight: 700;
`;

export const Quantity = styled.span`
font-size: 18px;
font-weight: bold; 
`;