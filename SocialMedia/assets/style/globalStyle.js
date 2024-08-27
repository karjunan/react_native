import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100},
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 6,
    color: '#FFFFFF',
  },
  messageList: {
    // backgroundColor: 'green',
    // width: '340',
    // height: 100,
    marginTop: 20,
    marginHorizontal: 28,
    // padding: 9,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default globalStyle;
