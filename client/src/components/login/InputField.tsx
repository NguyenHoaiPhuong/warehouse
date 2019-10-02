import * as React from 'react'
import TextField from '@material-ui/core/TextField';

type Props = {
    id: string,
    name: string,
    label: string,
    autoComplete: string,
    type: string
}

type States = {
    value: string
}

export default class InputField extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.currentTarget.value})
    }

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
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    }
}