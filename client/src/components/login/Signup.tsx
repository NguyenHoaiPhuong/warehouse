import * as React from 'react';
import clsx from 'clsx'

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { withStyles } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Copyright from './Copyright'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

import styles from './styles';

type Props = {
    classes: CSSProperties
}

class Signup extends React.Component<Props, {}> {
  
    render() {
        const { classes } = this.props
        return (
            <Grid container component="main" className={clsx(classes.root)}>
                <CssBaseline />
    
                <Grid item xs={false} sm={4} md={7} className={clsx(classes.image)} />
    
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={clsx(classes.paper)}>
                        <Avatar className={clsx(classes.avatar)}>
                            <LockOutlinedIcon />
                        </Avatar>
    
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
    
                        <form className={clsx(classes.form)} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <InputField
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        autoComplete="fname"
                                        type="input"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        autoComplete="lname"
                                        type="input"
                                    />
                                </Grid>
                            </Grid>
                            
                            <InputField
                                id="username"
                                name="username"
                                label="User Name or Email Address"
                                autoComplete="username"
                                type="input"
                            />
                            <InputField
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete=""
                            />
                            <InputField                            
                                name="retypepassword"
                                label="Re-type Password"
                                type="password"
                                id="retypepassword"
                                autoComplete=""
                            />
                            <FormControlLabel
                                control={<Checkbox value="confirm" color="primary" />}
                                label="I want to receive information, market promotions and updates via email"
                            />
                            <SubmitButton content="Sign Up"/>
    
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles as any, { withTheme: true })(Signup)