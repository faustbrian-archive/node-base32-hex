import { base32hex } from "rfc4648";

export const encode = (content: string): string =>
  base32hex.stringify(Buffer.from(content));

export const decode = (content: string): Buffer =>
  Buffer.from(base32hex.parse(content));
