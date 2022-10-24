import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CreateView = ({ params }) => (
  <View style={styles.CRUDContainer}>
    <View style={styles.formContainer}>
    <View style={styles.inputContainer}>
        <TextInput placeholder="ID" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Author" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Image" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Category" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Description" style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Price" style={styles.inputText} />
      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel}>
          <Text style={styles.btnText}>Cancel </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CreateView;

const styles = StyleSheet.create({
  formContainer: {
    //padding:20,
    //backgroundColor: 'black'
    width: "100%",
    alignItems: "center",
  },

  inputContainer: {
    width: "70%",

  },
  inputText: {
    height: 40,

    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#d81b60",
    paddingVertical: 5,
    marginBottom: 10,
  },
  btnSubmit: {
    backgroundColor: "blue",
    width: "50%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45 / 2,
  },
  btnText: {
    color: "#FFF",
  },
  btnCancel: {
    marginLeft: 10,
    backgroundColor: "#d81b60",
    width: "45%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45 / 2,
  },
  btnText: {
    color: "#FFF",
  },
  btnContainer: {
    marginTop: 20,
    // marginRight:60,
    width: "70%",
    flexDirection: 'row',
    //backgroundColor: 'red',
    //justifyContent: 'space-between',
  }
});
