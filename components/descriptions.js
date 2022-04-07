export const newsSiteDescription =
  "This is a news website similar to the Yahoo News format. " +
  "You can use the hamburger menu for selecting preset topics, or the search bar " +
  "for more specific topics. Use the expand chevron below for a more in-depth explanation " +
  "and repo locations.";

export const newsSiteExplanation =
  "This project was built using React with NextJs and uses the free version of NewsAPI. " +
  "The React front end is hosted on Vercel. A library called SWR is used to create a react hook " +
  "that accesses the NextJs/api/server file, and the API call within the React folder structure. This allows " +
  "the server to work within the front end folder structure and not have to be hosted " +
  "separately. Axios is used to make the API calls and NextJs is used to resolve cors and return " +
  "api data from a cache, while automatically revalidating that cache behind the scenes. " +
  "This makes the rendering very fast after the first call to the API.";

export const newsSiteFrontEndRepo = "https://github.com/tommyj99/news-site.git";
