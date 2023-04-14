import { View, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthButton, AuthInput } from "../../account/components/account.styles";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { Text } from "../../../components/typography/text.component";
import medicine from "../../../../assets/img/medicine";
import { SvgXml } from "react-native-svg";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SchedulingCard } from "../components/scheduling-card.component";

const SchedulingScreen = ({ navigation }) => {
  const { user, scheduleVaccine, clearSchedule } = useContext(
    AuthenticationContext
  );
  const [vaccineID, setVaccineID] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const [showVaccineDropdown, setShowVaccineDropDown] = useState(false);
  const [showLocationDropdown, setShowLocationDropDown] = useState(false);

  if (!!user.schedules) {
    return (
      <View>
        <SchedulingCard
          schedules={user.schedules}
          clearSchedule={clearSchedule}
        />
      </View>
    );
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <SvgXml
        key={`star-`}
        xml={medicine}
        width={200}
        height={200}
        style={{
          alignSelf: "center",
        }}
      ></SvgXml>
      <View style={{ flex: 1, padding: 16 }}>
        <Text
          variant="title"
          style={{
            textAlign: "center",
          }}
        >
          Schedule Vaccine
        </Text>
        <Spacer size="small">
          <DropDown
            label={"Vaccine ID"}
            mode={"outlined"}
            visible={showVaccineDropdown}
            showDropDown={() => setShowVaccineDropDown(true)}
            onDismiss={() => setShowVaccineDropDown(false)}
            value={vaccineID}
            setValue={setVaccineID}
            list={vaccineList}
          />
        </Spacer>
        <Spacer size="small">
          <AuthInput
            label="Date of Birth"
            value={date
              ?.toDateString()
              .substring(3, date.toDateString().length)}
            disabled
            mode="outlined"
            left={
              <TextInput.Icon
                name="calendar"
                onPress={() => {
                  setShow(true);
                }}
              />
            }
          />
        </Spacer>
        <Spacer size="small">
          <AuthInput
            label="Description"
            value={description}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setDescription(u)}
            mode="outlined"
          />
        </Spacer>
        <Spacer size="small">
          <AuthInput
            label="Purpose"
            value={purpose}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setPurpose(u)}
            mode="outlined"
          />
        </Spacer>
        <Spacer size="small">
          <DropDown
            label={"Location"}
            mode={"outlined"}
            visible={showLocationDropdown}
            showDropDown={() => setShowLocationDropDown(true)}
            onDismiss={() => setShowLocationDropDown(false)}
            value={location}
            setValue={setLocation}
            list={locationList}
          />
        </Spacer>
        <Spacer size="small" />
        <AuthButton
          icon="needle"
          mode="contained"
          onPress={async () => {
            const result = await scheduleVaccine(
              vaccineID,
              description,
              purpose,
              location,
              date
            );
            // if (result) navigation.navigate("HomeScreen");
          }}
          disabled={
            !vaccineID || !description || !location || !purpose || !date
          }
        >
          Schedule Vaccine
        </AuthButton>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            onChange={onChange}
          />
        )}
      </View>
    </ScrollView>
  );
};

const vaccineList = [
  {
    label: "VCC09838383-2022",
    value: "VCC09838383-2022",
  },
  {
    label: "VCC09831234-2022",
    value: "VCC09831234-2022",
  },
  {
    label: "VCC09831235-2022",
    value: "VCC09831235-2022",
  },
  {
    label: "VCC09831236-2022",
    value: "VCC09831236-2022",
  },
  {
    label: "VCC098676457-2022",
    value: "VCC098676457-2022",
  },
];
const locationList = [
  {
    label: "New York",
    value: "New York",
  },
  {
    label: "San Francisco",
    value: "San Francisco",
  },
  {
    label: "Washington",
    value: "Washington",
  },
  {
    label: " Los Angeles",
    value: " Los Angeles",
  },
  {
    label: "Houston",
    value: "Houston",
  },
  {
    label: "Miami",
    value: "Miami",
  },
];
export default SchedulingScreen;
