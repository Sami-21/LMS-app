import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Avatar } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddNotes from "../Components/AddNotes";

const JournalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AddNotes />
      </View>
      <View style={styles.notesContainer}>
        {/* {notes.map((item, index) => (
          <ListItem key={index} bottomDivider style={styles.singleNote}>
            <Avatar source={{ uri: item.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              <Button>edit</Button>
            </ListItem.Content>
          </ListItem>
        ))} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  notesContainer: {
    width: "100%",
  },
  singleNote: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default JournalScreen;
