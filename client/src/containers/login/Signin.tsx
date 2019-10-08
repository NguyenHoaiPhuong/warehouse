import { connect } from 'react-redux';
import Signin from '../../components/login/Signin'
import { UserState } from '../../states/UserState';

const mapStateToProps = (state: UserState) => ({
    username: state.userName,
    password: state.password
})

const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(Signin);