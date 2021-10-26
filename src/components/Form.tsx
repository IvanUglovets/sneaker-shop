import React, { FC, useState } from "react";
import { TextField, Button } from "@mui/material";

interface IPropsForm {
  handleClose: () => void;
}

const Form: FC<IPropsForm> = ({ handleClose }) => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");

  const submitForm = (e: any) => {
    e.preventDefault();
    handleClose();
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  return (
    <form action="#">
      <TextField
        id="name"
        label="Ваше имя:"
        variant="standard"
        value={name}
        onChange={handleName}
        sx={{ display: "block", mb: "1rem" }}
      />
      <TextField
        id="lastname"
        label="Ваша Фамилия:"
        variant="standard"
        value={lastName}
        onChange={handleLastName}
        sx={{ display: "block", mb: "1rem" }}
      />
      <TextField
        id="adress"
        label="Адрес:"
        variant="standard"
        value={adress}
        onChange={handleAdress}
        sx={{ display: "block", mb: "1rem" }}
      />
      <Button onClick={handleClose}>Закрыть</Button>
      <Button type="submit" onClick={submitForm}>
        Оформить заказ
      </Button>
    </form>
  );
};

export default Form;
