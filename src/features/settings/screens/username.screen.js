import React, { useContext, useState, useEffect } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../../account/components/account.styles";
import { ActivityIndicator } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SettingsContainer } from "../components/settings.styles";

export const EditUserName = () => {
  const { error, isLoading, changeProfile, user, info, reset } = useContext(
    AuthenticationContext
  );
  const [name, setName] = useState(user.name || "");

  useEffect(() => {
    reset();
  }, []);
  const checkSignup = () => {
    if (!!name) {
      return false;
    }
    return true;
  };

  return (
    <SettingsContainer>
      <Spacer size="large">
        <AuthInput
          label="User Name"
          value={name}
          textContentType="name"
          onChangeText={(p) => setName(p)}
          style={{
            backgroundColor: "transparent",
          }}
        />
      </Spacer>

      {info && (
        <ErrorContainer size="large">
          <Text variant="hint">{info}</Text>
        </ErrorContainer>
      )}
      {error && (
        <ErrorContainer size="large">
          <Text variant="error" color="error">
            {error}
          </Text>
        </ErrorContainer>
      )}
      <Spacer size="large">
        {!isLoading ? (
          <AuthButton
            icon="lock"
            mode="contained"
            disabled={checkSignup()}
            onPress={() => changeProfile(name)}
          >
            Update Name
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={"#000"} />
        )}
      </Spacer>
    </SettingsContainer>
  );
};
