import styled from "@emotion/styled";

export const Container = styled.li`
display: flex;
list-style-type: none;
width: 300px;
font-size: 16px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
border: 1px #858585 solid;
border-radius: 6px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
`;

export const StatusWrap = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
`;

export const Online= styled.div`
width: 10px;
height: 10px;
border: 1px #63ca78 solid;
border-radius: 50%;
background: #63ca78;
`;

export const Offline= styled.div`
width: 10px;
height: 10px;
border: 1px #ca6363 solid;
border-radius: 50%;
background: #ca6363;
`;

export const Avatar = styled.img`
border-radius: 6px;
margin: 15px;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: bold;
margin-top: 22px;
`;