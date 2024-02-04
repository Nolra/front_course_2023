import { FilmsResponce } from "@/types";

const getAllFilms = async(): Promise<FilmsResponce> => {
  const result = await fetch('https://swapi.dev/api/films', {
    // cache: "force-cache", // SSG - getStaticProps
    // cache: "no-store", // SSR - getServerSideProps запрос не кэшируется
    // next: { revalidate: 60 } // ISR - getStaticProps with revalidate
  })
  return result.json()
};

export { getAllFilms };