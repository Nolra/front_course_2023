import React, { useState } from "react";
// 2. Определить что вызывает изменение состояние.
// 2.1 empty => active когда пользователь заполняет поле
// в зависимости от того пустое оно или нет active меняется с empty
// 2.2 клик по submit пользователя (submitting)
// 2.3 ответ от сервера вызывает смену на success или error


const FormSubmit = () => {
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('empty');

  const changeName = (value) => {
    if (value) setStatus('active');
    else setStatus('empty');
    setUserName(value);
  } 

  const submit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(
      () => setStatus('success'),
      3000
    )
  }

  if (status === 'success') {
    return <p>Right! Thank you!</p>
  }
  return (
    <form>
      <label>
        Name: <input 
                value={userName}
                onChange={(e) => changeName(e.target.value)}
                disabled={status === 'submitting'} 
              />
      </label>
      <br/><br/>
      <button 
        type="submit"
        onClick={(e) => submit(e)}
        disabled={status === 'submitting' || status === 'empty'}
      >submit</button>
      { status === 'submitting' && <p>Loading...</p> }
      { status === 'error' && <p>Error! Try again!</p> }
    </form>
  )
}

export default FormSubmit;