import { useState } from "react";
import Card from "./Card";
import LangSelector from "./LangSelector";
import { LangContext } from "./LangContext";

const autorsData = [
  { id: 0, autor: 'Nick' },
  { id: 1, autor: 'Gena' },
  { id: 2, autor: 'Vena' }
];

const Main = () => {
  const [lang, setLang] = useState('eng');
  return (
    <main>
      <LangContext.Provider value={lang}>
        {
          autorsData.map(autorData => (
            <Card key={autorData.id} autor={autorData.autor} />
          ))
        }
      </LangContext.Provider>
      <LangSelector lang={lang} setLang={setLang} />
    </main>
  )
}

export default Main;