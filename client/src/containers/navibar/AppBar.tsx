import { connect } from 'react-redux';
import MiniDrawer from '../../components/navibar/AppBar'
import { AuthState } from '../../states/AuthState';

const mapStateToProps = (state: AuthState) => ({
    isAuthenticated: (state.accessToken === "")? false : true
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);