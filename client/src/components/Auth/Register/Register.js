import React, { Component } from "react";
import axios from "axios";
import "./Register.css";
import ButtonSubmit from "../../Layout/ButtonSubmit/ButtonSubmit";
import Input from "../../Layout/Input/Input";
import classnames from "classnames";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      Password: "",
      Password2: "",
      Phone: "",
      Birthday: "",
      Adress: "",
      Position: "",
      SalaryChange: "",
      errors: {},
    };

    this.DataInput = [
      {
        type: "text",
        placeholder: "Имя",
        name: "FirstName",
      },
      {
        type: "text",
        placeholder: "Фамилия",
        name: "LastName",
      },
      {
        type: "text",
        placeholder: "Телефон",
        name: "Phone",
      },

      {
        type: "password",
        placeholder: "Пароль",
        name: "Password",
      },
      {
        type: "password",
        placeholder: "Повторить пароль",
        name: "Password2",
      },
      {
        type: "text",
        placeholder: "День рождения",
        name: "Birthday",
      },
      {
        type: "text",
        placeholder: "Домашний адрес (Город, улица, дом, квартира)",
        name: "Adress",
      },
      {
        type: "text",
        placeholder: "Должность сотрудника",
        name: "Position",
      },
      {
        type: "text",
        placeholder: "Оклад сотрудника за одну смену",
        name: "SalaryChange",
      },
    ];

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let SendData = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Phone: this.state.Phone,
      Password: this.state.Password,
      Password2: this.state.Password2,
      Birthday: this.state.Birthday,
      Adress: this.state.Adress,
      StartDate: new Date(),
      Position: this.state.Position,
      SalaryChange: this.state.SalaryChange,
    };

    axios
      .post("/employee/register", SendData)
      .then(res =>
        this.setState({
          FirstName: "",
          LastName: "",
          Password: "",
          Password2: "",
          Phone: "",
          Birthday: "",
          Adress: "",
          Position: "",
          SalaryChange: "",
          errors: {},
        })
      )
      .catch(err => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="title">
          <div className="title-first">Регистрация</div>
          <div className="title-two">добавить сотрудника в базу данных</div>
        </div>

        <form>
          {this.DataInput.map((item, index) => {
            return (
              <Input
                key={`key${index}`}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={this.state[item.name]}
                onChange={this.onChange}
                className={classnames({
                  "is-invalid": errors[item.name],
                })}
                invalidFeedback={classnames({
                  "invalid-feedback": errors[item.name],
                })}
                errors={errors}
              />
            );
          })}

          <ButtonSubmit onSubmit={this.onSubmit}>Отправить</ButtonSubmit>
        </form>
      </div>
    );
  }
}

export default Register;
