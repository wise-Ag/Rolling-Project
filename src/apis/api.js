const BASE_URL = "https://rolling-api.vercel.app";

const requestAPI = async (url, option) => {
  const response = await fetch(`${BASE_URL}${url}`, option);
  const result = await response.json();
  return { response, result };
};

export default requestAPI;
