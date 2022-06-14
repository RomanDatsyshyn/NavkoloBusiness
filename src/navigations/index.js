import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../routes/beforeAuthentication/WelcomeScreen';
import LoginScreen from '../routes/beforeAuthentication/LoginScreen';
import ForgetPasswordScreen from '../routes/beforeAuthentication/PasswordRecovery';
import CodeRecoveryScreen from '../routes/beforeAuthentication/PasswordRecovery/CodeRecoveryScreen';
import NewPasswordScreen from '../routes/beforeAuthentication/PasswordRecovery/NewPasswordScreen';
import RegistrationScreen from '../routes/beforeAuthentication/RegistrationScreen';

import TabNavigation from './bottomTabsNavigation';
import ContactUsScreen from '../routes/contactUsScreen';
import IsUserLoggedScreen from '../routes/IsUserLoggedScreen';

import NewPasswordScreen_profile from '../routes/afterAuthentication/ProfileTab/NewPasswordScreen';
import ChangeStatusScreen_profile from '../routes/afterAuthentication/ProfileTab/ChangeStatusScreen';
import ContactMeScreen_profile from '../routes/afterAuthentication/ProfileTab/ContactMeScreen';
import ChangePhoneScreen_profile from '../routes/afterAuthentication/ProfileTab/ChangePhoneScreen';

import AddCategoryScreen_categories from '../routes/afterAuthentication/CategoriesTab/AddCategoryScreen';
import AddServiceScreen_categories from '../routes/afterAuthentication/CategoriesTab/AddServiceScreen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="IsUserLoggedScreen">
      <Stack.Screen
        name="IsUserLoggedScreen"
        component={IsUserLoggedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CodeRecoveryScreen"
        component={CodeRecoveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPasswordScreen_Profile"
        component={NewPasswordScreen_profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeStatusScreen_profile"
        component={ChangeStatusScreen_profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactMeScreen_profile"
        component={ContactMeScreen_profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePhoneScreen_profile"
        component={ChangePhoneScreen_profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCategoryScreen_categories"
        component={AddCategoryScreen_categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddServiceScreen_categories"
        component={AddServiceScreen_categories}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
