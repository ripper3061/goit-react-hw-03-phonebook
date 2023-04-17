import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactsForm, AddButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetContactForm();
  };

  resetContactForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          id={this.numberInputId}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <AddButton type="submit">Add contact</AddButton>
      </ContactsForm>
    );
  }
}

export default ContactForm;
