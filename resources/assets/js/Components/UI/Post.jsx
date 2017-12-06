import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'

const styles = {
  card: {

  },
  media: {
      width: '100%',
      height: 'auto'
  },
};

const Post = ({_id, title, summary, classes}) => (
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
            <Button dense color="primary">
                Share
            </Button>
            <Link to={`/${_id}`}><Button dense color="primary">
                    Read more
                </Button></Link>
        </CardActions>
  </Card>
)


Post.defaultProps = {

}

Post.propTypes = {

}

export default withStyles(styles)(Post);
