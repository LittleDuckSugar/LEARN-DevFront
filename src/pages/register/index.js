import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Index = () => {
  const submitRegister = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("send");
  }
  return (
    <div className="page__register">
      <form className="form" onSubmit={(e) => submitRegister(e)}>
        <Input
          label="Prénom"
          name="firstName"
          id="firstName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre prénom"
          handleChange={(e) => console.log(e)}
        />
        <Input
          label="Nom"
          name="lastName"
          id="lastName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e) => console.log(e)}
        />
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre email"
          handleChange={(e) => console.log(e)}
        />
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre mot de passe"
          handleChange={(e) => console.log(e)}
        />
        <Button title="envoyer" classes="btn btn__color-black" type="submit" />
      </form>
    </div>
  );
};

export default Index;
