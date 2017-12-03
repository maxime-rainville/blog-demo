import { connect } from 'react-redux';
import LoginUI from '../UI/Login';
import { userValidate } from '../../actions'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onValidate: () => {
            dispatch(userValidate())
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginUI)

export default Login
