import React, { useEffect, useRef, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { ListItem, Icon, Button, Dialog } from "@rneui/themed";
import axios from "axios";
import Add from "./partials/Add";
import Details from "./partials/Details";

export interface book {
  id: number;
  name: string;
  author: string;
  edition: number;
  available: boolean;
}

const List: React.FC = () => {
  useEffect(() => {
    console.log("deleteAlert ,useEffect", deleteAlert);
    getBooks();
    return () => {
      setBooks([]);
    };
  }, []);

  const [books, setBooks] = useState<book[]>([]);
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const [detailsDialog, setDetailsDialog] = useState<boolean>(false);
  const [deleteAlert, setDeleteAlert] = useState<boolean>(false);
  const selectedBook = useRef<any>(null);
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

  const deleteBook = async (book: book): Promise<void> => {
    console.log("deleteAlert,deleteBook", deleteAlert);
    new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:8000/books/${book.id}`)
        .then((res) => {
          getBooks();
          setDeleteAlert(false);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };

  const buttonGroupPress = (index: number, book: book): void => {
    selectedBook.current = book;
    switch (index) {
      case 0:
        setDetailsDialog(true);
        break;
      case 1:
        break;
      case 2:
        setDeleteAlert(true);
        break;
      default:
        break;
    }
  };

  const listItem: React.FC<any> = ({ item }: any) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.ButtonGroup
        buttons={buttons}
        onPress={(index: number) => buttonGroupPress(index, item)}
      ></ListItem.ButtonGroup>
    </ListItem>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList data={books} renderItem={listItem} />
      <View style={styles.addButtonContainer}>
        {addDialog ? null : (
          <Button
            onPress={(): void => setAddDialog(true)}
            icon={<Icon name="add" color={"#fff"} size={40} />}
            color="#48bb50"
            radius={99}
          />
        )}
      </View>
      <Add
        dialogOpen={addDialog}
        setDialogOpen={setAddDialog}
        getBooks={getBooks}
      />
      <Details
        selectedBook={selectedBook.current}
        dialogOpen={detailsDialog}
        setDialogOpen={setDetailsDialog}
      />
      <Dialog
        animationType="fade"
        isVisible={deleteAlert}
        onBackdropPress={() => setDeleteAlert(false)}
      >
        <Dialog.Title title="Warning" titleStyle={{ textAlign: "center" }} />
        <View>
          <Text style={{ textAlign: "center" }}>
            Are you sure you want to delete this item !
          </Text>
          <View style={styles.deleteButtonsContainer}>
            <Dialog.Button
              onPress={() => setDeleteAlert(false)}
              titleStyle={{ color: "#f55" }}
              title={"Cancel"}
            />
            <Dialog.Button
              onPress={() => deleteBook(selectedBook.current)}
              titleStyle={{ color: "#2b2" }}
              title={"Confirm"}
            />
          </View>
        </View>
      </Dialog>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },

  deleteButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
