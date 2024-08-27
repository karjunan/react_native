import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faEnvelopeCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/style/globalStyle';
import MessageList from './components/messageList/MessageList';

const App = () => {
  const userStories = [
    {
      id: 1,
      name: 'Joseph',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 2,
      name: 'Angel',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 3,
      name: 'White',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 4,
      name: 'Oliver',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 5,
      name: 'Krishna',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 6,
      name: 'Kumar',
      profileImage: 'assets/images/default_profile.png',
    },
    {
      id: 7,
      name: 'Test',
      profileImage: 'assets/images/default_profile.png',
    },
  ];
  const renderItem = ({item}) => {
    // console.log(item.name, item.image);
    return <MessageList name={item.name} profileImage={item.image} />;
  };
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={`Let's Explore`}></Title>
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.messageList}>
        <FlatList
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <MessageList profileImage={item.profileImage} name={item.name} />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
