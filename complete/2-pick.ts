function pick<TObject extends object, TKey extends keyof TObject>(obj: TObject, keys: TKey[]) {
  const result = {} as Pick<TObject, TKey>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const laptop = {
  id: "LAP-123",
  price: 999,
  description: "A fast laptop",
  stock: 10,
};

const catalogInfo = pick(laptop, ["id", "price"]);
console.log(catalogInfo.price * 1.1);
