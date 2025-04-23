# scrape-url

Scrape URLs with CSS selectors and return elements.

## Usage

**Basic Usage**

```javascript
var scrape = require("scrape-url");

scrape("http://www.google.com/", "a", function (error, links) {
  if (error) {
    throw new Error(error);
  }
  links.forEach(function (element, index) {
    console.log(index + 1 + ". " + element.text());
  });
});
```

You can also pass through an array of selectors.

```javascript
scrape(
  "http://www.google.com/",
  ["a", "p"],
  function (error, links, paragraphs) {
    //
  }
);
```

Instead of a string URL, you can pass through options if you so wish.

```javascript
var options = {
  url: "http://google.com",
  headers: {
    "user-agent": "SoCool 2.0"
  }
};

scrape(options, 'p', ...);
```

**Sending Post Requests**

Along with the normal `get` request scraping, you can also send post requests.

```javascript
var options = {
  url: "http://suchwow.com/form.php",
  form: {
    message: "Whoa, such a form.",
  },
};

scrape.post(options, ["body .response"], function (error, content) {
  //
});
```
