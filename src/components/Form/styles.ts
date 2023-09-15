import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    form: {
            width: '100%', 
            flexDirection: 'row',
            padding: 24,
            bottom: 50,
          },
    input: {
            flex: 1,
            height: 56,
            backgroundColor: '#262626',
            borderRadius: 5,
            color: '#ffff',
            padding: 16,
            fontSize: 16,
            marginRight: 12,
            borderColor: '#0D0D0D',
            borderWidth: 2,
          },
    button: {
            height: 56,
            width: 56,
            borderRadius: 5,
            backgroundColor: '#1E6F9F',
            justifyContent: 'center',
            alignItems: 'center',
          },
});