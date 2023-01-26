import './App.css';
import {useState} from "react";


function App({propName, propAge, propEmail}) {
    const [name, setName] = useState(propName);
    const [age, setAge] = useState(propAge);
    const [email, setEmail] = useState(propEmail);
    const [nameIsValid, setNameIsValid] = useState(validateName(name));
    const [ageIsValid, setAgeIsValid] = useState(validateAge(age));
    const [emailIsValid, setEmailIsValid] = useState(validateEmail(propEmail));

    function validateName(name) {
        return name.length > 2;
    }

    function validateEmail(email) {
        const regExp = /.+@.+\..+/i
        if (email.match(regExp)) {
            return true
        }
    }

    function validateAge(age) {
        return +age >= 10
    }

    const onNameChange = (e) => {
        let val = e.target.value;
        let valid = validateName(val);
        setName(val);
        setNameIsValid(valid);
    }

    const onAgeChange = (e) => {
        let val = e.target.value;
        let valid = validateAge(val);
        setAge(val);
        setAgeIsValid(valid);
    }

    const onEmailChange = (e) => {
        let val = e.target.value;
        let valid = validateEmail(val);
        setEmail(val);
        setEmailIsValid(valid);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameIsValid === true && ageIsValid === true && emailIsValid === true) {
            alert(`Имя:  ${name} Возраст: ${age} Почта: ${email}`);
        }
    }

    let nameColor = nameIsValid === true ? "green" : "red";
    let emailColor = emailIsValid === true ? "green" : "red";
    let ageColor = ageIsValid === true ? "green" : "red";


    return (
      <>
          <form action="" onSubmit={handleSubmit}>
              <p>
                  <label>Имя:</label><br/>
                  <input type="text" value={name}
                     onChange={onNameChange}
                     style={{ borderColor: nameColor }}
                  />
              </p>
              <p>
                  <label>Email:</label><br/>
                  <input type="text" value={email}
                     onChange={onEmailChange}
                     style={{ borderColor: emailColor }}
                  />
              </p>
              <p>
                  <label>Возраст:</label><br/>
                  <input type="text" value={age}
                     onChange={onAgeChange}
                     style={{ borderColor: ageColor }}
                  />
              </p>
              <button type="submit">Отправить</button>
          </form>
      </>
    );
}

export default App;
