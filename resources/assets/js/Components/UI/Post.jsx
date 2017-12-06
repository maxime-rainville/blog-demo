import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
import Author from './Author';

const styles = {
  card: {

  },
  media: {
      width: '100%',
      height: 'auto'
  },
};

const Post = ({_id, title, summary, author, classes, created_at}) => (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="//via.placeholder.com/300x200"
          title="{title}"
        />
        <CardContent>
            <Typography type="headline" component="h2">
                {title}
            </Typography>
            <Typography component="p">
                {summary}
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/${_id}`}><Button dense color="primary">
                    Read more
                </Button></Link>
        </CardActions>
        <CardContent>
            <Author {...author} date={created_at} />
        </CardContent>
  </Card>
)


Post.defaultProps = {

}

Post.propTypes = {

}

export default withStyles(styles)(Post);
