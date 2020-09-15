import "./style/index.scss";
import { renderEducationInfo, renderUserInfo } from "./js/render";

// eslint-disable-next-line no-restricted-globals
const str = location.href;
if (str === "http://localhost:1234/") {
  window.location.replace("http://localhost:1234/users/1");
}
const arr = str.split("/");
const userId = arr[arr.length - 1];

renderUserInfo(userId);
renderEducationInfo(userId);
