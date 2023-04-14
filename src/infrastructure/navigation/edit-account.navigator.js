import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { EditPassword } from "../../features/settings/screens/change-password.screen";
import { EditUserName } from "../../features/settings/screens/username.screen";

const Tab = createMaterialTopTabNavigator();

const EditAccountNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="EditUserName"
      screenOptions={{
        // tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 12 },
        // tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="EditUserName"
        component={EditUserName}
        options={{ tabBarLabel: "Edit Name" }}
      />
      <Tab.Screen
        name="EditPassword"
        component={EditPassword}
        options={{ tabBarLabel: "Change Password" }}
      />
    </Tab.Navigator>
  );
};
export default EditAccountNavigator;
