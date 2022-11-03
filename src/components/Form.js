const Form = (props) => {
  return (

    <div className="formulaire">
      <h1>Create account</h1>

      <form onSubmit={props.handleSubmit} >
        <label for="name">Name</label>
        <input type="text" placeholder="Jean Dupont" name="Name" value={props.name} onChange={(event) => {
          props.setName(event.target.value);
        }} />
        <label for="email">Email</label>
        <input type="email" placeholder="jeandupont@lereacteur.io" name="email" value={props.email} onChange={(event) => {
          props.setEmail(event.target.value);
        }} />
        <label for="">Password</label>
        <input type="password" placeholder="lErEaCtEuR2020" name="password" onChange={(event) => {
          props.setPassword(event.target.value);
        }} />
        <label for="">Confirm your password</label>
        <input type="password" placeholder="lErEaCtEuR2020" name="password-confirm" onChange={(event) => {
          props.setSamePassword(event.target.value);
        }} />

        <button className="edit" type="submit"> Register</button>

      </form>
      {props.errorMessage && <p style={{color: "red"}}>{props.errorMessage}</p>}
    </div>
  )
};

export default Form;