import { connect } from 'react-redux';
import LoginUI from '../UI/Login';

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginUI)

export default Login
