import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Slide from 'material-ui/transitions/Slide';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const styles = theme => ({
  button: {
    bottom: theme.spacing.unit*3,
    right: theme.spacing.unit*3,
    position: 'fixed',
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

const NewPostDialog = ({show, classes, onSave, onCancel, title, content, onTitleChange, onContentChange}) => (
    <Dialog open={show} onRequestClose={onCancel} fullWidth transition={Transition}>
        <DialogTitle>Create a new Post</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="title"
                    label="Post title"
                    type="text"
                    fullWidth
                    required
                    onChange={onTitleChange} />
                <ReactQuill onChange={onContentChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={onSave} color="primary">
                    Save
                </Button>
            </DialogActions>
    </Dialog>
);


export default withStyles(styles)(NewPostDialog);
