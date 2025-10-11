import CategoryGridTitle from '@/components/CategoryGridTitle';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(itemData: { item: { title: string; color: string; } }) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
}

function CategoryScreen() {
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem} />
}

export default CategoryScreen;