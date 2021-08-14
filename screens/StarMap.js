import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
longitude : {},
latitude : {}
    }
  }
    render() {
      const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1a0023" 
                }}>
                <SafeAreaView style={styles.androidSafeArea} />
                 <Text style={styles.titleText}>Star Map</Text>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                    <Image source = {require("../assets/stellar.jpg")} style = {styles.backImage}>
                    </Image> 
                    </TouchableOpacity>   
     <TextInput
            style={styles.inputStyle}
            placeholder="Enter your longitude"
            placeholderTextColor="white"
           onChangeText = {(text) => {
             this.setState = ({
               longitude : text
             })
           }}
          />  

         <TextInput
            style={styles.inputStyle}
            placeholder="Enter your latitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState = ({
                latitude : text,
              })
            }}
          />
          <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20, }}
        />                                
            </View>           
        );
    }
}

const styles = StyleSheet.create({
  backImage : {     
        height: 40,
        width: 40,
        right: 140,
        top: -225
    },
   androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    width: 200
  }
})