import styled from "styled-components";

const Item = styled.div`
  border: 1px solid black;
  width: 10rem;
`;

const IMG = styled.img`
  width: 10rem;
  height: 10rem;
`;
const ListItem = ({ props }) => {
  return (
    <Item>
      <IMG src={props.img} alt="img" />
      <p>{props.title}</p>
      <p>{props.time}</p>
    </Item>
  );
};
export default ListItem;
