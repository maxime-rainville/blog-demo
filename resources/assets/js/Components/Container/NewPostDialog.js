import { connect } from 'react-redux';
import DialogUI from '../UI/NewPostDialog';
import { userValidate, editingTitleChange, editingContentChange, editingCancel, editingSave } from '../../actions'

const mapStateToProps = state => {
    return {
        show: state.editing.showNewPostDialog,
        title: state.editing.title,
        content: state.editing.content,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: () => {dispatch(editingSave())},
        onContentChange: (event) => dispatch(editingContentChange(event)),
        onTitleChange: (event) => dispatch(editingTitleChange(event.target.value)),
        onCancel: () => dispatch(editingCancel())
    }
}

const NewPostDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogUI)

export default NewPostDialog
