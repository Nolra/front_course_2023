interface Props {
  params: {
    slug: string[]
  }
}


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) => res.json())
 
  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, '-'),
  }))
}


export default function FilmPage({ params }: Props) {
  // post/24/lol/kek - id: [ '24', 'lol', 'kek' ]
  return (
    <main>
      <h1>Film page with id { params.slug }</h1>
    </main>
  );
}
