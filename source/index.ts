import { encoding } from "bcrypto";

export const encode = (content: string): string =>
  encoding.base32.encodeHex(Buffer.from(content));

export const decode = (content: string): Buffer =>
  encoding.base32.decodeHex(content);
