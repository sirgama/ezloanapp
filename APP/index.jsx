/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';
import auth from '@react-native-firebase/auth';
import APPCONTEXT from './Context/app.context';
import Module from './Modules';
import PopUpSingle from './Components/PopUp/PopUpSingle';
import PopUpDouble from './Components/PopUp/PopUpDouble';
import CustomPopUpSingle from './Components/PopUp/CustomPopUpSingle';

const APP = () => {
  //
  const [initializing, setInitializing] = useState(true);
  const [module, setModule] = useState('SplashScreen');
  const [spinnerText, setSpinnerText] = useState('Loading ....');
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useState({});

  const [user, setUser] = useState({});
  const [selectedRole, setSelectedRole] = useState('Buyer');

  const [token, setToken] = useState('');
  const [popUp, setPopUp] = useState({
    singleVisible: false,
    doubleVisible: false,
  });
  const [customPopUp, setCustomPopUp] = useState({
    singleCustomVisible: false,
  });

  function updateParams(doc = {}) {
    setParams({ ...params, ...doc });
  }

  // const [fontsLoaded] = useFonts({
  //   robotoBlack: require('./Assets/Fonts/roboto/Roboto-Black.ttf'),
  //   robotoBold: require('./Assets/Fonts/roboto/Roboto-Bold.ttf'),
  //   robotoLight: require('./Assets/Fonts/roboto/Roboto-Light.ttf'),
  //   robotoMedium: require('./Assets/Fonts/roboto/Roboto-Medium.ttf'),
  //   robotoRegular: require('./Assets/Fonts/roboto/Roboto-Regular.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <APPCONTEXT.Provider
      value={{
        module,
        setModule,
        setIsLoading,
        user,
        setUser,
        params,
        updateParams,
        token,
        setToken,
        popUp,
        setPopUp,
        customPopUp,
        setCustomPopUp,
        selectedRole,
        setSelectedRole,
      }}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Module module={module} />
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={isLoading}
            //Text with the Spinner
            textContent={spinnerText}
            //Text style of the Spinner Text
            // textStyle={[text.robotoBold_500, color.textWhite, text.size_25]}
          />
          <PopUpSingle input={popUp} setInput={setPopUp} />
          <CustomPopUpSingle input={customPopUp} setInput={setCustomPopUp}/>
        </SafeAreaProvider>
      </View>
    </APPCONTEXT.Provider>
  );
};

export default APP;
