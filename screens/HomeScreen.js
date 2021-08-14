import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <SafeAreaView style={styles.androidSafeArea} />
            <ImageBackground source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
             <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                    <Image source = {require("../assets/main-icon.png")} style = {styles.mainIcon}>
                    </Image> 
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                       <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.specialText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
            </ImageBackground>
           </View>
        )
    }
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
 androidSafeArea: {
 marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
},
backgroundImage: {
flex: 1,
resizeMode: 'cover',
},
routeCard: {
       height : 60,
        width : 275,
        marginLeft: 35,
        marginRight: 50,
        marginTop: 25,
        borderRadius: 30,
        backgroundColor: 'white',        
},
titleBar: {
        flex: 0.75,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginTop : 110
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DE007D",
        marginTop: 15,
        paddingLeft: 78
    },
    iconImage: {
        position: "absolute",
        height: 75,
        width: 75,
        resizeMode: "contain",
        right: -10,
        top: -30
    },
    specialText : {
      fontSize: 20,
        fontWeight: "bold",
        color: "#DE007D",
        marginTop: 15,
        paddingLeft: 95
    },
    mainIcon : {
       position: "absolute",
        height: 150,
        width: 100,
        right: 117,
        top: -10
    },
    
})