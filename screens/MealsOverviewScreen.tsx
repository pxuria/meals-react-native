import MealsList from "@/components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(item => {
        return item.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === catId)?.title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});