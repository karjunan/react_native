import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import { Text, View, Image } from "react-native";
import style from './style'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faHeart,
    faCommenting,
    faBookmark,
    faMinus
  } from '@fortawesome/free-solid-svg-icons';
const UserPosts = (props) => {

    return (
        <View>
            <View style= {{flexDirection:'row'}}>
                <View style={style.listIcon}>
                    <Image
                    source={{
                    uri: 'http://localhost:8081/assets/images/default_profile.png',
                    }}
                    style={style.innerIcon}
                    />
                    
                </View> 
                <View>
                    <Text style={{fontFamily: 'Inter', fontWeight:'600', fontSize:16}}>{props.firstName}  {props.lastName}</Text>
                    <Text style={{fontFamily: 'Inter', fontWeight:'200', fontSize:12}}>{props.location}</Text>
                </View>
            </View>
            
            <Image
            source={{
            uri: 'http://localhost:8081/assets/images/default_post.png',
          }}
          style={{width:290, height: 220 , borderRadius: 15, marginTop:20}}
        />
        <View style={{flexDirection:'row',alignItems:'center', marginTop: 16}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <FontAwesomeIcon icon={faHeart} />
            <Text style={{marginLeft:3}}>{props.likes} </Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginLeft: 20}}>
            <FontAwesomeIcon icon={faCommenting} />
            <Text style={{marginLeft:3}}>{props.comments} </Text>
         </View>
         <View style={{flexDirection:'row', alignItems:'center', marginLeft: 20}}>
            <FontAwesomeIcon icon={faBookmark} /> 
            <Text style={{marginLeft:3}}> {props.bookmarks}</Text>
          </View>
         </View>
         <View style={{padding:20, flexDirection:'row', fontWeight: 20}}>
         {/* <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} /> 
         <FontAwesomeIcon icon={faMinus} />  */}
         </View>
        </View>

    )
}

export default UserPosts;


// <Text>{props.firstName}  {props.lastName}</Text>
// 