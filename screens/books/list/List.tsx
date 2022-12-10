import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Icon } from "@rneui/themed";
import axios from "axios";

const List: React.FC = () => {
  useEffect(() => {
    new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8000/books")
        .then((res) => {
          setbooks(res.data.data);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });

    return () => {
      setbooks([]);
    };
  }, []);
  interface book {
    id: Number;
    name: String;
    author: String;
    edition: number;
    available: Boolean;
  }
  const [books, setbooks] = useState<book[]>([]);
  const detailsButton: React.FC = () => <Icon name="visibility" />;
  const editButton: React.FC = () => <Icon name="edit" />;
  const deleteButton: React.FC = () => <Icon name="delete" />;
  const buttons: any[] = [
    { element: detailsButton },
    { element: editButton },
    { element: deleteButton },
  ];
  const buttonPressHandler = (buttonIndex: number): void => {};
  return (
    <View style={styles.container}>
      {books.map((book, index) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{book.name}</ListItem.Title>
            <ListItem.Subtitle>{book.author}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.ButtonGroup buttons={buttons}></ListItem.ButtonGroup>
        </ListItem>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
