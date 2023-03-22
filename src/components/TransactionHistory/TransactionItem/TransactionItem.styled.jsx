import styled from "@emotion/styled";

export const Container = styled.tr`
background-color: #cfcfcf;
&:nth-child(even) {
    background-color: #ebebeb; 
}
`;

export const Item = styled.td`
text-transform: capitalize;
text-align: left;
width: 90px;
padding: 5px 0 5px 10px;
margin: 0;
&:nth-child(1), :nth-child(2) {
    border-right: 1px #858585 solid;
};  
`;