import { View, TextInput, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function Input({label, textInputConfig, style, invalid}) {

    let inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    if(invalid){
        inputStyles.push(styles.invalidInput);
    }

    return <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
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
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50,
        borderColor: GlobalStyles.colors.error500,
        borderWidth: 1,
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500,
    }
});