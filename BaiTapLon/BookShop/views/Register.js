import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import React from "react";
import  IonIcons  from 'react-native-vector-icons/IonIcons';

const Register = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
            <ImageBackground 
                source={{uri: require('../assets/images/Background.png')}}
                resizeMode='cover'
                style={styles.bgContainer}

            >
                <View style={styles.logoLogin}>
                    <IonIcons name='person' color='#FFF' size={36}/>
                </View>
                <Text style={styles.signinText}>    
                    Đăng ký
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Họ và tên' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email' style={styles.inputText}/>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mật khẩu' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Xác nhận mật khẩu' style={styles.inputText}/>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <View style={{width: '40%',
                            marginBottom: 10,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            }}>
                            <TextInput placeholder='Giới tính' style={{
                                borderBottomWidth: 3,
                                borderBottomColor: '#d81b60',
                                paddingVertical:10,
                                color: '#000',
                                borderRadius: 10,
                                paddingLeft: 10,
                                }}/>
                        </View>
                        <View style={{width: '40%',
                            marginBottom: 10,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            marginLeft: 50,
                            }}>
                            <TextInput placeholder='Ngày sinh' style={styles.inputText}/>
                        </View>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Địa chỉ' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Số điện thoại' style={styles.inputText}/>
                    </View>
                    
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.btnTxt} >Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
},
logoLogin: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#d81b60',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
}, 
signinText: {
    color: '#d81b60',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10,
    color: '#FFF',

},
formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
},
inputContainer: {
    width: '70%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
},
inputText: {
    borderBottomWidth: 3,
    // borderBottomColor: '#d81b60',
    paddingVertical:10,
    color: '#000',
    borderRadius: 10,
    paddingLeft: 10,
},
btn: {
    backgroundColor: '#3AB0FF',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 20,
},
btnTxt: {
    color: '#FFF'
},
bgContainer: {
    flex: 1,
    alignItems: 'center',
},
txtForgot : {
    marginTop: 20,
    marginLeft: 100,
    color: 'white',
    fontStyle: 'Underline'
}
});
