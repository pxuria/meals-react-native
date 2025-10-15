import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meals overview screen</Text>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});