import { connect } from 'react-redux';
import PostListUI from '../UI/PostList';
import { userValidate } from '../../actions'

const mapStateToProps = state => {
    return state.post
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const PostList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListUI)

export default PostList
