import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dialog } from "@rneui/themed";
import { book } from "../List";

const Details: React.FC<any> = ({
  selectedBook,
  dialogOpen,
  setDialogOpen,
}) => {
  return (
    <Dialog
      animationType="fade"
      isVisible={dialogOpen}
      onBackdropPress={() => setDialogOpen(false)}
    >
      {selectedBook == null ? null : (
        <>
          <Dialog.Title title="Book Details" />
          <Text>{`title : ${selectedBook.name}`}</Text>
          <Text>{`author : ${selectedBook.author}`}</Text>
          <Text>{`edition N° : ${selectedBook.edition}`}</Text>
        </>
      )}
      <View style={styles.buttonContainer}>
        <Dialog.Button
          onPress={() => setDialogOpen(false)}
          title={"close"}
          style={{ width: 20 }}
        />
      </View>
    </Dialog>
  );
};

export default Details;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
