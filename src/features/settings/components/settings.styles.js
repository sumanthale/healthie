import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const SettingsBackground = styled.ImageBackground.attrs({
  // source: require("../../../../assets/home_bg3.jpg"),
  // resizeMode: "cover",
})`
  flex: 1;
  background-color: #fff;
`;

export const SettingsCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SettingsContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  align-self: stretch;
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => {
    return props.theme.space[2];
  }};
  background-color: ${(props) =>
    props.buttonColor === "dark"
      ? props.theme.colors.brand.dark
      : props.theme.colors.brand.primary};
`;

export const AuthInput = styled(TextInput)`
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: 50px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  margin-top: ${(props) => props.theme.space[2]};
`;
export const SubTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  color: #000;
  margin-top: ${(props) => props.theme.space[2]};
  margin-top: auto;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const InfoContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
