import * as React from 'react'
import TextField from '@material-ui/core/TextField';

type Props = {
    id: string,
    name: string,
    label: string,
    autoComplete: string,
    type: string
}

export default class InputField extends React.Component<Props, {}> {
    render() {
        const {id, name, label, autoComplete, type} = this.props
        return(
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={id}
                label={label}
                name={name}
                autoComplete={autoComplete}
                type={type}
                autoFocus
            />
        )
    }
}