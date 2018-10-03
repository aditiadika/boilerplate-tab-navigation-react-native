import React from 'react'
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import FooterOne from './Tab/FooterOne'
import FooterTwo from './Tab/FooterTwo'

const TabNavigation = TabNavigator({
    footerOne: { screen: FooterOne, header: null },
    footerTwo: { screen: FooterTwo, header: null }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button 
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate('footerOne')}
                    >
                        <Icon name='home' />
                        <Text style={{ color: 'white' }}>Footer One</Text>
                    </Button>

                    <Button 
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate('footerTwo')}
                    >
                        <Icon name='card' />
                        <Text style={{ color: 'white' }}>Footer Two</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

export default TabNavigation