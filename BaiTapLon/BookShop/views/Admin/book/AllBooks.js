import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Surface, Title, TextInput } from "react-native-paper";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { delteBook } from "../../../redux/actions/bookAction";
import IonIcons from "react-native-vector-icons/IonIcons";

const AllBooks = ({ navigation }) => {
  // const books = useSelector((state) => state.book.books);
  // const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getDataFromDB();
  });

  const [books, setBooks] = useState();

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("bookItems");
    items = JSON.parse(items);
    setBooks(items);
  };
  const handleDeleteBook = (id) => {
    // navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'AllBooks' }],
    //   });
    // navigation.replace("AllBooks");
    // dispatch(delteBook({id:parseInt(id)}));
    // getDataFromDB();
    // navigation.navigate
    // console.log(id)
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <View style={styles.header}>
                <View>
                    <TextInput
                        mode='outlined'
                        // style={styles.inputText}
                        placeholder="Search"
                        onChangeText={key => setSearch(key)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreateBook")}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View> */}

      <View style={styles.header}>
        <View padding={10}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Search" style={styles.inputText} />
            <IonIcons
              name="search-circle"
              color="black"
              size={50}
              justifyContent="center"
              alignItems="center"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateBook")}
        >
          <Icon
            name="plus"
            size={21}
            color={"blue"}
            style={styles.buttonText}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {books != null ? (
          <FlatList
            data={books}
            keyExtractor={(item, index) => item.id + index.toString()}
            // refreshing={false}
            // onRefresh={books}
            renderItem={({ item }) => (
              <Card style={styles.item}>
                <View style={styles.rowView}>
                  <View style={styles.contentItem}>
                    <Text style={styles.title}>{item.nameBook}</Text>
                    <Text>{item.price}</Text>
                  </View>
                  <View style={styles.btnTool}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditBook", {
                          book: {
                            id: item.id,
                            nameBook: item.nameBook,
                            // category: action.payload.category,
                            author: item.author,
                            price: item.price,
                            descriptionBook: item.descriptionBook,
                            photoBook: item.photoBook,
                          },
                        })
                      }
                      style={{ marginHorizontal: 16 }}
                    >
                      <Icon name="edit" size={30} color={"blue"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleDeleteBook(item.id)}>
                      <Icon name="trash" size={30} color={"red"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            )}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
=======
                                        <TouchableOpacity
                                            onPress={() => handleDeleteBook(item.id) }
                                        >
                                            <Icon name="trash" size={30} color={"red"} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        )}
                    /> : null
                }
            </ScrollView>
        </SafeAreaView>
    )
}

>>>>>>> 06503ac890ae5b153cd9ee94e36d56efc73c7011
export default AllBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    // marginBottom: 10,
    // backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    paddingLeft: 30,
  },
  inputText: {
    // borderBottomWidth: 3,
    // borderBottomColor: '#d81b60',
    // paddingVertical:10,
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    borderRadius: 10,
    width: "100%",
    height: 50,
  },
  header: {
    marginTop: Platform.OS === "android" ? 24 : 0,
    padding: 10,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:"red"
    // height: "auto",
  },
  button: {
    // height: "100%",
    width: "10%",
    padding: 9.5,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100 / 2,
  },
  buttonText: {
    color: "white",
  },
  item: {
    padding: 10,
    // margin: 16,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:"red",
    width: "100%",
  },
  contentItem: {
    // backgroundColor:"green",
    width: "70%",
  },
  btnTool: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor:'yellow'
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
