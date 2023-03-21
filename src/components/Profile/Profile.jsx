import PropTypes from "prop-types";
import {Container, 
    Description, 
    Avatar, 
    Name, 
    Tag, 
    Location, 
    Stats, 
    StatEl, 
    Label, 
    Quantity} 
from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
return <Container>
<Description>
  <Avatar
    src={avatar}
    alt="User avatar"
    className="avatar"
  />
  <Name className="name">{username}</Name>
  <Tag className="tag">@{tag}</Tag>
  <Location className="location">{location}</Location>
</Description>

<Stats>
  <StatEl>
    <Label>Followers</Label>
    <Quantity>{stats.followers}</Quantity>
  </StatEl>
  <StatEl>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </StatEl>
  <StatEl>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
  </StatEl>
</Stats>
</Container>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
    )
};