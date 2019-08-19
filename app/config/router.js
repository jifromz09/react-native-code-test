import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import LoaderScreen from '../modules/loader/loader';
import Users from '../modules/users/users';
import User from '../modules/users/user';

const AppStack = createStackNavigator({ Users: Users, User: User });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    LoaderScreen: LoaderScreen,
    App: AppStack,
    // Auth: AuthStack,
  },
  {
    initialRouteName: 'LoaderScreen',
  }
));