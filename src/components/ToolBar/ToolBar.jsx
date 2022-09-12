import {
  Box,
  Fab,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CustumDatePicker } from 'components/CustumDatePicker/CustumDatePicker';

export const ToolBar = ({ openForm, prevMonth, nextMonth, today }) => {
  return (
    <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <Tooltip placement="bottom-end" title="Add new idea">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => openForm('Create')}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={prevMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography
          sx={{ width: '120px', fontSize: 'medium', textAlign: 'center' }}
        >
          {today.format('MMMM y')}
        </Typography>
        <IconButton onClick={nextMonth}>
          <ChevronRightIcon />
        </IconButton>
        <CustumDatePicker />
      </Box>
    </Toolbar>
  );
};
