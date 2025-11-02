export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
};

const contacts: Contact[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "O Sullivan",
  },
  {
    id: 3,
    firstName: "Sarah",
    lastName: "Murphy",
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Kelly",
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Ryan",
  },
  {
    id: 6,
    firstName: "Michael",
    lastName: "Walsh",
  },
  {
    id: 7,
    firstName: "Aoife",
    lastName: "McCarthy",
  },
  {
    id: 8,
    firstName: "Patrick",
    lastName: "O Brien",
  },
  {
    id: 9,
    firstName: "Niamh",
    lastName: "Brennan",
  },
  {
    id: 10,
    firstName: "David",
    lastName: "Byrne",
  },
  {
    id: 11,
    firstName: "Sophie",
    lastName: "Doyle",
  },
  {
    id: 12,
    firstName: "Liam",
    lastName: "Connor",
  },
  {
    id: 13,
    firstName: "Rachel",
    lastName: "Fitzgerald",
  },
  {
    id: 14,
    firstName: "Sean",
    lastName: "Gallagher",
  },
  {
    id: 15,
    firstName: "Claire",
    lastName: "Hughes",
  },
];

export const getContacts = async () => {
  // simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return contacts;
};

export const searchContacts = async (input: string) => {
  // simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return contacts.filter(
    (i) =>
      i.firstName.toLowerCase().includes(input.toLowerCase()) ||
      i.lastName.toLowerCase().includes(input.toLowerCase()),
  );
};

export const deleteContact = async (id: number) => {
  // simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  contacts.splice(
    contacts.findIndex((i) => i.id === id),
    1,
  );
};
