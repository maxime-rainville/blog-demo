import { connect } from 'react-redux';
import PostListUI from '../UI/PostList';

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
