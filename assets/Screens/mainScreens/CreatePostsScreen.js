import React, {useState} from 'react'
 
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import { Asset } from "expo-asset";
import * as FileSystem from 'expo-file-system';

import { FontAwesome, Feather } from '@expo/vector-icons';

const initialState = {
  image: null,
  title: '',
  location: ''
}

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState)
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  
  const inputHandler = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
    };

   const showKeyboard = () => {
    setIsShownKeyboard(true);
  }
  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss()
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setState((prevState) => ({ ...prevState, image: uri }))
     }
  };

  const deleteImage = async () => {
    const { image } = state;
  if (image) {
    const asset = Asset.fromURI(image);
    const fileUri = asset.localUri || asset.uri;

    await FileSystem.deleteAsync(fileUri);
    setState((prevState) => ({ ...prevState, image: null }))
  }
  };

  const savePost = () => {
    console.log(state)
    setState(initialState)
  }
 
  return (
    <TouchableWithoutFeedback onPress={() => keyboardHide()}>
       <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''} keyboardVerticalOffset={100}>
      <ScrollView>    
        {state.image ? (
            <View style={styles.photoWrap}>{state.image && <Image source={{ uri: state.image }}style={styles.image} />}</View>
          ) : (
            <View style={styles.placeholderImage}>
              <View style={styles.iconWrap}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </View>
            </View>
          )}
        <TouchableOpacity activeOpacity={0.6} onPress={() => pickImage()}>
                {!state.image ? <Text style={styles.text}>Загрузите фото </Text> : <Text style={styles.text}> Редактировать фото </Text>}
        </TouchableOpacity>
        <View>
            <TextInput style={styles.input}
              placeholderTextColor={"#BDBDBD"}
                  placeholder="Название..."
                  value={state.title}
                  onChangeText={(value) => inputHandler('title', value)}
                  onFocus={()=>showKeyboard()}
          />
          <View style={styles.inputWrap}>
            <TouchableOpacity activeOpacity={0.7} >
              <Feather name="map-pin" size={18} color="#BDBDBD" style={styles.locationIcon} />
            </TouchableOpacity>
              <TextInput style={[styles.input, styles.inputLocation]}
                placeholderTextColor={"#BDBDBD"}
            placeholder="Местность..."
            value={state.location}
            onChangeText={(value) => inputHandler('location', value)}
            onFocus={()=>showKeyboard()}
          />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.buttonTitle} onPress={() => savePost() }>Опубликовать</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => deleteImage()} >
                 <Feather name="trash-2" size={24} style={styles.trashIcon }/>
          </TouchableOpacity>
        </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  
  )
}

export default CreatePostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff'
  },
  loadingPhoto: {
    width: '100%',
  },
  photoWrap: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom:8
  },
    image: {
    flex: 1,
    resizeMode: 'cover',
    
    },
  placeholderImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    backgroundColor: '#E8E8E8',
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom:32
  },
  iconWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 60
  },
  input: {
    height:50,
    paddingVertical: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  inputWrap: {
    position:'relative'
  },
  inputLocation: {
    paddingLeft: 28,
  },
  locationIcon: {
    position: 'absolute',
    top: 14,
    left: 0,
  },
    button: {
    height:50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
  },
  buttonTitle: {
    fontSize: 16,
    color: '#BDBDBD'
  },
  trashIcon: {
    width: 70,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: '#BDBDBD',        
    backgroundColor: "#F6F6F6",
    borderRadius: 20, 
  }
  })