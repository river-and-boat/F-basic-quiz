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
  educationsInfo.forEach((educationInfo) => {
    // <li class="educations">
    //   <span class="year">1985</span>
    //   <div class="describeContent">
    //     <h4 class="title">This is education 1 title</h4>
    //     <p class="content">This is education 1 content</p>
    //   </div>
    // </li>
    $(".education-experience").append(
      `<li class='educations'>` +
        `<span class='year'>${educationInfo.year}</span>` +
        `<div class='describeContent'>` +
        `<h4 class='title'>${educationInfo.title}</h4>` +
        `<p class='content'>${educationInfo.description}</p>` +
        `</div></li>`
    );
  });
};

export { renderUserInfo, renderEducationInfo };
