'use client';
import { useState } from "react";


const List = ({children}) => {
  const [listState, setListState] = useState(false);


  return (
    <ul onClick={() => setListState(state => !state)}>
      {
        listState ? 'Клево' : 'Не клево'
      }

      {
        children
      }
    </ul>
  )
}

export default List;