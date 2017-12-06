import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Loading from './Loading';
import Author from './Author';

const styles = theme => ({
    root: {minWidth: '80%'},
    page: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        width: '100%'
    })
});

const FullPost = ({post, loading, classes}) => (
    <div className={classes.root}>
        {loading && <Loading />}
        {!loading && post && (
            <Paper className={classes.page}>
                <Typography type="headline" component="h3">
                    {post.title}
                </Typography>
                <Typography type="body1" dangerouslySetInnerHTML={{ __html: post.content }} />
                <Author {...post.author} />
            </Paper>
        )}

        {!loading && !post && (
            <Paper className={classes.root}>
                <Typography type="headline" component="h3">
                    Article not found!
                </Typography>
            </Paper>
        )}

    </div>
)


FullPost.defaultProps = {

}

FullPost.propTypes = {

}

export default withStyles(styles)(FullPost);
