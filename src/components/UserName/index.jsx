import React, { useState } from "react";

const UserName = () => {
  // история про лишнее состояние
  // т.е. если что-то можно вычислить из имеющихся данных
  // то это НЕ состояние
  // это должно вычислятся во время рендеринга
  // как fullName
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <label>
        First Name: 
        <input 
          value={firstName} 
          onChange={e => setFirstName(e.target.value)} 
        />
      </label>

      <br/>

      <label>
        Last Name: 
        <input 
          value={lastName}
          onChange={e => setLastName(e.target.value)} 
        />
      </label>

      <p>{firstName + ' ' + lastName}</p>
    </>
  )
}

export default UserName;





// Группируем состояние!
const Paint = () => {
  // если вы используете постоянно
  // состояния вместо, то подумайте о их группировке
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  return (
    <>
    
    </>
  )
}

// Избегать противоречий в состоянии
const Form = () => {
  // если вы используете постоянно
  // состояния вместо, то подумайте о их группировке
  // const [isEmpty, setIsEmpty] = useState(true);
  // const [isActive, setIsActive] = useState(true);
  // const [isSubmitting, setIsSubmitting] = useState(true);

  const [status, setStatus] = useState('empty');



  return (
    <>
    
    </>
  )
}




// дублирование данных
const initItems = [
  { title: 'пюрешка', id: 0 },
  { title: 'котлетки', id: 1 },
  { title: 'макарошки', id: 2 }
]

const Menu = () => {
  const [menuItems, setMenuItems] = useState(initItems);
  // const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  // как избежать дублирования
  const [selectedItemId, setSelectedItemId] = useState(menuItems[0].id)

  return (
    <>
    
    </>
  )
}









