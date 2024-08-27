import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

const MessageList = props => {
  // const image = props.profileImage;
  // const result = `uri:'http://localhost:8081/${image}'`;
  // console.log(result);
  return (
    <View style={style.outerContainer}>
      <View style={style.listIcon}>
        <Image
          source={{
            uri: 'http://localhost:8081/assets/images/default_profile.png',
          }}
          style={style.innerIcon}
        />
      </View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default MessageList;

// return (
//   <View>
//     <Image
//       source={require('../../assets/images/default_profile.png')}
//       style={{width: 100, height: 100}} // Make sure to set width and height
//     />
//     {/* <Text>{props.name}</Text> */}
//   </View>
// );
// };
// {
/* <View style={style.listIcon}></View>
<Text>{props.name}</Text> */
// }

// <View style={style.outerContainer}>
// <View style={style.listIcon}>
// {/* <View style={style.innerIcon}></View> */}
// </View>
// <Text>{props.name}</Text>
// </View>
//   return (
//     <View>
//       <Image source={props.profileImage} style={{width: 100, height: 100}} />
//     </View>
//   );
// };
