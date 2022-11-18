import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity,Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconicon from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  Title,
  Caption,
} from 'react-native-paper';


// const showAlert = () =>{
//   Alert.alert(
//     "Hổ trợ",
//     "SDT: 0987654321",
//     "Email:shopbook@gmail.com",
//     [
//       {
//         text: "Cancel",
//         onPress: () => Alert.alert("Cancel Pressed"),
//         style: "cancel",
//       },
//     ],

//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           "This alert was dismissed by tapping outside of the alert dialog."
//         ),
//     }
//   );
// }
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://img6.thuthuatphanmem.vn/uploads/2022/02/12/hinh-nen-sao-dem-tuyet-dep_052755541.jpg',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          backgroundColor: '#ffffff',
          // borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={[styles.infoBox, {
          backgroundColor: '#ffffff',
        }]}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HistoryBill")}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>History Bill</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText} >Support</Text>
          </View>
          <View style={{ marginLeft: 15, backgroundColor: '#ffffff', }}>
            <Text style={styles.menuItemText}>SDT: 0987654321</Text>
            <Text style={styles.menuItemText}>Email:shopbook@gmail.com</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.menuItem}>
            <Iconicon name="ios-settings-sharp" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>EditProfile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userInfoSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    //borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    //borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

})

// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// import AwesomeAlert from 'react-native-awesome-alerts';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { showAlert: false };
//   };

//   showAlert = () => {
//     this.setState({
//       showAlert: true
//     });
//   };

//   hideAlert = () => {
//     this.setState({
//       showAlert: false
//     });
//   };

//   render() {
//     const {showAlert} = this.state;

//     return (
//       <View style={styles.container}>

//         <Text>I'm AwesomeAlert</Text>
//         <TouchableOpacity onPress={() => {
//           this.showAlert();
//         }}>
//           <View style={styles.button}>
//             <Text style={styles.text}>Try me!</Text>
//           </View>
//         </TouchableOpacity>

//         <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="AwesomeAlert"
//           message="I have a message for you!"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={true}
//           showConfirmButton={true}
//           cancelText="No, cancel"
//           confirmText="Yes, delete it"
//           confirmButtonColor="#DD6B55"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
//       </View>
//     );
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   button: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 7,
//     borderRadius: 5,
//     backgroundColor: "#AEDEF4",
//   },
//   text: {
//     color: '#fff',
//     fontSize: 15
//   }
// });