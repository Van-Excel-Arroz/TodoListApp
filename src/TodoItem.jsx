import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';

export default function TodoItem({ todo, onHandleToggle, onRemoveTodo }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onRemoveTodo(todo.id)}>
          <DeleteOutlineIcon sx={{ color: '#f54d4d' }} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense onClick={() => onHandleToggle(todo.id)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            // onChange={() => onHandleToggle(todo.id)}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          id={labelId}
          primary={todo.text}
          primaryTypographyProps={{
            style: {
              fontSize: '1.3rem',
              maxWidth: 'fit-content',
              wordBreak: 'break-all',
              paddingRight: 8,
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
