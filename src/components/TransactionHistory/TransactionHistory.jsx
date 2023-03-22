import PropTypes from "prop-types";
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

TransactionHistory.prototype ={
    items: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};