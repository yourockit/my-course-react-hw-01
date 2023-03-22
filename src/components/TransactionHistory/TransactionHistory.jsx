import { TransactionItem } from "./TransactionItem/TransactionItem";
import { TransitionWrap, Container, Item } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
<TransitionWrap>
  <thead>
    <Container>
      <Item>Type</Item>
      <Item>Amount</Item>
      <Item>Currency</Item>
    </Container>
  </thead>
  {items.map(item => (
      <TransactionItem 
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
      >
    </TransactionItem>
  ))}
</TransitionWrap>
    )
};