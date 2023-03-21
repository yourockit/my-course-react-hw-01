import { Container, Online, Offline, StatusWrap, Avatar, Name } from "./FriendItem.styled";

export const FriendItem = ({avatar, name, isOnline}) => {
    return (
    <Container>
        <StatusWrap>{isOnline ? <Online/> : <Offline/>}</StatusWrap>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Container>
    )
}