import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import EditAccountNavigator from "./edit-account.navigator";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Account"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name="EditAccount"
        component={EditAccountNavigator}
        options={{
          title: "Edit Account",
        }}
      />
    </SettingsStack.Navigator>
  );
};
