export default function Home() {
  return (
    <main>
      <h1>HOME</h1>
    </main>
  );
}

// (cache или соотвественные ему экспортируемые именнованные переменные )

// Статика это - когда в запросе который фетчит данные для страницы
// cache: "force-cache", // SSG - getStaticProps
// next: { revalidate: 60 } // ISR - getStaticProps with revalidate

// Динамика это (SSR)
// cache: "no-store", // SSR - getServerSideProps запрос не кэшируется

// Также динамику определит
// cookies(), headers(), searchParams(), хук useSearchParams()
// в клиентких компонентах




// Серверные компоненты не интерактивны
// То есть в них нет хуков, нет локальный состояний