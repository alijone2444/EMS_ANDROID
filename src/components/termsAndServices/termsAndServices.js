import React from "react";
import { View, Text } from "react-native";
import Background from "../Wrappers/Background";
import MarginWrapper from "../Wrappers/marginWrapper";

const TermsAndServices = () => {
    return (
        <Background>
            <MarginWrapper>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>
                        By using this app, you agree to the following terms and conditions:
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
                        1. You must be at least 18 years old to use this app.
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
                        2. You agree to comply with all applicable laws and regulations.
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
                        3. You are responsible for maintaining the confidentiality of your account and password.
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
                        4. We reserve the right to terminate or suspend your account at any time for any reason.
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
                        5. Your use of this app is at your sole risk. We are not liable for any damages or losses incurred.
                    </Text>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        Please read our Privacy Policy for information on how we collect, use, and disclose your personal information.
                    </Text>
                </View>
            </MarginWrapper>
        </Background>
    );
};

export default TermsAndServices;
