import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("f")).toStrictEqual("co");
});

test("#decode", () => {
  expect(decode("co").toString("utf8")).toStrictEqual("f");
});
