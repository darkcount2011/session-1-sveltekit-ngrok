// Both layouts and pages have their own server files, layout files are used to wrap pages / routes, so layout server files are used to initiate data that is needed for all pages / routes that use that layout.

export async function load() {
  console.log("layout server file loaded");
  return {
    layoutData: "layout data",
  };
}
