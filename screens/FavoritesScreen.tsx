import MealsList from "@/components/MealsList/MealsList";
import { MEALS } from "@/data/dummy-data";
// import { FavoritesContext } from "@/store/context/favorites-context";
// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
    // const ctx = useContext(FavoritesContext);
    const favoritedMealsIds = useSelector(state => state.favoriteMeals.ids)
    // const favoritedMeals = MEALS.filter(meal => ctx.ids.includes(meal.id));
    const favoritedMeals = MEALS.filter(meal => favoritedMealsIds.includes(meal.id));

    if (favoritedMeals.length === 0) {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>You have no favorited meals yet.</Text>
            </View>
        )
    }

    return <MealsList items={favoritedMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});