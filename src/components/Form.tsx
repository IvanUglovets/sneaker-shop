import React, {FC, useState, useEffect, useMemo} from "react";
import './../index.scss'
import {TextField, Button, Alert, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import {totalSum} from "../models/totalSum";
import ModalList from "./ModalList";
import {enumModalInputNames} from "../types/enumModalInputNames";

interface IPropsForm {
    handleClose: () => void;
}

const Form: FC<IPropsForm> = ({handleClose}) => {
    const itemsBasket = useSelector((state: RootState) => state.basketItems.basketSneakers)
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [lastNameDirty, setLastNameDirty] = useState<boolean>(false);
    const [addressDirty, setAddressDirty] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");
    const [formValid, setFormValid] = useState<boolean>(false);



    const price = useMemo(() => totalSum(itemsBasket),[itemsBasket])

    useEffect(() => {
        if (nameError || addressError || lastNameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, addressError, lastNameError]);

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

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        if (!e.target.value) {
            setAddressError('Поле "Адресс" должно быть обязательно заполнено');
        } else {
            setAddressError("");
        }
    };

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case enumModalInputNames.NAME:
                setNameDirty(true);
                break;
            case enumModalInputNames.LAST_NAME:
                setLastNameDirty(true);
                break;
            case enumModalInputNames.ADDRESS:
                setAddressDirty(true);
                break;
        }
    };


    return (
        <form action="#">
            {nameDirty && nameError && <Alert severity="error">{nameError}</Alert>}
            <TextField
                name="name"
                id="name"
                label="Ваше имя:"
                variant="standard"
                value={name}
                onChange={handleName}
                onBlur={(e) => blurHandler(e)}
                sx={{display: "block", mb: "1rem"}}
            />
            {lastNameDirty && lastNameError && <Alert severity="error">{lastNameError}</Alert>}
            <TextField
                name="lastName"
                id="lastname"
                label="Ваша Фамилия:"
                variant="standard"
                value={lastName}
                onChange={handleLastName}
                onBlur={(e) => blurHandler(e)}
                sx={{display: "block", mb: "1rem"}}
            />
            {addressDirty && addressError && <Alert severity="error">{addressError}</Alert>}
            <TextField
                name="address"
                id="address"
                label="Адрес:"
                variant="standard"
                value={address}
                onChange={handleAddress}
                onBlur={(e) => blurHandler(e)}
                sx={{display: "block", mb: "1rem"}}
            />
            <div className='wrapper__list-modal'>
                <Typography variant='h5' component='h5' color='blue' sx={{mb: '0.5rem'}}>Товары:</Typography>
                <ModalList />
                <Typography variant='h6' component='span'>Всего: </Typography>
                <Typography variant='h6' component='span' color='red'>{price} р.</Typography>
            </div>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button type="submit" disabled={!formValid}>
                Оформить заказ
            </Button>
        </form>

    );
};

export default Form;