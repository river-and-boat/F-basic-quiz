const url = "http://localhost:8080/users/";
const getUserInfo = async (userId) => {
  let result = {};
  try {
    const response = await fetch(url + userId);
    if (response.status === 200) {
      result = await response.json();
    }
  } catch (e) {
    console.log(e);
  }
  return result;
};
export { getUserInfo };
