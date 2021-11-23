import { View } from "react-native";
import React from "react";
import { Button } from "../Button";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { useAuth } from "../../hooks/auth";

export function SignInBox() {
    const { signIn, isSigning } = useAuth();

    return (
        <View style={styles.container}>
            <Button
                title="ENTRAR COM O GITHUB"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSigning}
            ></Button>
        </View>
    )
}