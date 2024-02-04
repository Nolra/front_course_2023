import Link from "next/link";
import { getAllFilms } from "../actions/getAllFilms";
import List from '@/app/components/List'
import ListItem from "../components/ListItem";

export default async function FilmsPage() {
  const allFilms = await getAllFilms();

  const list = [
    {id: '1', title: 'Первый'}, 
    {id: '2', title: 'Второй'},
    {id: '3', title: 'Третий'}
  ]

  return (
    <main>
      <h1>LIST</h1>
      <List>
        {
          list.map(listItem => <ListItem item={listItem} key={listItem.id} />)
        }
      </List>
      <hr />
      <br/><br/>



      <h1>All films</h1>
      <ul>List of films
        {
          allFilms.results.map(film => (
            <li key={film.url}>
              <Link href={`/films/${film.title.replace(/\s+/g, '-')}`}>
                {film.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
