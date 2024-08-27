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
import UserPosts from './components/UserPosts/UserPosts'
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

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1200,
      comments: 24, 
      bookmarks: 55, 
      id: 1
    },
    {
      firstName: 'krishna',
      lastName: 'kumar',
      location: 'Coimbatore, TN',
      likes: 100,
      comments: 29, 
      bookmarks: 89, 
      id: 2,
    },
    {
      firstName: 'Ram',
      lastName: 'Ram',
      location: 'Gerogia, MA',
      likes: 12,
      comments: 2, 
      bookmarks: 5, 
      id: 3,
    },
    {
      firstName: 'Harish',
      lastName: 'Ragav',
      location: 'Boston, MA',
      likes: 120,
      comments: 40, 
      bookmarks: 550, 
      id: 4
    },
    {
      firstName: 'Unni',
      lastName: 'Mukund',
      location: 'San jose, CA',
      likes: 1500,
      comments: 240, 
      bookmarks: 53, 
      id: 5
    },
    {
      firstName: 'Hector',
      lastName: 'Richord',
      location: 'Richmond, CA',
      likes: 110,
      comments: 214, 
      bookmarks: 515, 
      id: 6
    },

  ]
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

      <View style={globalStyle.userPostOuterContainer}>
      <FlatList
          horizontal={false}
          data={userPosts}
          renderItem={({item}) => (
            <UserPosts firstName={item.firstName} 
            lastName = {item.lastName} 
            location = {item.location} 
            likes = {item.likes}
            comments = {item.comments}
            bookmarks = {item.bookmarks}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
