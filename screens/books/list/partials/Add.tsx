import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Dialog } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";

const Add: React.FC<any> = ({ dialogOpen, setDialogOpen, getBooks }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      edition: "",
    },
  });
  const onSubmit = async (data: any) => {
    new Promise((resolve, reject) => {
      axios
        .post(
          "http://127.0.0.1:8000/books",
          {
            name: data.title,
            author: data.author,
            edition: parseInt(data.edition),
            available: true,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          reset();
          getBooks();
          setDialogOpen(false);
          resolve(res);
        })
        .catch((err) => {
          console.log(err.response.data);
          reject(err);
        });
    });
  };
  return (
    <Dialog
      animationType="fade"
      isVisible={dialogOpen}
      onBackdropPress={() => setDialogOpen(false)}
    >
      <Dialog.Title title="New Book" />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 40,
        }}
      >
        <Text style={{ marginTop: 25 }}>Title</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "book's title is required",
            },
            minLength: {
              value: 3,
              message: "your book's title should be atleast 3 character",
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
          name="title"
        />
        {errors.title && (
          <Text style={styles.errorMessage}>{errors.title.message} </Text>
        )}

        <Text>Author</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Author's name is required",
            },
            minLength: {
              value: 4,
              message: "author's name should be atleast 4 character",
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
          name="author"
        />
        {errors.author && (
          <Text style={styles.errorMessage}>{errors.author.message} </Text>
        )}

        <Text>edition N°</Text>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "book's edition is required",
            },
            pattern: {
              value: /^[1-9]\d*$/,
              message: "book's edition is invalid",
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
          name="edition"
        />
        {errors.edition && (
          <Text style={styles.errorMessage}>{errors.edition.message} </Text>
        )}

        <Button
          style={{ marginBottom: 25 }}
          title="Add"
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </Dialog>
  );
};

export default Add;

const styles = StyleSheet.create({
  inputFields: {
    width: 200,
    height: 50,
    marginBottom: 20,
    borderBottomColor: "#0758FB99",
    borderStyle: "solid",
    borderBottomWidth: 1,
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
