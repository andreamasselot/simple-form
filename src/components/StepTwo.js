

const StepTwo = (props) => {
return (
 <>
<div className="title-step-two">

    <h1>Results</h1> </div>
    <div className="results-container">
    <div className="informations">
      <p>Name : {props.name} </p>
      <p>Email : {props.email}</p>
      <p>Password : {props.password} </p>
    </div>
    </div>
    
      <button className="edit" onClick={()=>{
        props.setForm(false)        
      }}>Edit your information</button>
  
  </>)

};

export default StepTwo;