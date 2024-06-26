Here's a brief description of how the application is built:

Necessary libraries and components are imported, including createBottomTabNavigator from @react-navigation/bottom-tabs, and NavigationContainer from @react-navigation/native. Screens and assets are also imported.

A bottom tab navigator is created using createBottomTabNavigator.

The useColorScheme hook is used to determine the user's current color scheme. The application applies either the DefaultTheme or DarkTheme based on the color scheme.

Icons for each tab are set using the screenOptions prop. The icons change color when focused.

The screens Home, MyCard, Statistics, and Settings are added to the tab navigator. Each screen has the headerShown option set to false to hide the header.

Navigation Container: The NavigationContainer wraps the tab navigator, applying the selected theme.

![WhatsApp Image 2024-06-26 at 22 12 02_ca241808](https://github.com/tym-mer/rn-assignment5-11013572/assets/170148561/8dd179f7-d511-492b-9eac-ab245d7e5f81)
![WhatsApp Image 2024-06-26 at 22 12 02_d366e190](https://github.com/tym-mer/rn-assignment5-11013572/assets/170148561/d7eae5d8-3b50-457b-8198-40f147792139)

