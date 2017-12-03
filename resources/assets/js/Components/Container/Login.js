import { connect } from 'react-redux';
import LoginUI from '../UI/Login';
import { userLogout } from '../../actions'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onLogout: _ => {
        //     dispatch(userLogout())
        // }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginUI)

export default Login
