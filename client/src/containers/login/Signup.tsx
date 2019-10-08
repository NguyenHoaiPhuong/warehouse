import { connect } from 'react-redux';
import Signup from '../../components/login/Signup';
import { UserState } from '../../states/UserState';

const mapStateToProps = (state: UserState) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    username: state.userName,
    password: state.password
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);