import { FlatList, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Icon, Button } from "@rneui/themed";
import axios from "axios";
import Add from "./partials/Add";

interface book {
  id: Number;
  name: String;
  author: String;
  edition: number;
  available: Boolean;
}

const List: React.FC = () => {
  useEffect(() => {
    getBooks();
    return () => {
      setBooks([]);
    };
  }, []);

  const [books, setBooks] = useState<book[]>([]);
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const detailsButton: React.FC = () => <Icon name="visibility" />;
  const editButton: React.FC = () => <Icon name="edit" />;
  const deleteButton: React.FC = () => <Icon name="delete" />;
  const buttons: any[] = [
    { element: detailsButton },
    { element: editButton },
    { element: deleteButton },
  ];
  const getBooks = async (): Promise<void> => {
    new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8000/books")
        .then((res) => {
          setBooks(res.data.data);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  const buttonGroupPress = (index: number, bookId: number): void => {
    switch (index) {
      case 0: {
      }
      case 1: {
      }
      case 2: {
        deleteBook(bookId);
      }
      default:
        return;
    }
  };

  const deleteBook = async (bookId: number): Promise<void> => {
    new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:8000/books/${bookId}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };

  const listItem: React.FC<any> = ({ item }: any) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.ButtonGroup
        buttons={buttons}
        onPress={(index: number) => buttonGroupPress(index, item.id)}
      ></ListItem.ButtonGroup>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Add
        dialogOpen={addDialog}
        setdialogOpen={setAddDialog}
        getBooks={getBooks}
      />
      <FlatList data={books} renderItem={listItem} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={(): void => setAddDialog(true)}
          icon={<Icon name="add" color={"#fff"} size={40} />}
          color="#48bb50"
          radius={99}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
