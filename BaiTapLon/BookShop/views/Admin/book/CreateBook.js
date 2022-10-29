import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../../../redux/actions/bookAction';
const CreateBook = ({ navigation }) => {
  const dispatch = useDispatch();

  // // const tags = useSelector((state) => state.tag.tags);

  const [id, setId] = useState(0)
  const [nameBook, setNameBook] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState(0)
  const [descriptionBook, setDescriptionBook] = useState("")
  const [photoBook, setPhotoBook] = useState("")

  const handleAddBook = () => {
    // let newBook=
    // spy-x-family-tap-1
    dispatch(createBook({
      id: parseInt(id),
      nameBook: nameBook,
      // category: action.payload.category,
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
        <View style={styles.inputContainer}>
          <TextInput placeholder="Image" style={styles.inputText}
          onChangeText={(photoBook)=>setPhotoBook(photoBook)} />
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
  btnContainer: {
    marginTop: 20,
    // marginRight:60,
    width: "70%",
    flexDirection: 'row',
    //backgroundColor: 'red',
    //justifyContent: 'space-between',
  }
})