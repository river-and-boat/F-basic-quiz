import "./style/index.scss";
import { renderEducationInfo, renderUserInfo } from "./js/render";

// eslint-disable-next-line no-restricted-globals
const str = location.href;
// TODO feedback: 如果不在本地的话，代码将出错
if (str === "http://localhost:1234/") {
  window.location.replace("http://localhost:1234/users/1");
}
const arr = str.split("/");
// TODO feedback: 逻辑有漏洞，如果URL是/any/1，也是可以通过的
const userId = arr[arr.length - 1];

renderUserInfo(userId);
renderEducationInfo(userId);
