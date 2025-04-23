const isNode: boolean = !!(
  typeof process !== "undefined" &&
  process.versions &&
  process.versions.node
);

export default isNode;
