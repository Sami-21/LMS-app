import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';
import { useForm, Controller } from "react-hook-form";

const LoginScreen: React.FC<any> = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                    minLength: 4,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputFields}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text style={styles.errorMessage}>{errors.email.message} </Text>}
            <Text>Password</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputFields}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />

            {/* <Text>Email</Text>
            <Input style={styles.inputFields} />
            <Input style={styles.inputFields} secureTextEntry={true} />
            <Button>Login</Button> */}
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
        width: 300,
        height: 50,
        margin: 25,
        marginHorizontal: 25,
        backgroundColor: "#fff",
    },
    errorMessage: {
        color: "red",
    },

    loginBtn: {
        marginLeft: 10,
        color: "#0758FB",
    },
});
export default LoginScreen