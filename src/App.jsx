import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./Component/InputField";
function App() {
  // Define the initial state for the form fields using useState
  const [formVal, setFormVal] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    birthday: "",
    number: "",
  });
  

  /**
   * Define an array of input field configurations
   */

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter the password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Enter the password",
      pattern: formVal.password,
      errorMessage: "Passwords don't match!",
      required: true,
    },

    {
      id: 4,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter the email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
  ];


  //handel submit
  const handelSubmit = (e) => {
    e.preventDeafult(); // Prevent the default form submission behavior
  };

  // Handle input field changes and update the formVal state
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handelSubmit}>
          <h1>Register</h1>
          <hr />
          {inputs.map((input) => {
            return (
              <InputField
                key={input.id}
                {...input}
                onChange={onChange}
                value={formVal[input.name]}
              />
            );
          })}
          <button className="submit__btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
