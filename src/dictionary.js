

function Dictionary (language){
let  english = {
  authorization:"Authorization",
  login:"Login",
  password:"Password",
  createAccount:"Create account",
  errorLogin:"Incorrect username or password",
  logIn:"Log in",
  timeInFormatUTC:"TIME IN FORMAT UTC:",
  confimPassword:"Confim",
  registration:"Registration",
  errorRegistrstion:"Passwords do not match",
};
let  russian = {
  authorization:"Авторизация",
  login:"Логин",
  password:"Пароль",
  createAccount:"Создать аккаунт",
  errorLogin:"Неправильное имя пользователя или пароль",
  logIn:"Войти",
  timeInFormatUTC:"ВРЕМЯ В ФОРМАТЕ UTC:",
  confimPassword:"Подтвердите",
  registration:"Регистрация",
  errorRegistrstion:"Пароли не совпадают",
};

switch (language) {
  case "ru":
    return russian;
    break;
  case "en":
    return english;
    break;
  default:
    return english;
}
}
export default Dictionary;
