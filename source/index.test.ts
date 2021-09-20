import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("f")).toStrictEqual("CO======");
});

test("#decode", () => {
  expect(decode("CO======").toString("utf8")).toStrictEqual("f");
});
