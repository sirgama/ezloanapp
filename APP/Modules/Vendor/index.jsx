import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Pages/WelcomeScreens";
import Home from "./Pages/Home";
import Profile from "./Pages/UserScreens/Profile";
import CustomerOrder from "./Pages/CustomerOrder";
import ProfileSettings from "./Pages/UserScreens/ProfileSettings";
import AddNewProduct from "./Pages/AddNewProduct";
import MyReviews from "./Pages/UserScreens/MyReviews";
import ContactChat from "./Pages/UserScreens/ContactChat";
const Stack = createNativeStackNavigator()

const Vendor = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="CustomerOrder" component={CustomerOrder} />
        <Stack.Screen name="ContactChat" component={ContactChat} />
        <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
        <Stack.Screen name="MyReviews" component={MyReviews} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Vendor;
