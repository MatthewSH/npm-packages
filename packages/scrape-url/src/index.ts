import { load } from "cheerio";
import wretch from "wretch";

async function scrape(method: "GET" | "POST", options, selectors) {
  let url = options.url;

  if (!/\w:\/\//.test(options.url)) {
    url = `http://${options.url}`;
  }

  let normalizedSelectors = selectors;

  if (typeof selectors === "string") {
    normalizedSelectors = [selectors];
  }

  const body =
    method === "POST"
      ? await wretch(url)
          .post(options.body || {})
          .text()
      : await wretch(url).get().text();

  const $ = load(body);

  const result = [].concat(
    normalizedSelectors.map((selector) => {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const elements: any[] = [];
      const selected = $(selector);

      selected.each((_, element) => {
        elements.push($(element));
      });

      return elements;
    }),
  );

  return result.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(curr);
    }
    return acc;
  }, []);
}

export async function get(options, selectors) {
  return scrape("GET", options, selectors);
}

export async function post(options, selectors) {
  return scrape("POST", options, selectors);
}
