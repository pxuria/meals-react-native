import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { RootStackParamList } from "../../types/navigation";
import MealDetails from "../MealDetails";

interface Props {
    id: string;
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
}

type MealItemNavigationProp = NativeStackNavigationProp<RootStackParamList, "MealDetail">;

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }: Props) => {
    const navigation = useNavigation<MealItemNavigationProp>();

    const selectMealItemHandler = () => {
        navigation.navigate("MealDetail", { mealId: id });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                onPress={selectMealItemHandler}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: { margin: 16, borderRadius: 8, backgroundColor: "white", overflow: "hidden" },
    innerContainer: { borderRadius: 8, overflow: "hidden" },
    image: { width: "100%", height: 200 },
    title: { fontWeight: "bold", textAlign: "center", fontSize: 18, margin: 8 },
    buttonPressed: { opacity: 0.5 },
});