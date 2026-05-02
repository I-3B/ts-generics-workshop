function pick(obj: object, keys: string[]) {
  const result = {};
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
console.log(catalogInfo);
//! { id: "LAP-123", price: 999 }

pick("string", ["id", "price"]);

pick(laptop, ["id", "non-existent-key"]);

console.log(catalogInfo.price * 1.1);
//          ^?
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
type KeyofEx = keyof { a: number; b: string; c: boolean };
//   ^?

type PickEx = Pick<{ a: number; b: string; c: boolean }, "a" | "c">;
//   ^?
