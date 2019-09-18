import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute }from '../util/route_util';

import HomeContainer from './home/home_container';

const AuthComponent = () => {
  return (
    <div className="auth-comp">
      <div className="auth-switch">
        <Switch>
          <ProtectedRoute path="/" component={HomeContainer} />
        </Switch>
      </div>
    </div>
  )
};
export default AuthComponent;