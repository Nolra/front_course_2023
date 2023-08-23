import { useContext } from "react";
import { LangContext } from "./LangContext"
import content from "./content";

const Card = ({autor}) => {
  const lang = useContext(LangContext);

  return (
    <div>
      <h1>{autor}</h1>
      <h2>{content[lang].head}</h2>
      <p>{content[lang].text}</p>
    </div>
  )
}

export default Card;