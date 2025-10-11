import { Pressable, Text, View } from "react-native";

interface Props {
    title: string;
    color: string;
}

const CategoryGridTitle = ({ title, color }: Props) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle