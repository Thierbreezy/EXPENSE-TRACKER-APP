import { View, TextInput, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function Input({label, textInputConfig, style}) {

    let inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig} />
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: GlobalStyles.colors.primary100,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        fontSize: 18,
        padding: 8,
        borderRadius: 6,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top",
    }
});