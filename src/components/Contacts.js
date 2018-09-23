import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    constructor() {
        super();

        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "jj@j.co",
                    phone: "225-883"
                },
                {
                    id: 2,
                    name: "Karen Waz",
                    email: "kwaz@j.co",
                    phone: "245-883"
                },
                {
                    id: 3,
                    name: "Mike Rib",
                    email: "mrib@j.co",
                    phone: "217-883"
                }
            ]
        };
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => {
                    return (
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Contacts;
