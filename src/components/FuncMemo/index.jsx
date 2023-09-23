import React, { useCallback, useMemo } from "react";
import Form from "./Form";

const post = () => {}; // отправляем пост запрос

function FuncMemo({ productId, referrer }) {

  // 1 аргумент - callback который вернет значение

  // const handleSubmit = useMemo(() => {
  //   return (orderDetails) => {
  //     post('/product/' + productId + '/buy', {
  //       referrer,
  //       orderDetails
  //     })
  //   }
  // }, [productId, referrer]) 
  
  const handleSubmit = useCallback(
    (orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails
      })
    }, [productId, referrer]
  )
  
  
    // useMemo - для мемоизации всего (если перф > 1ms)
    
    // memo - функция из реакта которой можно обернуть компонент
    // чтобы избежать его перерендеринга, если его личные пропсы не изменились
    // то есть когда его родитель перерендерится, он не изменится
    // и соотвественно если он тяжел в отрисовке в перформансе то
    // мы не будем его рендерить когда не надо




  return (
      <>
        <Form handleSubmit={handleSubmit} />
      </>
  );
}


export default FuncMemo;


