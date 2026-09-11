export default async function sitemap() {
  const baseUrl = "https://vikkmore.vercel.app";
  const lastModified = new Date("2026-09-11T00:00:00.000Z");

  const paths = ["", "/about"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "daily",
    priority: path === "" ? 1 : 0.8,
  }));
}
