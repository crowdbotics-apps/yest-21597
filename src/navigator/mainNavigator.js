import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial146014Navigator from '../features/Tutorial146014/navigator';
import NotificationList145986Navigator from '../features/NotificationList145986/navigator';
import Settings145985Navigator from '../features/Settings145985/navigator';
import Settings145977Navigator from '../features/Settings145977/navigator';
import UserProfile145975Navigator from '../features/UserProfile145975/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial146014: { screen: Tutorial146014Navigator },
NotificationList145986: { screen: NotificationList145986Navigator },
Settings145985: { screen: Settings145985Navigator },
Settings145977: { screen: Settings145977Navigator },
UserProfile145975: { screen: UserProfile145975Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
