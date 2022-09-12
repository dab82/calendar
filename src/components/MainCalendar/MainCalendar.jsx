import { Grid, Paper } from '@mui/material';
import { CalendarItem } from 'components/CalendarItem/CalendarItem';

export const MainCalendar = ({ firstDay, today, ideas, openForm }) => {
  const day = firstDay.clone().subtract(1, 'day');
  const arrCalendar = [...Array(35)].map(() => day.add(1, 'day').clone());

  return (
    <Paper
      component="main"
      sx={{ p: 1, flexGrow: 1, mx: 'auto', marginTop: 1, maxWidth: '1280px' }}
    >
      <Grid
        container
        spacing={1}
        columns={7}
        sx={{
          m: 0,
          width: '100%',
          '--Grid-borderWidth': '2px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {Array.from(
          arrCalendar.map(item => (
            <Grid
              item
              xs={1}
              sx={{ p: 1 }}
              key={item.format('DD-MM-YYYY')}
              minHeight={120}
            >
              <CalendarItem
                openForm={openForm}
                item={item}
                today={today}
                ideas={ideas}
                key={item.format('DD-MM-YYYY')}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Paper>
  );
};
