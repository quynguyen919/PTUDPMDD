import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <h2 style={styles.h2text}>Register</h2>
        </View>
        <View style={styles.img}>
          <Image
            style={styles.logo}
            source={{ uri: require("../assets/images/logo.png") }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={"grey"}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={"grey"}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"grey"}
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={"grey"}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MainScreen")}
              style={styles.registerButton}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.loginButton}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  registerButton: {
    backgroundColor: "blue",
    width: 80,
    height: 40,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "red",
    width: 80,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    border: 1,
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 2,
    
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 2,
    marginTop: 10,
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    justifyContent: "center",
    borderRadius: 100,
  },
});
