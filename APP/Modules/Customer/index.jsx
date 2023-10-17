import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Pages/WelcomeScreen";
import KaribuSession from "./Pages/KaribuSession";

const Stack = createNativeStackNavigator()

const Customer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="KaribuSession" component={KaribuSession} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Customer;
