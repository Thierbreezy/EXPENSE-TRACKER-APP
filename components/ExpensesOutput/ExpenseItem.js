import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ id, description, amount, date }) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense', {
            expenseId: id
        });
    } 
    
    return (
        <Pressable 
            onPress={expensePressHandler} 
            style={({pressed})=> pressed && styles.pressed}
            android_ripple={{color: GlobalStyles.colors.primary100}}
            >
            <View style={styles.expenseItem}>
                <View >
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)} Fcfa</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
    },    
    amountContainer: {
        backgroundColor: GlobalStyles.colors.primary100,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    amount: {
        fontSize: 16,
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    }
});