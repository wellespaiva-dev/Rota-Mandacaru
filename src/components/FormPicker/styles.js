import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  styles: {
    inputIOS: {
      paddingRight: 30, // to ensure the text is never behind the icon
      fontSize: 16,
      backgroundColor: '#FCFCFC',
      minHeight: 46,
      color: '#000',
      paddingLeft: 18,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
    },
    inputAndroid: {
      paddingRight: 30, // to ensure the text is never behind the icon
      fontSize: 16,
      backgroundColor: '#FCFCFC',
      minHeight: 46,
      color: '#000',
      paddingLeft: 18,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
    },
    iconContainer: {
      position: 'absolute',
      width: 0,
      height: 0,
      top: 20,
      right: 30,
    },
    placeholder: {
      color: '#000',
    },
  },
})
