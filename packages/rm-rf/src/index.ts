function loop(n, each, done) {
  if (n === 0) return done();
  const finalDone = done || (() => {});
  let counter = 0;
  let i = -1;

  while (++i < n) {
    call(i);
  }

  function call(i) {
    let unlock = true;

    each(() => {
      if (!unlock) return;
      unlock = false;

      if (++counter === n) finalDone?.();
    }, i);
  }
}

import { globSync } from "glob";
import { rimrafSync } from "rimraf";

function rmRf(pattern, options, callback) {
  let cb = callback;
  let opts = options;

  if (typeof callback === "undefined") {
    cb = options;
  } else {
    opts = {};
  }

  const filenames = globSync(pattern, opts);

  if (filenames.length === 0) {
    return cb?.();
  }

  loop(
    filenames.length,
    (done, i) => {
      const filename = filenames[i];

      rimrafSync(filename);
      done();
    },
    cb,
  );
}

export default rmRf;
