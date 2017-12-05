import { connect } from 'react-redux';
import DialogUI from '../UI/NewPostDialog';
import { userValidate } from '../../actions'

const mapStateToProps = state => {
    return {
        show: state.editing.showNewPostDialog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: () => {console.log('save dialog')}
    }
}

const NewPostDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogUI)

export default NewPostDialog
