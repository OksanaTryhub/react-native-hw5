import React from 'react'
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';

const CommentsScreen = () => {
  const [comment, setComment] = useState('');
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
 
  const inputHandler = (value) => {
    setComment(value);
    console.log(comment)
  };
  
  const showKeyboard = () => {
    setIsShownKeyboard(true);
  }

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss()
  }

  const sendComment = () => {
    console.log('Send comment')
  }

  return (
    <TouchableWithoutFeedback onPress={() => keyboardHide()}>
      <View style={styles.container}>
        <View style={styles.placeholderImage}>
          <View style={styles.iconWrap}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </View>
        </View>
          

        <View style={styles.inputWrap}>
          <TextInput style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Комментировать..."
                  value={comment}
                  onChangeText={(value) => inputHandler(value)}
                  onFocus={()=>showKeyboard()}
          /> 
          <TouchableOpacity activeOpacity={0.7} onPress={() => {sendComment() }} >
            <Ionicons name="arrow-up-circle" style={styles.icon}/> 
          </TouchableOpacity>
              </View>
        
        
      </View>
    </TouchableWithoutFeedback>
    
  )
}

export default CommentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff'
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
  iconWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 60
  },
  inputWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    position: 'absolute',
    bottom: 0,
    width:'100%',
    height:50,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    bottom: 22,
    right:7,
    fontSize: 36,
    color:"#FF6C00" 
  },
  buttonTitle: {
    fontSize: 16,
    color: '#BDBDBD'
  },
  })