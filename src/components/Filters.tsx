import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import {KeyboardArrowDown} from "@mui/icons-material";
import CheckBoxCustom from "./CheckBoxCustom";
import '../index.scss'

export default function Filters() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id}  onClick={handleClick}>
                Фильтры: <KeyboardArrowDown />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ul className='filters__list'>
                    <li className='filters__list-item'>
                        <CheckBoxCustom  name='adidas'/>
                    </li>
                    <li className='filters__list-item'>
                        <CheckBoxCustom  name='asics'/>
                    </li>
                    <li className='filters__list-item'>
                        <CheckBoxCustom  name='Reebook'/>
                    </li>
                </ul>
            </Popover>
        </div>
    );
}