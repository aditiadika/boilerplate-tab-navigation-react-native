import { createStackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import TabNavigation from './TabNavigation'

const RootStack = createStackNavigator(
    {
        main: { screen: MainScreen, header: null },
        tabFooter: TabNavigation,
    },
    {
        initialRouteName: 'main',
        navigationOptions: {
            header: null
        }
    }
);

export default RootStack;
