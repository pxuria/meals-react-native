import CategoryScreen from "@/screens/CategoriesScreen";
import MealDetailsScreen from "@/screens/MealDetailsScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <>
            <StatusBar barStyle='light-content' />
            {/* <NavigationContainer> */}
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#3f2f25' }
            }}>
                <Stack.Screen
                    name="MealsCategories"
                    component={CategoryScreen}
                    options={{
                        title: 'All Categories'
                    }} />
                <Stack.Screen
                    name="MealsOverview"
                    component={MealsOverviewScreen}
                />
                <Stack.Screen
                    name="MealDetail"
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
            {/* </NavigationContainer> */}
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {}
// });