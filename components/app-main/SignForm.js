import React, { useState, useEffect } from "react";

export function SignForm() {

  var initialState = {
  
  login: "",
  password: "",
  errors: [],
  hasLoaded: false
};

  var [state, setState] = useState(initialState);

  const handleFormChange = (e) => {
    
  }
  return (
    <>
   <>
      <fieldset>
        <label>Login</label>
        <br />
        <input value={state.login} name="login" placeholder="charly@free.fr" onChange={handleFormChange} />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <br />
        <input value={state.password} onChange={handleFormChange} name="password" placeholder="*********" />
      </fieldset>
      <button>Submit</button>
    </>
   


   </>
  );
}