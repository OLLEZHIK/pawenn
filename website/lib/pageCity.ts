// The city a page is about, for the shared header and footer: the layout
// renders them without the page's params, so the page marks its city with
// <meta name="pawenn:city"> (React hoists it into <head>) and the header
// and footer read it in the browser. Without it (home, help pages) they
// fall back to the language's city.
export const PAGE_CITY_META = "pawenn:city";
