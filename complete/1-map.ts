const users = [
  { id: 1, firstName: "Alice", active: true },
  { id: 2, firstName: "Bob", active: false },
];

function map<TItem, TTransformed>(
  arr: TItem[],
  transformer: (item: TItem) => TTransformed,
): TTransformed[] {
  const result: TTransformed[] = [];
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
