import { connect } from 'react-redux';
import CreatePostButtonUI from '../UI/CreatePostButton';
import { editingNewPost } from '../../actions'

const mapStateToProps = state => {
    return {
        show: state.user && state.user.details.role == 'ADMIN'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {dispatch(editingNewPost())}
    }
}

const CreatePostButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePostButtonUI)

export default CreatePostButton
