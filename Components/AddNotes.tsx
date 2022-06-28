import React, { useState } from "react";
import { Button, Dialog, CheckBox, ListItem, Avatar, FAB } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import RNDateTimePicker from "react-native-datefield";
import { Controller, useForm } from "react-hook-form";

const AddNotes = () => {
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sessionNumber: "",
      sessionDate: "",
      sessionNotes: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <FAB
        icon={{ name: "add", color: "white" }}
        color="green"
        size="small"
        onPress={toggleDialog}
      />
      <Text style={styles.headerText}>الملاحظات</Text>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="ملاحظةجديدة" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputContainer}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="رقم الحصة"
            />
          )}
          name="sessionNumber"
        />
        {errors.sessionNumber && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RNDateTimePicker
              labelDate="اليوم"
              labelMonth="الشهر"
              labelYear="السنة"
            />
          )}
          name="sessionDate"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputContainer}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="الحوصلة و الملاحظات"
            />
          )}
          name="sessionNotes"
        />
        {errors.sessionNumber && <Text>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        {/* 
        <TextInput placeholder="رقم الحصة" />
        <Text>تاريخ الحصة</Text>
        <RNDateTimePicker
          labelDate="اليوم"
          labelMonth="الشهر"
          labelYear="السنة"
          onSubmit={(value) => console.log(value)}
        />
        <TextInput placeholder="الحوصلة و الملاحظات" /> */}
      </Dialog>
    </View>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 25,
  },
  headerText: {
    fontSize: 28,
  },
});
