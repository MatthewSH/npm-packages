import { escapeString, minors, toCapitalCase } from "./utils";

const escaped = minors.map(escapeString);
const minorMatcher = new RegExp(`[^^]\\b(${escaped.join("|")})\\b`, "ig");
const colonMatcher = /:\s*(\w)/g;

const toTitleCase = (_string: string): string =>
  toCapitalCase(_string)
    .replace(minorMatcher, (minor) => minor.toLowerCase())
    .replace(colonMatcher, (_, letter) => letter.toUpperCase());

export default toTitleCase;
