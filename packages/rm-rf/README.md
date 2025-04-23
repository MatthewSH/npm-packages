# rm-rf

Rimraf with glob, **all in one**

## Usage

```javascript
var rmrf = require("rm-rf");

rmrf("**/*.txt", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Files deleted");
  }
});
```
