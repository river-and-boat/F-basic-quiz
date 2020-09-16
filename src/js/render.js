import $ from "jquery";
import { getUserInfo } from "./userInfo";
import { getEducationInfo } from "./educationInfo";

const renderUserInfo = async (userId) => {
  const userInfo = await getUserInfo(userId);
  $(".avatar").attr("src", userInfo.avatar);
  $(".username").html(userInfo.name);
  $(".age").html(userInfo.age);
  $(".about-me-body").html(userInfo.description);
};

const renderEducationInfo = async (userId) => {
  const educationsInfo = await getEducationInfo(userId);
  // TODO feedback: 不建议用这种方式判空
  if (JSON.stringify(educationsInfo) === "{}") {
    return;
  }
  educationsInfo.forEach((educationInfo) => {
    $(".education-experience").append(
      `<li class='educations'>` +
        `<span class='year'>${educationInfo.year}</span>` +
        // TODO feedback: class命名规范不建议用驼峰，使用-
        `<div class='describeContent'>` +
        `<h4 class='title'>${educationInfo.title}</h4>` +
        `<p class='content'>${educationInfo.description}</p>` +
        `</div></li>`
    );
  });
};

export { renderUserInfo, renderEducationInfo };
