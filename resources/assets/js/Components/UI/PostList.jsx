import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Post from './Post'
import Loading from './Loading'
import Grid from 'material-ui/Grid';

const styles = theme => ({
    PostList: {
        display: 'flex'
    },
});

const PostList = ({posts, loading}) => (
    <div>
        {loading && (<Loading />)}

        <Grid container spacing={24}>
        {loading || posts.map(post => (
            <Grid item key={post._id} xs={12} sm={6}>
                <Post  {...post} />
            </Grid>
        ))}
        </Grid>
    </div>
);


export default withStyles(styles)(PostList);
