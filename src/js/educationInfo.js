const urlEducationBase = "http://localhost:8080/users/";
const urlEducationSuffix = "/educations";
const getEducationInfo = async (userId) => {
  let result = {};
  try {
    // TODO feedback: 使用ES6语法
    const response = await fetch(
      urlEducationBase + userId + urlEducationSuffix
    );
    if (response.status === 200) {
      result = await response.json();
    }
  } catch (e) {
    console.log(e);
  }
  return result;
};
export { getEducationInfo };
