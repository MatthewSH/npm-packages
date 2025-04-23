import clean from "to-no-case";

export function escapeString(str) {
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, "\\$1");
}

function toSpaceCase(string) {
  return clean(string)
    .replace(/[\W_]+(.|$)/g, (matches, match) => (match ? ` ${match}` : ""))
    .trim();
}

export function toCapitalCase(string) {
  return toSpaceCase(string).replace(
    /(^|\s)(\w)/g,
    (_, previous, letter) => previous + letter.toUpperCase(),
  );
}

export const minors = [
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "en",
  "for",
  "from",
  "how",
  "if",
  "in",
  "neither",
  "nor",
  "of",
  "on",
  "only",
  "onto",
  "out",
  "or",
  "per",
  "so",
  "than",
  "that",
  "the",
  "to",
  "until",
  "up",
  "upon",
  "v",
  "v.",
  "versus",
  "vs",
  "vs.",
  "via",
  "when",
  "with",
  "without",
  "yet",
];
