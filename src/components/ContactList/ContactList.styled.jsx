import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  margin: 0;
  margin-bottom: 10px;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(203, 203, 203, 0.98);

  :last-child {
    margin-bottom: 0px;
  }
`;

export const ItemText = styled.p`
  margin-right: 30px;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  background-color: #dedede;
  color: #2c2c2c;
  font-weight: 500;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.62;
  text-align: center;
  cursor: pointer;
  padding: 4px 8px;
  border: 0px;
  border-radius: 4px;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  &:hover {
    background-color: #02c0ff;
    color: #fff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
