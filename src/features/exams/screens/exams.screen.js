import { View, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { TransitionPresets } from "@react-navigation/stack";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthButton, AuthInput } from "../../account/components/account.styles";
import { Checkbox, HelperText, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { Text } from "../../../components/typography/text.component";
import medicine from "../../../../assets/img/medicine";
import { SvgXml } from "react-native-svg";
import exam from "../../../../assets/img/exam";
import { CheckBoxsWrapper, CheckBoxWrapper } from "../components/exams.styles";

const ExamScreen = ({ navigation }) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  return (
    <ScrollView style={{ flex: 1 }}>
      <Spacer size="large" />
      <SvgXml
        key={`star-`}
        xml={exam}
        width={200}
        height={200}
        style={{
          alignSelf: "center",
        }}
      ></SvgXml>
      <View style={{ flex: 1, padding: 16 }}>
        <Spacer size="medium">
          <Text
            variant="title"
            style={{
              textAlign: "center",
            }}
          >
            Medical Examination
          </Text>
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            1. What element can be used as an antidote for arsenic poisoning?
          </Text>
          <AuthInput
            value={answer1}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer1(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            2. What do you call a doctor who specializes in treating the heart?
          </Text>
          <AuthInput
            value={answer2}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer2(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            3. A cancer or tumor of the liver is what condition?
          </Text>
          <AuthInput
            value={answer3}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer3(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">4. Which medical term means vomiting?</Text>
          <AuthInput
            value={answer4}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer4(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            5. Which drug is a another name for diazepam?
          </Text>
          <AuthInput
            value={answer5}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer5(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            6. What do the letters "EEG" stand for? Show answer
          </Text>
          <AuthInput
            value={answer6}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer6(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            7. What condition refers to a low oxygen level in the blood?
          </Text>
          <AuthInput
            value={answer7}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer7(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">8. Who developed the vaccine for polio?</Text>
          <AuthInput
            value={answer8}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer8(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">9. To what does "orthopedic" relate?</Text>
          <AuthInput
            value={answer9}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer9(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="label">
            10. What enzyme is responsible for breaking down starches?
          </Text>
          <AuthInput
            value={answer10}
            type="text"
            keyboardType="default"
            onChangeText={(u) => setAnswer10(u)}
            dense={true}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Spacer>
        <Spacer size="large" />
        <Text variant="caption">Answered Questions</Text>
        <CheckBoxsWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">1</Text>
            <Checkbox
              color="#000"
              status={!!answer1 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">2</Text>
            <Checkbox
              color="#000"
              status={!!answer2 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">3</Text>
            <Checkbox
              color="#000"
              status={!!answer3 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">4</Text>
            <Checkbox
              color="#000"
              status={!!answer4 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">5</Text>
            <Checkbox
              color="#000"
              status={!!answer5 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">6</Text>
            <Checkbox
              color="#000"
              status={!!answer6 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">7</Text>
            <Checkbox
              color="#000"
              status={!!answer7 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">8</Text>
            <Checkbox
              color="#000"
              status={!!answer8 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">9</Text>
            <Checkbox
              color="#000"
              status={!!answer9 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <Text variant="caption">10</Text>
            <Checkbox
              color="#000"
              status={!!answer10 ? "checked" : "unchecked"}
            />
          </CheckBoxWrapper>
        </CheckBoxsWrapper>
        <Spacer size="large" />
        <AuthButton
          icon="forum"
          mode="contained"
          onPress={async () => {
            navigation.navigate("HomeScreen");
          }}
          // buttonColor="dark"
          disabled={
            !answer1 ||
            !answer2 ||
            !answer3 ||
            !answer4 ||
            !answer5 ||
            !answer6 ||
            !answer7 ||
            !answer8 ||
            !answer9 ||
            !answer10
          }
        >
          Submit
        </AuthButton>
      </View>
    </ScrollView>
  );
};

export default ExamScreen;
