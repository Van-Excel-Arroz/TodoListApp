import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';
import { validate } from 'uuid';

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidInput = validateInput();
    if (isValidInput) {
      onAddTodo(text);
      setText('');
    }
  };

  const validateInput = () => {
    if (!text.trim()) {
      setError(true);
      setHelperText('Cannot add an empty todo');
      return false;
    }
    setError(false);
    setHelperText('');
    return true;
  };

  return (
    <ListItem sx={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          fullWidth
          id="filled-basic"
          label="Add Todo"
          variant="filled"
          onChange={handleChange}
          value={text}
          error={error}
          helperText={helperText}
          inputProps={{ maxLength: 88 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
