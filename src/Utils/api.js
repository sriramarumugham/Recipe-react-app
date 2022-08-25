import API from "./index";
const { APP_ID, APP_KEY, ROOT_URL } = API;

const customFetch = async (input) => {
  const url = `${ROOT_URL}/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // console.log("url", url);
  try {
    const request = await fetch(url);
    const response = await request.json();
    if (response) {
      const { hits } = response;
      // console.log(hits);
      return {
        success: true,
        data: hits
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export default customFetch;
