import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';


const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
 return (<form
    onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value)
    }}
>
<TextField
variant="outlined"
placeholder="Add today's tasks"
margin="normal"
onChange={(event) => {
  setValue(event.target.value);
}}
value={value}
/>
</form>

    
    )
}
export default TodoForm;