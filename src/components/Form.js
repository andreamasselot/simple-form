const Form = (props) => {
  return (

    <div className="formulaire">
      <h1>Create account</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <label for="name">Name</label>
        <input type="text" placeholder="Jean Dupont" name="Name" />
        <label for="email">Email</label>
        <input type="email" placeholder="jeandupont@lereacteur.io" name="email" />
        <label for="">Password</label>
        <input type="password" placeholder="lErEaCtEuR2020" name="password" />
        <label for="">Confirm your password</label>
        <input type="password-confirm" placeholder="lErEaCtEuR2020" name="password-confirm" />
        <button type="submit"> Register</button>
      </form>
    </div>
  )
};

export default Form;