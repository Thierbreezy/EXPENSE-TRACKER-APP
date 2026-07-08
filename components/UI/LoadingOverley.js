import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function LoadingOverley(){
    return <View style={styles.container}>
        <ActivityIndicator size="large" color="white"/>
    </View>
}

export default LoadingOverley;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        color: GlobalStyles.colors.primary700
    }
});