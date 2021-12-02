import {StyleSheet} from 'react-native';
export const myContainersStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  ButtonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 5,
    shadowOffset: {width: 100, height: 100},
    borderRadius: 3,
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
