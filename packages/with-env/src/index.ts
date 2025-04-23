import { readFileSync } from "node:fs";

function envApply(file) {
  if (typeof file !== "string") {
    envApply("./.env");
  }

  try {
    const document = readFileSync(file).toString().split("\n");

    let i = -1;

    while (++i < document.length) {
      if (!document[i]) {
        continue;
      }
      const row = document[i].split(/\s*=\s*/);

      // biome-ignore lint/style/noNonNullAssertion: Known to be non-null
      process.env[row.shift()!] = row.join("=").replace(/['"]/g, "");
    }
  } catch (exception) {
    throw new Error(
      "The .env file could not be found or read correctly. Are you sure it is in the root directory?",
    );
  }
}

export default envApply;
