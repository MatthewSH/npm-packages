import toTitle from "to-title";

function slugToTitle(slug: string): string {
  const trimmed = slug.trim();
  const titleCased = toTitle(
    trimmed.replace(/[-_]+/g, " ").replace(/([\.,;])/g, "$1 "),
  );

  return titleCased;
}

export default slugToTitle;
