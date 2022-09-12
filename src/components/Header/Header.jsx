import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { orange } from '@mui/material/colors';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: orange[500], marginRight: 1 }}
          >
            <CalendarMonthIcon />
          </Avatar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          <Tooltip title="dab82">
            <Avatar
              alt="DAB82"
              src="https://avatars.githubusercontent.com/u/84742723?v=4"
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
