import moment from 'moment/moment';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Divider,
  ButtonGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Backdrop, ModalBox } from './IdeaForm.styled';

export const IdeaForm = ({
  deleteIdea,
  setUpdateIdea,
  saveIdea,
  updateIdea,
  closeForm,
  nameOfMethod,
}) => {
  const addIdea = () => {
    saveIdea(
      {
        title: updateIdea.title,
        description: updateIdea.description,
        date: updateIdea.date,
      },
      updateIdea.id
    );
  };

  const onChangeMethod = (value, input) => {
    setUpdateIdea(prevState => ({ ...prevState, [input]: value }));
  };
  return (
    <>
      <Backdrop onClick={closeForm}>
        <ModalBox onClick={e => e.stopPropagation()}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              {nameOfMethod} idea
            </Typography>
            <IconButton onClick={closeForm}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              sx={{ mb: 1 }}
              variant="standard"
              margin="normal"
              required
              fullWidth
              label="Title"
              autoComplete="off"
              value={updateIdea.title}
              onChange={e => onChangeMethod(e.target.value, 'title')}
            />
            <TextField
              sx={{ mb: 1 }}
              multiline
              rows={3}
              label="Description"
              fullWidth
              variant="standard"
              value={updateIdea.description}
              onChange={e => onChangeMethod(e.target.value, 'description')}
            />
            <TextField
              sx={{ mb: 1 }}
              variant="standard"
              label="Date"
              value={moment
                .unix(updateIdea.date / 1000)
                .format('yyyy-MM-DDThh:mm')}
              type="datetime-local"
              required
              onChange={e => onChangeMethod(Date.parse(e.target.value), 'date')}
            />

            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {nameOfMethod === 'Update' ? (
                <ButtonGroup>
                  <IconButton
                    onClick={() => deleteIdea(updateIdea.id)}
                    color="error"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                  <IconButton color="success" onClick={addIdea}>
                    <RefreshIcon />
                  </IconButton>
                </ButtonGroup>
              ) : (
                <Button
                  variant="contained"
                  disabled={!updateIdea.title}
                  onClick={addIdea}
                >
                  Save
                </Button>
              )}
            </Box>
          </Box>
        </ModalBox>
      </Backdrop>
    </>
  );
};
