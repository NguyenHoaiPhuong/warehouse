import { connect } from 'react-redux';
import MiniDrawer from '../../components/navibar/AppBar'
import { AuthState } from '../../states/AuthState';

const mapStateToProps = (state: AuthState) => ({
    accessToken: state.accessToken,
    refreshToken: state.refreshToken
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);