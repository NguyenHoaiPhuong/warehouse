import * as React from 'react'
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const styles = (theme:Theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

type Props = {
    content: string,
    classes: CSSProperties
}

class SubmitButton extends React.Component<Props> {
    render() {
        const {classes, content} = this.props;
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={clsx(classes.submit)}
            >
                {content}
            </Button>
        )
    }    
}

export default withStyles(styles)(SubmitButton)