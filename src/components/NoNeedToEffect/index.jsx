import { useEffect, useMemo, useState } from "react";
// 1 НЕ ИСПОЛЬЗУЕМ ДЛЯ ВЫЧИСЛЕНИЯ ДЛЯ РЕНДЕРИНГА
// const NoNeedToEffect = () => {
//   // form
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   // const [fullName, setFullName] = useState(''); НЕ ПРАВИЛЬНО

//   const fullName = firstName + ' ' + lastName; // ПРАВИЛЬНО

//   // useEffect( НЕ ПРАВИЛЬНО
//   //   () => {
//   //     setFullName(firstName + ' ' + lastName)
//   //   },
//   //   [firstName, lastName]
//   // )

//   return <>
//     <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
//     <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
//     <h1>{fullName}</h1>
//   </>
// }


// НЕ ИСПОЛЬЗУЕМ ДЛЯ КЭШИРОВАНИЯ
// const NoNeedToEffect = ({todos, filter}) => { // TodoList
//   const [newTodo, setNewTodo] = useState({});
//   // const [visibleTodos, setVisibleTodos] = useState([]); // НЕ НУЖНО

//   // const visibleTodos = getFilteredTodos(todos, filter); // если не тяжелые
//   const visibleTodos = useMemo( // для кэширования дорогих вычислений
//     () => {
//       return getFilteredTodos(todos, filter);
//     }, [todos, filter]
//   )

//   // useEffect( // НЕ НУЖНО
//   //   () => {
//   //     // setVisibleTodos - функция для фильтрации вернет массив
//   //     setVisibleTodos(getFilteredTodos(todos, filter));
//   //   },
//   //   [todos, filter]
//   // )

//   return <>
//     {/* 
//       Есть возможность создать новый туду - newTodo
//       и мы отображаем отфильтрованный список тудушек - visibleTodos
//     */}
//   </>
// }




// НЕ ИСПОЛЬЗУЕМ ДЛЯ СБРОСА СОСТОЯНИЯ
// // ранее... <ProfilePage key={userId} />
// const ProfilePage = () => { // TodoList
//   // страница профиля
//   const [comment, setComment] = useState('');

//   // useEffect( // НЕ НУЖНО
//   //   () => {
//   //     setComment('');
//   //   }, [userId]
//   // )

//   return <>
//     <Comment 
//       comment={comment} 
//       setComment={setComment}
//     />
//   </>
// }



// // НЕ ИСПОЛЬЗУЕМ ДЛЯ СБРОСА ЧАСТИЧНОГО СОСТОЯНИЯ
// const List = ({items}) => {
//   const [isReverse, setIsReverse] = useState(false); // запомнить
//   const [selectedId, setSelectedId] = useState(null);
//   const selection = items.find((item) => item.id === selectedId) || null;

//   // const [selection, setSelection] = useState(null); // сбросить если items изменились
//   // const [prevItems, setPrevItems] = useState(items);

//   // во время рендера - уже лучше но не супер
//   // if (items !== prevItems) {
//   //   setPrevItems(items);
//   //   setSelection(null);
//   // }

//   // useEffect(() => { НЕ НУЖНО
//   //   setSelection(null);
//   // }, [items])

//   return <>
//     {/* 
//       Есть возможность создать новый туду - newTodo
//       и мы отображаем отфильтрованный список тудушек - visibleTodos
//     */}
//   </>
// }



// // СОВМЕСТНОЕ ИСПОЛЬЗОВАНИЕ ЛОГИКИ МЕЖДУ ОБР СОБЫТИЙ
// // showNotification - показывает модальное окно
// const ProductPage = ({product, addToCart}) => {

//   // useEffect( НЕ НУЖЕН
//   //   () => {
//   //     if (product.isInCart) {
//   //       showNotification(`Added ${product.name} to shopping cart!`)
//   //     }
//   //   }, [product]
//   // )

//   function buyProduct() {
//     addToCart(product);
//     showNotification(`Added ${product.name} to shopping cart!`)
//   }

//   function handleBuyClick() {
//     buyProduct()
//   }

//   function handleCheckoutClick(){
//     buyProduct()
//     navigateTo('/checkout')
//   }

//   return <>
//     {/* 
//       кнопка купить - handleBuyClick
//       кнопка оформить заказ - handleCheckoutClick
//     */}
//   </>
// }





// // POST
// const Form = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   useEffect(() => {
//     post('/analytics/event', {
//       eventName: 'visit_form'
//     })
//   }, []);

//   // const [jsonToSubmit, setJsonToSubmit] = useState(null);
//   // useEffect(() => {
//   //   if (jsonToSubmit !== null) {
//   //     post('/api/register', jsonToSubmit)
//   //   }
//   // }, [jsonToSubmit])

//   function handleSubmit(e) {
//     e.preventDefault();
//     // setJsonToSubmit({firstName, lastName})
//     post('/api/register', {firstName, lastName})
//   }

//   return <>
//     {/* 
//       форма и кнопка submit
//     */}
//   </>
// }







// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// let didInit = false;

// const App = () => {
//   useEffect(() => {
//     if (!didInit) {
//       didInit = true;
//       loadDataFromLocalStorage();
//       checkAuthToken();      
//     }
//   }, [])

//   return <>
//     {/* 

//     */}
//   </>
// }

// if (typeof window !== undefined ) {
//   loadDataFromLocalStorage();
//   checkAuthToken();    
// }

// const App = () => {

//   return <>
//     {/* 

//     */}
//   </>
// }



// УВЕДОМЛЕНИЕ О ИЗМЕНЕНИЯХ РОДИТЕЛЮ
// const Toggle = ({onChange}) => {
//   const [isOn, setIsOn] = useState(false);

//   // useEffect(() => { // НЕ НУЖЕН
//   //   onChange(isOn)
//   // }, [onChange, isOn])

//   function updateToggle(nextIsOn) {
//     setIsOn(nextIsOn);
//     onChange(nextIsOn);
//   }

//   function handleClick() {
//     updateToggle(!isOn);
//   }

//   function enterEvent() {
//     updateToggle(!isOn);
//   }

//   return <>
//     {/* 

//     */}
//   </>
// }




// // ПЕРЕДАЧА ДАННЫХ РОДИТЕЛЮ
// const Parent = () => {
//   const data = useSomeApi();

//   return <Children data={data} />
// }

// const Children = ({data}) => {
//   // const data = useSomeApi();

//   // useEffect(() => {
//   //   if (data) {
//   //     onFetched(data);
//   //   }
//   // }, [onFetched, data])

//   return <>
//     {/* 

//     */}
//   </>
// }





// ПОЛУЧЕНИЕ ДАННЫХ
// fetchResult - функция запроса данных
// const SeachResult = ({query}) => { // 1 - меняется пропс где-то наверху у родителей
//   const [result, setResult] = useState(null);
//   const [page, setPage] = useState(1);

//   useEffect(() => { // 2 запускается эффект
//     let ignore = false; // 3 не игнорируем по дефолту // 7 (пытаемся снова довести до рендера)

//     fetchResult(page, query).then( // 4 начинается асинхронная операция (требует времени)
//       (json) => {
//         if (!ignore) setResult(json) // 6 предыдущий запрос игнорируется
//       } 
//     )

//     return () => { ignore = true } // 5 в этот момент снова меняется query и поэтому эффект перезапускается
//     // соотвественно ignore = true функция отписки делает игнор актуальным
//   }, [page, query])


//   function handleNextPageClick() {
//     setPage(page + 1);
//   }

//   // ...
//   return <>
  
//   </>

// }

// export default ProductPage;