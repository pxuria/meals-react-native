import CategoryScreen from "@/screens/CategoriesScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            {/* <NavigationContainer> */}
            <Stack.Navigator>
                <Stack.Screen name="MealsCategories" component={CategoryScreen} />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            </Stack.Navigator>
            {/* </NavigationContainer> */}
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {}
// });