import React from "react"; // 1 импортируем реакт

const Welcome = ({ 
  username,
  age,
  isAdmin
}) => { // 2 создаем функцию (она же компонент)



  return ( // 3 возвращаем JSX
    <>
      <h1>
        Привет, { username }, тебе { age } лет.
        {
          isAdmin 
            ? " Ух ты! Ты админ!"
            : " Отстой, ты простой юзер"
        }
      </h1>
    </>
  )
}

export default Welcome; // 4 экспортируем по дефолту компонент