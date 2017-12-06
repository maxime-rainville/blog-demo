import { connect } from 'react-redux';
import FullPostUI from '../UI/FullPost';

const mapStateToProps = state => {
    return {
        post: state.post.fullpost,
        loading: state.post.loading
    }

}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const FullPost = connect(
    mapStateToProps,
    mapDispatchToProps
)(FullPostUI)

export default FullPost
