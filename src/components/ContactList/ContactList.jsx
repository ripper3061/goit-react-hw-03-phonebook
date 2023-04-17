import PropTypes from 'prop-types';
import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';

export const ContactsList = ({ contactsList, deleteContact }) => {
  return (
    <ListOfContacts>
      {contactsList.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {number}
          </ItemText>
          <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </ListOfContacts>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
