import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { HealthCard, Info, Section, SectionEnd } from "./scheduling.styles.js";
import { Chip } from "react-native-paper";
import doctor from "../../../../assets/img/doctor";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
export const SchedulingCard = ({ schedules = {}, clearSchedule }) => {
  const navigation = useNavigation();
  const { description, location, purpose, vaccineID, date } = schedules;

  return (
    <HealthCard elevation={2}>
      <Text
        variant="label"
        color="success"
        style={{
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        Vaccine Scheduled Successfully 💯
      </Text>

      <View>
        <Spacer size="large" />
        <SvgXml
          key={`star-`}
          xml={doctor}
          width={200}
          height={200}
          style={{
            alignSelf: "center",
          }}
        ></SvgXml>
      </View>
      <Info>
        <Text variant="title">{vaccineID}</Text>
        <Spacer size="medium" />
        <Text variant="label">{description}</Text>
        <Spacer size="medium" />
        <Text variant="caption"> {purpose}</Text>
        <Spacer size="large" />

        <Section>
          <Chip
            style={{
              backgroundColor: "#1B262C",
            }}
            textStyle={{ color: "#fff", fontWeight: "bold" }}
          >
            📌 &nbsp;{dayjs(date.toDate()).format("YYYY, MMM DD")} At {location}
          </Chip>
          <SectionEnd>
            <TouchableOpacity>
              <Chip
                mode="outlined"
                textStyle={{ fontWeight: "bold" }}
                onPress={async () => {
                  const result = await clearSchedule();
                  if (result) navigation.navigate("HomeScreen");
                }}
              >
                <MaterialCommunityIcons
                  name="delete"
                  size={20}
                  color={"#E84545"}
                />{" "}
                Delete
              </Chip>
            </TouchableOpacity>
          </SectionEnd>
        </Section>
      </Info>
    </HealthCard>
  );
};
