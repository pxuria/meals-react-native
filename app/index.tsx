import CategoryScreen from "@/screens/CategoriesScreen";
import FavoritesScreen from "@/screens/FavoritesScreen";
import MealDetailsScreen from "@/screens/MealDetailsScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            sceneStyle: { backgroundColor: '#3f2f25' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1'
        }}>
            <Drawer.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
                }} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
                drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
            }} />
        </Drawer.Navigator>
    )
}

export default function HomeScreen() {
    return (
        <>
            <StatusBar barStyle='light-content' />
            {/* <NavigationContainer> */}
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#3f2f25' }
                }}>
                <Stack.Screen
                    name="Drawer"
                    component={DrawerNavigator}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name="MealsOverview"
                    component={MealsOverviewScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailsScreen} options={{ title: 'About the Meal' }} />
            </Stack.Navigator>
            {/* </NavigationContainer> */}
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {}
// });