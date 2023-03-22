import { Container,Item } from "../TransactionItem/TransactionItem.styled";

export const TransactionItem = ({type, amount, currency}) => {
    return (
    <Container>
        <Item>{type}</Item>
        <Item>{amount}</Item>
        <Item>{currency}</Item>
    </Container>
    )
};