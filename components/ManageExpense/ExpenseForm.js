import { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {

    const [inputs, setInputs] = useState({
        amount: { 
                value: defaultValues ? defaultValues.amount.toString() : "",
                isValid: true,
            },
        date: { 
                value: defaultValues ? getFormattedDate(defaultValues.date) : "",
                 isValid: true,
            },
        description: { 
                value: defaultValues ? defaultValues.description : "", 
                isValid: true,
            }
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs(curInputs => ({
            ...curInputs,
            [inputIdentifier]: { ...curInputs[inputIdentifier], value: enteredValue, isValid: true }
        }));
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = 
            expenseData.date.toString() !== "Invalid Date" &&
            expenseData.date <= new Date(new Date().toDateString());
        const descriptionIsValid = expenseData.description.trim().length > 0;
        
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Show an alert or some error message
            {/*Alert.alert(
                "Invalid input",
                "Please check your input values. Amount must be a positive number, date must be valid and not in the future, and description must not be empty."
            );*/}
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: { value: curInputs.date.value, isValid: dateIsValid },    
                    description: { value: curInputs.description.value, isValid: descriptionIsValid }
                };
            }
            );
            return;
        }
        onSubmit(expenseData);
    }

    const formIsInvalid = 
        !inputs.amount.isValid || 
        !inputs.date.isValid || 
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    label="Amount" 
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                     placeholder: "Amount",
                     keyboardType: "decimal-pad",
                     onChangeText: inputChangedHandler.bind(this, "amount"),
                     value: inputs.amount.value
                    }} />
                <Input 
                    style={styles.rowInput}
                    label="Date" 
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, "date"),
                        value: inputs.date.value
                    }} />
            </View>
            <Input 
                label="Description" 
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    placeholder: "Description",
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, "description"),
                    value: inputs.description.value
                }} />
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}
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
    errorText: {
        color: GlobalStyles.colors.error500,
        textAlign: "center",
        marginTop: 8,
    }
});