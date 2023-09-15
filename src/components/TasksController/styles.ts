import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTaskController: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    bottom: 60,
  },
  createdTasksText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  doneTasksText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8284FA',
  },
  counterCointaner: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
  },
  counterBackground: {
    backgroundColor: '#333333', // Circle background color
    borderRadius: 50, // Make it circular
    width: 32, // Adjust the width and height as needed
    height: 24,
    alignItems: 'center', // Center the text inside the circle
    justifyContent: 'center',
    marginLeft: 8,
  },
  circle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: 'red', // Color of the circle
  },
  counter: {
    color: 'white', // Color of the number
    fontWeight: 'bold',
  },
  line: {
    height: 1, // Adjust the height of the line (thickness) as needed
    width: '90%', // Adjust the width of the line (length) as needed
    backgroundColor: '#333333', // Color of the line
    bottom: 60,
    marginLeft: 22,
  },
});