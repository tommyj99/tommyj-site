export const newsSiteDescription =
  "This is a news website similar to the Yahoo News format. " +
  "You can use the hamburger menu for selecting preset topics, or the search bar " +
  "for more specific topics. Use the expand chevron below for a more in-depth explanation " +
  "and repo locations.";

export const newsSiteExplanation =
  "This project was built using React with NextJs and uses the free version of NewsAPI. " +
  "The React front end is hosted on Vercel. A library called SWR is used to create a react hook " +
  "that accesses the NextJs/api/server file and the API call, all within the React folder structure. This allows " +
  "the server to work within the front end folder structure and not have to be hosted " +
  "separately. Axios is used to make the API calls and NextJs is used to resolve cors and return " +
  "api data from a cache, while automatically revalidating that cache behind the scenes. " +
  "This makes the rendering very fast after the first call to the API. NextJs is a great library for " +
  "search engine optimization";

export const newsSiteRepo = "https://github.com/tommyj99/news-site.git";

export const cryptoSiteDescription =
  "This is a cryptocurrency website that monitors crypto prices. " +
  "You can search the top 1000 cryptos by volume using the search bar. You can also choose the exchange " +
  "that you would like to get the pricing from. More features will be added in the future such as " +
  "buying and selling while connected to a faux banking app. Use the expand chevron below for a more " +
  "in-depth explanation and repo locations.";

export const cryptoSiteExplanation =
  "This project was built using React with NextJs and uses the free CoinGecko " +
  "and CryptoWatch API's. It uses Redux to manage state and NextJs to manage the routing from the initial async " +
  "thunk call to an express type server file which resolves cors. This also allows the express type backend  " +
  "file to work withing the frontend folder structure and not have to be hosted seperately. NextJs also allows for " +
  "faster loading of the static components. NextJs is a great library for search engine optimization";

export const cryptoSiteRepo =
  "https://github.com/tommyj99/my-crypto-dashboard.git";
