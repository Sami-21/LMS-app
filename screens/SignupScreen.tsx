import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';

const SignupScreen: React.FC<any> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <Input style={styles.inputFields}></Input>
            <Text>Password</Text>
            <Input style={styles.inputFields} secureTextEntry={true}></Input>
            <Button>Signup</Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "450px",
    },
    logo: {
        backgroundColor: "0758FB",
        width: "50px",
        height: "50px",
        borderRadius: 9999,
    },
    inputFields: {
        marginTop: 25,
        backgroundColor: "#fff",
    },
});

export default SignupScreen
