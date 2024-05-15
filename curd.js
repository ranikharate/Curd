// Phone book object to store contacts
const phoneBook = {
    contacts: [],
  
    // Function to add a new contact
    addContact: function(name, phoneNumber, email) {
      this.contacts.push({ name, phoneNumber, email });
      console.log(`${name} has been added to the phone book.`);
    },
  
    // Function to search for a contact
    searchContact: function(name) {
      const contact = this.contacts.find(contact => contact.name === name);
      if (contact) {
        console.log(`Name: ${contact.name}\nPhone Number: ${contact.phoneNumber}\nEmail: ${contact.email}`);
      } else {
        console.log(`Contact with name ${name} does not exist.`);
      }
    },
  
    // Function to update a contact
    updateContact: function(name, newPhoneNumber, newEmail) {
      const contactIndex = this.contacts.findIndex(contact => contact.name === name);
      if (contactIndex !== -1) {
        this.contacts[contactIndex].phoneNumber = newPhoneNumber;
        this.contacts[contactIndex].email = newEmail;
        console.log(`${name}'s contact information has been updated.`);
      } else {
        console.log(`Contact with name ${name} does not exist.`);
      }
    },
  
    // Function to delete a contact
    deleteContact: function(name) {
      const contactIndex = this.contacts.findIndex(contact => contact.name === name);
      if (contactIndex !== -1) {
        this.contacts.splice(contactIndex, 1);
        console.log(`${name} has been deleted from the phone book.`);
      } else {
        console.log(`Contact with name ${name} does not exist.`);
      }
    }
  };
  
  // Testing the phone book functionality
  phoneBook.addContact("rani kharate", "7648783990", "rani@gmail.com");
  phoneBook.addContact("surbhi ", "8989800300", "surbhi@gmail.com");
  
  phoneBook.searchContact("rani kharate");
  phoneBook.searchContact("Peeu Kharate");
  
  phoneBook.updateContact("rani kharate", "7649683060", "rani22@gmail.com");
  
  phoneBook.deleteContact("rani kharate");
  phoneBook.deleteContact("Peeu Kharate");
  