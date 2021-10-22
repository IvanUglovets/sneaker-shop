import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import {
  sortByAlpha,
  sortByDefault,
  sortByPriceAscending,
  sortByPriceWaning,
} from "../redux/reducers/fetchProductsReducer";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const [sort, setSortBy] = useState<string>("");

  const handleChange = (event: any) => {
    setSortBy(event.target.value);
    switch (event.target.value) {
      case "None":
        dispatch(sortByDefault());
        break;
      case "SortByPriceAscending":
        dispatch(sortByPriceAscending());
        break;
      case "SortByPriceWaning":
        dispatch(sortByPriceWaning());
        break;
      case "SortByAlpha":
        dispatch(sortByAlpha());
        break;
    }
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировка по:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Сортировка по:"
          onChange={handleChange}
        >
          <MenuItem value="None">-</MenuItem>
          <MenuItem value="SortByPriceWaning">
            Сортировка по убыванию цены
          </MenuItem>
          <MenuItem value="SortByPriceAscending">
            Сортировка по возрастанию цены
          </MenuItem>
          <MenuItem value="SortByAlpha">Cортировка по алфавиту</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
