import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import FitnessCards from "../components/FitnessCards";
import { FitnessContext } from "../../../services/fitness/workout.context";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import home from "../../../../assets/home";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FitnessHomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessContext);
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: "transparent",
          padding: 10,
          height: 200,
          width: "100%",
          marginBottom: 60,
        }}
      >
        <SvgXml
          key={`star-`}
          xml={home}
          width={400}
          height={400}
          style={{
            position: "absolute",
            right: 0,
            top: -90,
          }}
        ></SvgXml>
        <Text
          variant="title"
          color="inverse"
          style={{
            marginTop: 15,
          }}
        >
          Beginner Workouts
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 7,
            marginBottom: 6,
          }}
        >
          <View>
            <Text
              variant="h5"
              color="inverse"
              style={{
                textAlign: "center",
              }}
            >
              {workout}
            </Text>
            <Text color="inverse" variant="label" style={{ marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              variant="h5"
              color="inverse"
              style={{
                textAlign: "center",
              }}
            >
              {calories}
            </Text>
            <Text color="inverse" variant="label" style={{ marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              variant="h5"
              color="inverse"
              style={{
                textAlign: "center",
              }}
            >
              {minutes}
            </Text>
            <Text color="inverse" variant="label" style={{ marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("FindWorkout")}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 10,
              borderRadius: 7,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEM-6gDUO7g1cdrNhBaqk_0nwxy6ILlIqsQ&usqp=CAU",
            }}
          />
          <Text
            variant="title"
            color="inverse"
            style={{
              position: "absolute",
              left: 95,
              bottom: 15,
            }}
          >
            Advaced Workouts
          </Text>
          {/* <Ionicons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 30,
              transform: [{ rotate: "90deg" }],
            }}
            name="md-barbell"
            size={24}
            color="black"
          />

          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 60,
            }}
            name="weight-lifter"
            size={24}
            color="black"
          /> */}
        </Pressable>
      </View>
      <ScrollView>
        <FitnessCards />
      </ScrollView>
    </>
  );
};

export default FitnessHomeScreen;
const styles = StyleSheet.create({});
