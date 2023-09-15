import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        backgroundColor: '#262626',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 8,
        padding: 12,
        marginLeft: 20,
        minHeight: 64,
    },
    text: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        marginRight: 4,
        marginLeft: 8,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    checkbox: {
        borderRadius: 10,
    }
});