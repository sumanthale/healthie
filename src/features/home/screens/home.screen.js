import React, { useContext, useState } from "react";
import { TouchableOpacity, ScrollView, View, Image } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, List } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AuthButton,
  FooterContainer,
  HeaderContainer,
  MainContainer,
  HealthButton,
  Meetup,
  CategorieContainer,
  CategoryItem,
} from "../components/home.styles";
import { SvgXml } from "react-native-svg";
import avatar from "../../../../assets/avatar";
import group from "../../../../assets/group";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import home from "../../../../assets/home";
import schedule from "../../../../assets/img/schedule";
import exam from "../../../../assets/img/exam";
import remainder from "../../../../assets/img/remainder";
import notes from "../../../../assets/img/notes";

const HomeItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

export const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  return (
    <>
      <HeaderContainer>
        <SvgXml
          key={`star-`}
          xml={home}
          width={400}
          height={400}
          style={{
            position: "absolute",
            right: 0,
          }}
        ></SvgXml>
        <View>
          <Text color="inverse" variant="title">
            Hello,
          </Text>
          <Text color="inverse" variant="h5">
            {user.name}
          </Text>
        </View>
        {/* <View>
          <SvgXml key={`star-`} xml={avatar} width={50} height={50} />
        </View> */}
        <Image
          source={require("../../../../assets/img/avatar.png")}
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            bottom: -85,
            right: 50,
            resizeMode: "contain",
          }}
        />
      </HeaderContainer>
      <MainContainer>
        <Text color="primary" variant="title">
          Categories
        </Text>
        <CategorieContainer
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Schedule")}>
            <CategoryItem>
              <SvgXml
                key={`star-`}
                xml={schedule}
                width={100}
                height={100}
              ></SvgXml>
              <Spacer size="large">
                <Text variant="label" color="inverse">
                  Vaccine Scheduling
                </Text>
              </Spacer>
            </CategoryItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Exam")}>
            <CategoryItem>
              <SvgXml
                key={`star-`}
                xml={exam}
                width={100}
                height={100}
              ></SvgXml>

              <Spacer size="large">
                <Text variant="label" color="inverse">
                  Medical Exam
                </Text>
              </Spacer>
            </CategoryItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Remainder")}>
            <CategoryItem>
              <SvgXml
                key={`star-`}
                xml={remainder}
                width={100}
                height={100}
              ></SvgXml>
              <Spacer size="large">
                <Text variant="label" color="inverse">
                  Medicine Reminder
                </Text>
              </Spacer>
            </CategoryItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
            <CategoryItem>
              <SvgXml
                key={`star-`}
                xml={notes}
                width={100}
                height={100}
              ></SvgXml>
              <Spacer size="large">
                <Text variant="label" color="inverse">
                  Pending Tasks
                </Text>
              </Spacer>
            </CategoryItem>
          </TouchableOpacity>
        </CategorieContainer>
      </MainContainer>
      {/* 
      <FooterContainer>
        <Meetup>
          <View>
            <Text variant="titleLg" color="purple">
              Meetup
            </Text>
            <Text variant="hint" color="purple">
              Off-line exchage of experience
            </Text>
          </View>
          <SvgXml key={`star-`} xml={group} width={100} height={100} />
        </Meetup>
      </FooterContainer> */}
    </>
  );
};
