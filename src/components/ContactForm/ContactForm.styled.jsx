import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  display: grid;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  margin-top: 15px;
  background-color: #dedede;
  color: #2c2c2c;
  font-weight: 500;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  padding: 8px 8px;
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
