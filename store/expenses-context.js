import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
        { id: '1', description: "Courses", amount: 4500.50, date: new Date('2026-07-03') },
        { id: '2', description: "Essence", amount: 6500.00, date: new Date('2025-06-20') },
        { id: '3', description: "Restaurant", amount: 3200.75, date: new Date('2024-06-21') },
        { id: '4', description: "Santé", amount: 1400.45, date: new Date('2026-07-03') },
        { id: '5', description: "Shopping", amount: 1800.59, date: new Date('2024-05-10') },
        { id: '6', description: "Cours", amount: 3000.50, date: new Date('2025-05-10') },
        { id: '7', description: "Formation", amount: 4200.62, date: new Date('2026-07-07') },
        { id: '8', description: "Examen", amount: 320.76, date: new Date('2024-06-23') },
        { id: '9', description: "Gym", amount: 2900.67, date: new Date('2025-06-25') },
        { id: '10', description: "Shopping", amount: 1800.59, date: new Date('2026-07-05') },
        { id: '11', description: "Recherche", amount: 5200.00, date: new Date('2024-05-15') },
        { id: '12', description: "Reunion", amount: 3290.23, date: new Date('2024-05-18') },
    ];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    updateExpense: ({id, description, amount, date}) => {},
    deleteExpense: (id) => {}
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                    expense => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {

    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {data: expenseData, id: id}});
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;
