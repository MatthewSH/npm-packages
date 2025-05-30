function rightPad(input: string, length: number, char?: string): string {
  if (typeof input !== "string") {
    throw new Error("The string parameter must be a string.");
  }
  if (typeof length !== "number") {
    throw new Error("The length parameter must be a number.");
  }
  if (typeof char !== "string" && char) {
    throw new Error("The character parameter must be a string.");
  }

  let i = -1;
  const paddingLength = length - input.length;
  const paddingChar = char ?? " ";
  let result = input;
  while (++i < paddingLength) {
    result += paddingChar;
  }

  return result;
}

export default rightPad;
