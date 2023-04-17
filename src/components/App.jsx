import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppSection } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmithandler = data => {
    const id = nanoid(10);

    if (this.checkContactsName(data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...data }],
    }));
  };

  checkContactsName = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => normalizedName === name.toLowerCase());
  };

  filterChange = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const {
      formSubmithandler,
      filterChange,
      getVisibleContacts,
      deleteContact,
    } = this;

    return (
      <AppSection>
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmithandler} />
        </Section>

        <Section title="Contacts">
          <Filter onChange={filterChange} value={this.state.filter} />
          <ContactsList
            contactsList={getVisibleContacts()}
            deleteContact={deleteContact}
          />
        </Section>
      </AppSection>
    );
  }
}

export default App;
