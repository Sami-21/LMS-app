import { StyleSheet, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const SignupScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      discipline: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: any) => {
    new Promise((resolve, reject) => {
      axios
        .post(
          "http://127.0.0.1:8000/api/signup",
          {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            discipline: data.discipline,
            password: data.password,
            password_confirmation: data.confirmPassword,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("signup succcessful");
          console.log(res.data);
          resolve(res);
        })
        .catch((err) => {
          console.log("signup failed");
          console.log(err.response.data);
          reject(err);
        });
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
      }}
      style={styles.container}
    >
      <Text style={{ marginTop: 25 }}>First Name</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "first name is required",
          },
          minLength: {
            value: 4,
            message: "your first name should be atleast 4 character",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputFields}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <Text style={styles.errorMessage}>{errors.firstName.message} </Text>
      )}

      <Text>Last Name</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "last name is required",
          },
          minLength: {
            value: 4,
            message: "your last name should be atleast 4 character",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputFields}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        <Text style={styles.errorMessage}>{errors.lastName.message} </Text>
      )}

      <Text>Phone Number</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "your phone number is required",
          },
          pattern: {
            value: /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,
            message: "your phone number is invalid",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputFields}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />
      {errors.phone && (
        <Text style={styles.errorMessage}>{errors.phone.message} </Text>
      )}
      <Text>Discipline</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "your discipline is required",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputFields}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="discipline"
      />
      {errors.discipline && (
        <Text style={styles.errorMessage}>{errors.discipline.message} </Text>
      )}
      <Text>Email</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "your email is required",
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "invalid email",
          },
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
      {errors.email && (
        <Text style={styles.errorMessage}>{errors.email.message} </Text>
      )}
      <Text>Password</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "password is required",
          },
          minLength: {
            value: 4,
            message: "password should be atleast 4 characters",
          },
          maxLength: {
            value: 100,
            message: "password should be less the 100 characters",
          },
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
      {errors.password && (
        <Text style={styles.errorMessage}>{errors.password.message}</Text>
      )}
      <Text>Confirm password</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "password confirmation is required",
          },
          maxLength: {
            value: 100,
            message: "password confirmation should be less the 100 characters",
          },
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
        name="confirmPassword"
      />
      {errors.confirmPassword && (
        <Text style={styles.errorMessage}>
          {errors.confirmPassword.message}
        </Text>
      )}

      <Button
        style={{ marginBottom: 25 }}
        title="Signup"
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 450,
  },
  logo: {
    backgroundColor: "0758FB",
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  inputFields: {
    width: 300,
    height: 50,
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#fff",
  },
  errorMessage: {
    color: "red",
    marginBottom: 15,
  },
  loginBtn: {
    marginBottom: 10,
    color: "#0758FB",
  },
});
export default SignupScreen;
