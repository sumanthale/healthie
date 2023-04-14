import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SvgXml } from "react-native-svg";
import { ScrollView } from "react-native";
import account from "../../../../assets/img/account";
const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  // source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <SvgXml key={`star-`} xml={account} width={300} height={300} />
          <Text variant="title" color="dark">
            {user.name}
          </Text>
        </AvatarContainer>
        <ScrollView>
          <List.Section>
            <SettingsItem
              title="Edit Account"
              description="Edit your account information"
              left={(props) => (
                <List.Icon
                  {...props}
                  color={colors.brand.primary}
                  icon="account-edit"
                />
              )}
              onPress={() => navigation.navigate("EditAccount")}
            />
            <Spacer />

            <SettingsItem
              title="Logout"
              left={(props) => (
                <List.Icon {...props} color={colors.ui.error} icon="logout" />
              )}
              onPress={onLogout}
            />
          </List.Section>
        </ScrollView>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
