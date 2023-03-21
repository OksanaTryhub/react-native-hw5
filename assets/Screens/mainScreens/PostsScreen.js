import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.avatarImage } />
        <View>
          <Text style={styles.name}> Natali Romanova </Text>
          <Text style={styles.email}> email@example.com </Text>
        </View>
      </View>
    </View>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 32,
    paddingHorizontal: 16
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 16,
    marginRight:8
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13
  },
  email: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11
  }
})
  
