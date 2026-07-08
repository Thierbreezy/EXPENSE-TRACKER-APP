import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Button } from "@react-navigation/elements";

function ErrorLoadingOverlay({message, onConfirm}){
    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]} >An error occured</Text>
        <Text style={[styles.text, styles.message]}>{message}</Text>
        <Button onPress={onConfirm}>Okey</Button>
    </View>
}

export default ErrorLoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        color: GlobalStyles.colors.primary700
    },
    test: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontStyle: 20,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
    }
});