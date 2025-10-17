import IconButton from "@/components/IconButton";
import List from "@/components/MealDetail/List";
import Subtitle from "@/components/MealDetail/Subtitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { addFavorite, removeFavorite } from "@/store/redux/favorites";
// import { FavoritesContext } from "@/store/context/favorites-context";
import { useCallback, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const MealDetailsScreen = ({ route, navigation }) => {
    // const ctx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find(item => item.id === mealId);
    // const isMealFavorite = ctx.ids.includes(mealId);
    const isMealFavorite = favoriteMealsIds.includes(mealId);

    const headerButtonPressHandler = useCallback(() => {
        if (isMealFavorite) {
            // ctx.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        }
        else {
            // ctx.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }, [dispatch, mealId, isMealFavorite]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isMealFavorite ? 'star' : 'star-outline'} color='white' onPress={headerButtonPressHandler} />
            }
        });
    }, [navigation, isMealFavorite, headerButtonPressHandler])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails
                duration={selectedMeal!.duration}
                complexity={selectedMeal!.complexity}
                affordability={selectedMeal!.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle title="Ingredients" />
                    <List data={selectedMeal?.ingredients} />

                    <Subtitle title="Steps" />
                    <List data={selectedMeal?.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
});