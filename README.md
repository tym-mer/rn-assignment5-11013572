Here's a brief description of how the application is built:

Necessary libraries and components are imported, including createBottomTabNavigator from @react-navigation/bottom-tabs, and NavigationContainer from @react-navigation/native. Screens and assets are also imported.

A bottom tab navigator is created using createBottomTabNavigator.

The useColorScheme hook is used to determine the user's current color scheme. The application applies either the DefaultTheme or DarkTheme based on the color scheme.

Icons for each tab are set using the screenOptions prop. The icons change color when focused.

The screens Home, MyCard, Statistics, and Settings are added to the tab navigator. Each screen has the headerShown option set to false to hide the header.

Navigation Container: The NavigationContainer wraps the tab navigator, applying the selected theme.

