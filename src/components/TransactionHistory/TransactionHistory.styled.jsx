import styled from "@emotion/styled";

export const TransitionWrap = styled.table`
border-collapse: collapse;
list-style-type: none;
width: 300px;
font-size: 16px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
border-radius: 6px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
`;

export const Container = styled.tr`
`;

export const Item = styled.th`
text-transform: uppercase;
text-align: left;
width: 90px;
padding: 5px 0 5px 10px;
margin: 0;
&:nth-child(1), :nth-child(2) {
    border-right: 1px #858585 solid;
};  
`;

