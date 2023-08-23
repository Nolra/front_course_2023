const LangSelector = ({lang, setLang}) => {
  return (
    <div>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value={'eng'}>eng</option>
        <option value={'rus'}>rus</option>
      </select>
    </div>
  )
}

export default LangSelector;