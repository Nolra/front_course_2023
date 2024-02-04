import { getAllFilms } from "../actions/getAllFilms";

const ListItem = async ({item}) => {
  const allFilms = await getAllFilms();
  console.log("Если в терминале то я серверный")
  return (
    <li>
      {item.title}
    </li>
  )
}

export default ListItem;