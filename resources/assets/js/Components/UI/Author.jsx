import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'left',
    },
    avatar: {
        marginRight: theme.spacing.unit,
    }
});

// const Author = ({picture, email, name, classes}) => (
const Author = ({picture, email, name, classes, date}) => (
    <div className={classes.row}>
        <Avatar alt={name} src={picture} className={classes.avatar} />
        <Typography type="caption">
            Publish by <a href={`mailto:${email}`}>{name}</a><br/>
            at {date}
        </Typography>
    </div>
)

Author.defaultProps = {
}

Author.propTypes = {
}

export default withStyles(styles)(Author);
