type User = {
  id: number;
  firstName: string;
  active: boolean;
};
const users: User[] = [
  { id: 1, firstName: "Alice", active: true },
  { id: 2, firstName: "Bob", active: false },
];

function map(arr, transformer) {
  const result = [];
  for (const item of arr) {
    result.push(transformer(item));
  }
  return result;
}

const activeUserNames = map(users, (user) =>
  user.active ? user.firstName.toUpperCase() : "[INACTIVE USER]",
);

console.log(activeUserNames);
//          ^?
