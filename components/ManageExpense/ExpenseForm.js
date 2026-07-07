import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {

    const [inputValues, setInputValues] = useState({
        amount: "",
        date: "",
        description: ""
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues(curinputValues => ({
            ...curinputValues,
            [inputIdentifier]: enteredValue
        }));
    }

    function submitHandler() {}

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    label="Amount" 
                    textInputConfig={{
                     placeholder: "Amount",
                     keyboardType: "decimal-pad",
                     onChangeText: inputChangedHandler.bind(this, "amount"),
                     value: inputValues.amount
                    }} />
                <Input 
                    style={styles.rowInput}
                    label="Date" textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, "date"),
                        value: inputValues.date
                    }} />
            </View>
            <Input 
                label="Description" textInputConfig={{
                    placeholder: "Description",
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, "description"),
                    value: inputValues.description
                }} />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    <Text>Cancel</Text>
                </Button>            
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>        
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "white",
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});