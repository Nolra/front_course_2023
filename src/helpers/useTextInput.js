import { useState } from "react"

const useTextInput = (initialValue) => { // про контроль над инпутом
  const [value, setValue] = useState(initialValue); // 1 часть логики
  const handleChange = (event) => setValue(event.tartet.value); // 2 часть логики

  return { // inputProps {...inputProps}
    value,
    onChange: handleChange
  }

}

export { useTextInput }