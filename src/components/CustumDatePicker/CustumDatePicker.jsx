import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  IconButton,
  Popover,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import moment from 'moment/moment';

export const CustumDatePicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().year());

  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };

  const handleChangeYear = e => {
    setYear(e.target.value);
  };

  const arrY = [2022, 2023, 2024];

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <CalendarMonthIcon />
      </IconButton>
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
        <Box sx={{ padding: '5px' }}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Month
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={month}
              onChange={handleChangeMonth}
              autoWidth
              label="Month"
            >
              {moment.months().map((month, i) => {
                return (
                  <MenuItem key={i} value={i}>
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Year
            </InputLabel>
            <Select
              sx={{ maxHeight: 200 }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={year}
              onChange={handleChangeYear}
              autoWidth
              label="Year"
            >
              {arrY.map((year, i) => {
                return (
                  <MenuItem key={i} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Popover>
    </div>
  );
};
