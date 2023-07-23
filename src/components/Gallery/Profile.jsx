import React from "react";
// до начала компонента у нас импорты всего что требуется

const Profile = ({ person }) => {
  // наверху у нас логика (подготовка рендера)
  // запрос данных, парсинг данных, вычисления и т.д

  // Здесь внизу у нас находится рендер
  return (
    <>
      <h1>{person.name}</h1>
      <img alt={person.name} src={person.imgSrc} />
      {
        person.isGreatHuman && <p>Это велий чел</p>
      }
    </>
  )
}

export default Profile;