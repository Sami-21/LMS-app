import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';
import { useForm, Controller } from "react-hook-form";


const SignupScreen: React.FC<any> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <Input style={styles.inputFields} />
            <Text>Email</Text>
            <Input style={styles.inputFields} />
            <Text>Password</Text>
            <Input style={styles.inputFields} secureTextEntry={true} />
            <Text>Confirm Password</Text>
            <Input style={styles.inputFields} secureTextEntry={true} />
            <Button >Signup</Button>
            <Text>Already have an account ? <Text onPress={() => {
                navigation.navigate("Login");
            }} style={styles.loginBtn}>Login</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 25,
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
    loginBtn: {
        marginLeft: 10,
        color: "#0758FB",
    },
});

export default SignupScreen
