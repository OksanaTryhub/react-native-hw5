import React from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "./assets/Screens/authScreens/LoginScreen";
import RegistrationScreen from "./assets/Screens/authScreens/RegistrationScreen";
// import PostsScreen from './assets/Screens/mainScreens/PostsScreen';
// import CreatePostsScreen from './assets/Screens/mainScreens/CreatePostsScreen';
// import ProfileScreen from './assets/Screens/mainScreens/ProfileScreen';

// import { Feather } from '@expo/vector-icons'; 
// import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './assets/Screens/mainScreens/HomeScreen';


const MainStack = createStackNavigator()
// const MainTab = createBottomTabNavigator();

const useRoute = (isLoggedIn) => {
 
    if (!isLoggedIn) {
        return (
        <MainStack.Navigator initialRouteName="Login"> 
            <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} /> 
                <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>
        )
        
    }

    return (
        <MainStack.Navigator >  
            <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>

        // <MainTab.Navigator screenOptions={{tabBarShowLabel:false}}>
        //     <MainTab.Screen name="Posts"
        //         component={PostsScreen}
        //         options={{
        //             headerTitle: 'Публикации',
        //             headerTitleAlign: 'center',
        //             headerTintColor: '#212121',
        //             headerRight: () => (
        //                 <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ marginRight: 16 }}>
        //                     <Feather name="log-out" size={24} color='#BDBDBD' />
        //                 </TouchableOpacity>
        //             ),
        //             tabBarIcon: ({ focused, size, color }) => (<Feather name="grid" size={size} style={focused ? styles.focused : '#212121'} />)
        //         }} />
        //     <MainTab.Screen name="CreatePost"
        //         component={CreatePostsScreen}
        //         options={{
        //             headerTitle: 'Создать публикацию',
        //             headerTitleAlign: 'center',
        //             headerTintColor: '#212121',
        //             headerLeft: () => (
        //                 <TouchableOpacity onPress={() => navigation.navigate("Posts")} style={{ marginLeft: 16 }}>
        //                     <Feather name="arrow-left" size={24} color='#212121' />
        //                 </TouchableOpacity>
        //             ),
        //             tabBarIcon: ({ focused, size, color }) => (<AntDesign name="plus" size={18} style={focused ? styles.focused : '#212121'} />)
        //     }} />
        //     <MainTab.Screen name="Profile"
        //         component={ProfileScreen}
        //         options={{
        //             headerShown: false,
        //             tabBarIcon: ({ focused, size, color }) => (<Feather name="user" size={size} style={focused ? styles.focused : '#212121'} />)
        //         }} />
        // </MainTab.Navigator>
    )
}

export default useRoute

const styles = StyleSheet.create({
    focused: {
        width: 70,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        color: '#ffffff',        
        backgroundColor: "#FF6C00",
        borderRadius: 20
    }
})