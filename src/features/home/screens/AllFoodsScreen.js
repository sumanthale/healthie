import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animations/fade.animation";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { Avatar, Divider, FAB, Button, Card, Chip } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MedicationContext } from "../../../services/medication/medication.context";
export const AllMedications = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
import { Text } from "../../../components/typography/text.component";
import dayjs from "dayjs";
import { deleteFoods } from "../../../services/authentication/authentication.service";

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="food"
    color="#fff"
    style={{
      backgroundColor: "#000",
    }}
  />
);

const AllFoodsScreen = ({ navigation }) => {
  const { allFoods } = useContext(MedicationContext);
  console.log(JSON.stringify(allFoods));

  const { foods } =
    allFoods.length > 0 ? allFoods[allFoods.length - 1] : { foods: [] };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Spacer size="medium">
        <Text
          variant="title"
          style={{
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          <Text
            variant="caption"
            style={{
              fontSize: 16,
            }}
          >
            {/* On {dayjs().format("dddd, MMMM D, YYYY")}  */}
            Today
          </Text>
        </Text>
      </Spacer>
      <AllMedications
        data={foods}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <FadeInView>
                <Card>
                  <Card.Title title={item.name} left={LeftContent} />
                  <Card.Content
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      columnGap: 30,
                      rowGap: 10,
                    }}
                  >
                    <Chip
                      avatar={
                        <Avatar.Icon
                          icon={({ size, color }) => (
                            <MaterialCommunityIcons
                              name="food-apple"
                              size={size / 2}
                              color="black"
                            />
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      }
                      mode="outlined"
                      style={{ borderRadius: 100, width: "40%" }}
                    >
                      <Text variant="caption">{item.cal} Kcal </Text>
                    </Chip>
                    <Chip
                      avatar={
                        <Avatar.Icon
                          icon={({ size, color }) => (
                            <FontAwesome5
                              name="weight"
                              size={size / 2.5}
                              color="black"
                            />
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      }
                      mode="outlined"
                      style={{ borderRadius: 100, width: "40%" }}
                    >
                      <Text variant="caption">{item.carbs} Carbs </Text>
                    </Chip>
                    <Chip
                      avatar={
                        <Avatar.Icon
                          icon={({ size, color }) => (
                            <FontAwesome5
                              name="fire"
                              size={size / 2}
                              color={"black"}
                            />
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      }
                      mode="outlined"
                      style={{ borderRadius: 100, width: "40%" }}
                    >
                      <Text variant="caption">{item.fat} Fat </Text>
                    </Chip>
                    <Chip
                      avatar={
                        <Avatar.Icon
                          icon={({ size, color }) => (
                            <Ionicons
                              name="barbell"
                              size={size / 2}
                              color={"black"}
                            />
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      }
                      mode="outlined"
                      style={{ borderRadius: 100 }}
                    >
                      <Text variant="caption">{item.proteins} Proteins </Text>
                    </Chip>
                  </Card.Content>
                  <Spacer size="medium" />

                  <Divider />
                  <Card.Actions>
                    <Chip
                      mode="flat"
                      selectedColor="#fff"
                      style={{
                        marginRight: "auto",
                        backgroundColor: "#000",
                      }}
                      onPress={() => console.log("Pressed")}
                    >
                      <Text
                        variant="caption"
                        color="inverse"
                        style={{
                          textTransform: "uppercase",
                          letterSpacing: 2,
                        }}
                      >
                        {item.meal}
                      </Text>
                    </Chip>

                    <Chip
                      selectedColor={"#fff"}
                      avatar={
                        <Avatar.Icon
                          icon={({ size, color }) => (
                            <MaterialIcons
                              name="delete"
                              size={size / 2}
                              color={color}
                            />
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      }
                      style={{
                        backgroundColor: "#D0421B",
                      }}
                      onPress={() => {
                        deleteFoods(item.id);
                      }}
                    >
                      <Text variant="caption" color="inverse">
                        Delete
                      </Text>
                    </Chip>
                  </Card.Actions>
                </Card>
                <Divider />
              </FadeInView>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate("AddFood");
        }}
        color={"#fff"}
      />
    </View>
  );
};

export default AllFoodsScreen;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 5,
    bottom: 5,
    backgroundColor: colors.brand.primary,
  },
});
