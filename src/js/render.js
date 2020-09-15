import $ from "jquery";
import { getUserInfo } from "./userInfo";

const renderUserInfo = async (userId) => {
  const userInfo = await getUserInfo(userId);
  $(".avatar").attr("src", userInfo.avatar);
  $(".username").html(userInfo.name);
  $(".age").html(userInfo.age);
  $(".about-me-body").html(userInfo.description);
};

export { renderUserInfo };
