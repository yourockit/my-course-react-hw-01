import PropTypes from "prop-types";
import { FriendItem } from "./FriendItem/FriendItem";
import { FriendListWrap } from "./FriendList.styled";

export const FriendList = ({friends}) => {
return (
<FriendListWrap>
    {friends.map(friend => (
        <FriendItem 
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        ></FriendItem>
    ))}
</FriendListWrap>
)};

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
};