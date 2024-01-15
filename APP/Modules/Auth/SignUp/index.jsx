/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen1 from "./Screens/SignUpScreen1";
import SignUpScreen2 from "./Screens/SignUpScreen2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpVerification from "./Screens/OtpVerification";
import OnboardingScreen1 from "./Screens/Onbording";
import LoanSelect from "./Screens/LoanSelect";
import LoanForm from "./Screens/LoanForm";
import Successful from "./Screens/Successful";
import Stage from "./Screens/Stage";
import Settingspage from "./Screens/Settingspage";
import Support from "./Screens/Support";

const Stack = createNativeStackNavigator()

const SignIn = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen name="OnboardingSceen1" component={OnboardingScreen1} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="LoanSelect" component={LoanSelect} />
        <Stack.Screen name="LoanForm" component={LoanForm} />
        <Stack.Screen name="successful" component={Successful} />
        <Stack.Screen name="stage" component={Stage} />
        <Stack.Screen name="settingspage" component={Settingspage} />
        <Stack.Screen name="support" component={Support} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignIn;
