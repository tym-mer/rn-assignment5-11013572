import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Home from './screen/Home';
import Settings from './screen/Settings';
import home from './assets/home.png'
import settings from './assets/settings.png'
import myCard from './assets/myCards.png'
import statistics from './assets/statictics.png'
import { Image, Appearance, useColorScheme } from 'react-native';
import MyCard from './screen/MyCard';
import Statistics from './screen/Statistics';

const Tab = createBottomTabNavigator();


function App() {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            const iconColor = focused ? color : 'gray'
            if (route.name === 'Home') {
              iconName = focused
                ? home
                : home;
            } else if (route.name === 'Settings') {
              iconName = focused
                ? settings
                : settings;
            }
             else if (route.name === 'MyCard') {
              iconName = focused
                ? myCard
                : myCard;
            } else if (route.name === 'Statistics') {
              iconName = focused
                ? statistics
                : statistics;
            }

            return <Image source={iconName} style={{width: 25, height: 25}}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="MyCard" component={MyCard} options={{headerShown: false}}/>
        <Tab.Screen name="Statistics" component={Statistics} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App
