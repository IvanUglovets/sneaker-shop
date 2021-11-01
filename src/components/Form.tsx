import React, { FC, useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

interface IPropsForm {
  handleClose: () => void;
}

const Form: FC<IPropsForm> = ({ handleClose }) => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [lastNameDirty, setLastNameDirty] = useState<boolean>(false);
  const [adressDirty, setAdressDirty] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [adressError, setAdressError] = useState<string>("");
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (nameError || adressError || lastNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, adressError, lastNameError]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError('Поле "Имя" должно быть обязательно заполнено');
    } else {
      setNameError("");
    }
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setLastNameError('Поле "Фамилия" должно быть обязательно заполнено');
    } else {
      setLastNameError("");
    }
  };

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
    if (!e.target.value) {
      setAdressError('Поле "Адресс" должно быть обязательно заполнено');
    } else {
      setAdressError("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "adress":
        setAdressDirty(true);
        break;
    }
  };

  return (
    <form action="#">
      {nameDirty && nameError && <p>{nameError}</p>}
      <TextField
        name="name"
        id="name"
        label="Ваше имя:"
        variant="standard"
        value={name}
        onChange={handleName}
        onBlur={(e) => blurHandler(e)}
        sx={{ display: "block", mb: "1rem" }}
      />
      {lastNameDirty && lastNameError && <p>{lastNameError}</p>}
      <TextField
        name="lastName"
        id="lastname"
        label="Ваша Фамилия:"
        variant="standard"
        value={lastName}
        onChange={handleLastName}
        onBlur={(e) => blurHandler(e)}
        sx={{ display: "block", mb: "1rem" }}
      />
      {adressDirty && adressError && <p>{adressError}</p>}
      <TextField
        name="adress"
        id="adress"
        label="Адрес:"
        variant="standard"
        value={adress}
        onChange={handleAdress}
        onBlur={(e) => blurHandler(e)}
        sx={{ display: "block", mb: "1rem" }}
      />
      <Button onClick={handleClose}>Закрыть</Button>
      <Button type="submit" disabled={!formValid}>
        Оформить заказ
      </Button>
    </form>
  );
};

export default Form;
