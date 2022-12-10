import { FlatList, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Icon } from "@rneui/themed";
import axios from "axios";

interface book {
  id: Number;
  name: String;
  author: String;
  edition: number;
  available: Boolean;
}

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

  const [books, setbooks] = useState<book[]>([]);
  const detailsButton: React.FC = () => <Icon name="visibility" />;
  const editButton: React.FC = () => <Icon name="edit" />;
  const deleteButton: React.FC = () => <Icon name="delete" />;
  const buttons: any[] = [
    { element: detailsButton },
    { element: editButton },
    { element: deleteButton },
  ];

  const listItem: React.FC<any> = ({ item }: any) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.ButtonGroup buttons={buttons}></ListItem.ButtonGroup>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={listItem} />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#0f0",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
  },
});
