import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,Platform } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../../config/firebase';
import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import { async } from '@firebase/util';
import { createBook } from '../../../redux/actions/bookAction';
const CreateBook = ({ navigation }) => {
  const dispatch = useDispatch();

  // // const tags = useSelector((state) => state.tag.tags);

  const [id, setId] = useState(0)
  const [nameBook, setNameBook] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState(0)
  const [descriptionBook, setDescriptionBook] = useState("")
  // const [photoBook, setPhotoBook] = useState("")

  const handleAddBook = () => {
    // let newBook=
    // spy-x-family-tap-1
    dispatch(createBook({
      id: parseInt(id),
      nameBook: nameBook,
      //category: action.payload.category,
      author:author,
      price: parseInt(price),
      descriptionBook:descriptionBook,
      photoBook: photoBook,

    }));
    // navigation.goBack()
    // console.log(newBook)
  }
  const handleCancel = () => {
    // dispatch(createTag({id:parseInt(id),name:name}));
    navigation.goBack()
    // console.log(tags)
  }
  const [selectedImage, setSelectedImage] = useState({ localUri: 'https://firebasestorage.googleapis.com/v0/b/testrn-937cc.appspot.com/o/1.jpg?alt=media&token=c811e8cc-353c-4121-94a4-eb4d089ecf42' });
    const openImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({ base64: true })
        if (result.cancelled)
            return;
        // console.log(result)
        let uri = result.uri;
        setSelectedImage({ localUri: result.uri })
        if (Platform.OS === 'web') {
            let base64code = result.base64;
            //upload 
            await uploadBase64(base64code)
        } else {
            //device
            let uri = result.uri;
            console.log(uri)
            //step 1 -> convert uri --> blob
            const blobfile = await convertURI2BlobFile(uri)
            console.log(blobfile)
            //step 2 -> upload to cloud 
            await uploadfile(blobfile);


        }

    }
    const convertURI2BlobFile = async (uri) => {
        const result = await new Promise( (resolve, reject) => {
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.onload = function() {
               resolve( xmlRequest.response);

            }
            xmlRequest.onerror = function(){
                console.log("error here")
            }

            xmlRequest.responseType="blob";
            xmlRequest.open("GET", uri, true);
            xmlRequest.send(null)
        })
        return result;
    }

    const uploadfile = async (blobfile) => {
        let imgname = 'img-android-' + new Date().getTime();
        let storage = getStorage();
        let storageRef = ref(storage, `images/${imgname}.jpg`);
        let metadata = {
            contentType: 'image/jpeg'
        }
        const uploadTask = uploadBytesResumable(storageRef, blobfile, metadata)
        uploadTask.on('state_changed',
            (snapshot) => { },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('downloadURL', downloadURL)
                }
                )
            }
        )
    }

    const uploadBase64 = async (base64code) => {
        let imgname = 'img' + new Date().getTime();
        //step 2
        let storage = getStorage();
        let storageRef = ref(storage, `images/${imgname}.jpg`);
        let metadata = {
            contentType: 'image/jpeg'
        }
        uploadString(storageRef, base64code, 'base64', metadata)
            .then((snapshot) => {

                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log('downloadURL', downloadURL)
                }
                )
            }
            )
    }
  return (
    <View style={styles.CRUDContainer}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder="ID" 
          style={styles.inputText}
          onChangeText={(id)=>setId(id)} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Name" style={styles.inputText}
          onChangeText={(nameBook)=>setNameBook(nameBook)} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Author" style={styles.inputText} 
            onChangeText={(author)=>setAuthor(author)}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput placeholder="Image" style={styles.inputText}
          onChangeText={(photoBook)=>setPhotoBook(photoBook)} />
        </View> */}
        <View style={styles.inputContainer}>
            <Image source={{ uri: selectedImage.localUri }}
                style={styles.img} />
            <TouchableOpacity style={styles.btn} onPress={openImage}>
                <Text style={styles.btnTextx}>Chosse Image</Text>
            </TouchableOpacity>
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput placeholder="Category" style={styles.inputText} />
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Description" style={styles.inputText}
          onChangeText={(descriptionBook)=>setDescriptionBook(descriptionBook)} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Price" style={styles.inputText} 
            onChangeText={(price)=>setPrice(price)}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSubmit} onPress={()=>handleAddBook()}>
            <Text style={styles.btnText}>Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancel} onPress={()=>handleCancel()}>
            <Text style={styles.btnText}>Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CreateBook

const styles = StyleSheet.create({
  CRUDContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
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
  btnTextx: {
    color: "#000",
  },
  btnContainer: {
    marginTop: 20,
    // marginRight:60,
    width: "70%",
    flexDirection: 'row',
    //backgroundColor: 'red',
    //justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 200,
    margin: 10,
  },
})