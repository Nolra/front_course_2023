import React from "react"; // импортируем всегда для работы JSX
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";


// import { getMax, getSquare, getSum } from "./helpers/math"; // использование import / export

function App() {

  // const user = { 
  //   firstName: "Гена",
  //   lastName: "Дрозд"
  // }
  // const user = null;

  // const getFullName = (userNameObj) => {
  //   return `${userNameObj.firstName} ${userNameObj.lastName}`
  // }


  // const elementJSX = ( // создание элемента c JSX синтаксисом
  //   <h1 className="greeting">
  //     Hello, world!
  //   </h1>
  // )

  // const elementJSX = React.createElement( // создание элемента под капотом
  //   'h1',
  //   { className: 'greeting' },
  //   'Hello, world!'
  // );

  // запросили данные о комментарии пользователя
  // и подготовили их вот в таком удобном для
  // вашего приложения виде
  const comment = {
    userInfo: {
      userAvatar: "../images/logo192.png",
      userAltAvatar: "User Avatar",
      username: "Гена",
      nick: "Дрозд",
    },
    text: "Это самая лучшая книга о дроздах!",
    date: "12.02.2002"
  }


  return (
    <>
      <Welcome isAdmin={true} age="20" username="Гена Дрозд" />
      <Welcome isAdmin={false} age="30" username="Инга Гинга" />
      <Welcome isAdmin={false} age="40" username="Света Ракета" />

      <a className="usernameClassForCSS" href="/link-to-homepage"> link </a>


      <Comment {...comment} />

      {/* <Comment 
        userAvatar="../images/logo192.png"
        userAltAvatar="User Avatar"
        username="Гена"
        nick="Дрозд"
        text="Это самая лучшая книга о дроздах!"
        date="12.02.2002"
      /> */}


      {/* {elementJSX} */}
      {/* {
        user 
          ? <h2>А ты { getFullName(user) }</h2> 
          : <h2>А ты незнакомец</h2> 
      } */}

    </>
  );


}

export default App;


