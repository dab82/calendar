import { Box, Typography, Tooltip } from '@mui/material';
import moment from 'moment/moment';

const styleCurrent = {
  color: 'blue',
};
const styleAnother = {
  color: 'rgb(0, 0, 0, 0.33)',
};

export const CalendarItem = ({ item, today, ideas, openForm }) => {
  const currentDay =
    item.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY');
  const currentMounth = item.format('MM-YYYY') !== today.format('MM-YYYY');

  return (
    <Box sx={currentDay ? styleCurrent : currentMounth ? styleAnother : null}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{item.format('D')}</Typography>
        <Typography>{item.format('dd')}</Typography>
      </Box>
      <Tooltip placement="bottom-end" title="Edit idea">
        <Box
          sx={{
            mx: 'auto',
            cursor: 'pointer',
            backgroundColor: '#51eefc',
            borderRadius: 1,
            overflow: 'hidden',
            textOverflow: 'clip',
          }}
        >
          {ideas
            .filter(
              idea =>
                idea.date >= item.format('x') &&
                idea.date < item.clone().add(1, 'day').format('x')
            )
            .map(idea => (
              <Box
                onClick={() => openForm('Update', idea)}
                className="event"
                key={idea.id}
              >
                <Typography>{idea.title}</Typography>
              </Box>
            ))}
        </Box>
      </Tooltip>
    </Box>
  );
};
