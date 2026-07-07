import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

import { GlobalStyles } from "../../constants/styles";


function renderExpenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item} />
    );
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}   // très important !
            renderItem={renderExpenseItem}
        />
    );
}               

export default ExpensesList;
