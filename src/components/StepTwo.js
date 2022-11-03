const StepTwo = (props) => {
return (
  <div className="results-container">
    <h1>Results</h1>
    <div className="informations">
      <p>Name : {props.name} </p>
      <p>Email : {props.email}</p>
      <p>Password : {props.password} </p>
    </div>
      <button>Edit your information</button>
  </div>)

};

export default StepTwo;