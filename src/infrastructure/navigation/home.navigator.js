import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { colors } from "../theme/colors";
import MedicationNavigator from "./medication.navigator";
import SchedulingScreen from "../../features/scheduling/screens/scheduling.screen";
import ExamScreen from "../../features/exams/screens/exams.screen";
import NotesScreen from "../../features/notes/screens/notes.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerMode: "screen",
        headerStyle: {
          backgroundColor: colors.brand.primary,
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      initialRouteName="HomeScreen"
    >
      <HomeStack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />

      <HomeStack.Screen
        name="Schedule"
        component={SchedulingScreen}
        options={{
          title: "Vaccine Scheduling",
        }}
      />
      <HomeStack.Screen
        name="Exam"
        component={ExamScreen}
        options={{
          title: "Medical Exam",
        }}
      />

      <HomeStack.Screen
        name="Remainder"
        component={MedicationNavigator}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          title: "Pending Tasks",
        }}
      />
    </HomeStack.Navigator>
  );
};
