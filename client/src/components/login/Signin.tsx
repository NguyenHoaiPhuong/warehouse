import * as React from 'react'
import clsx from 'clsx';
import { History } from 'history';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Copyright from './Copyright'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

import { Login } from '../../services/Login'

import styles from './styles'

type Props = {
    classes: CSSProperties,
    history : History
}

type States = {

}

class Signin extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    async handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        let usernameElem = document.getElementById('username') as HTMLElement
        let passwordElem = document.getElementById('password') as HTMLElement
        let username = usernameElem.getAttribute('value') as string
        let password = passwordElem.getAttribute('value') as string

        let isAuthenticated = await Login(username, password)
        if (isAuthenticated) {
            this.props.history.replace('/')
        } else {
            console.log("IsAuthenticated false")
        }
    }

    render() {
        let { classes } = this.props
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
                            Sign in
                        </Typography>
    
                        <form className={clsx(classes.form)} noValidate onSubmit={this.handleSubmit}>
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
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <SubmitButton content="Sign In"/>
    
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
    
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
    
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

export default withStyles(styles as any, { withTheme: true })(Signin)
