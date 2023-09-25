import { useTextInput } from "../../helpers/useTextInput";

const Form = () => {
  const firstNameProps = useTextInput('Mary');
  const lastNameProps = useTextInput('Poppins');

  return (
    <>
      <br/><br/>
      <form>
        <label>First Name: 
          <input {...firstNameProps} />
        </label>
        <br/><br/>
        <label>Last Name: 
          <input {...lastNameProps} />
        </label>
        <br/><br/>
        <h2>Hello, {firstNameProps.value} {' '} {lastNameProps.value}!</h2>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Form;