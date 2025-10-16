import CategoryGridTitle from '@/components/CategoryGridTitle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: undefined;
};

type CategoryScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'MealsCategories'
>;

export type navigationProps = {
    navigation: CategoryScreenNavigationProp;
};

function CategoryScreen({ navigation }: navigationProps) {

    function renderCategoryItem(itemData: { item: { id: string; title: string; color: string; } }) {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        };

        return <CategoryGridTitle
            onPress={pressHandler}
            title={itemData.item.title}
            color={itemData.item.color} />
    }

    return <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem} />
}

export default CategoryScreen;