import React from "react";
import Header from "../header/header";
import WindowRegistration from "../windowRegistration/windowRegistration";
import AdditInfo from "../additInfo/additInfo";
import "./error404Page.css";

class Error404Page extends React.Component{
  render() {
    return (
<div className="error-main">
<Header />
<div className="head-title">Упс....</div>
<div className="lettering-404">404</div>
<div className="head-title text">Страница не найдена!<div>Разработчик Эдуард уже обнаружил данную проблему и приступил к ее устранению</div></div>
<button type="submit" className="return-button" onClick={() => {document.location.href = "/"}}>На главную</button>
</div>
    );
  }
}

export default Error404Page;
