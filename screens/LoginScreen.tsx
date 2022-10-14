import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';

const LoginScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>

            <Text>LoginScreen</Text>
            <Input></Input>
            <Button>Login</Button>
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
        width: "50",
        height: "50",
        backgroundColor: "0758FB",
    },
});

export default LoginScreen