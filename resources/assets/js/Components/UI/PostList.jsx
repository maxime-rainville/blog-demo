import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Post from './Post'
import Loading from './Loading'

const styles = theme => ({
    PostList: {
        display: 'flex'
    },
});

const PostList = ({posts, loading}) => (
    <div>
        {loading && (<Loading />)}

        {loading || posts.map(post => (
            <Post key={post._id} {...post} />
        ))}
    </div>
);


export default withStyles(styles)(PostList);
