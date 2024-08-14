import {
	View,
  Text,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Block } from "@/models/Block";
import { useRealm } from "@realm/react";
import { List } from "realm";

export function BlockList({ data } : { data : List<Block> | undefined }) {

	const realm = useRealm();

  const renderItem = ({ item } : { item : Block}) => {
		return (
			<View
				style={{
					height:180,
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}>
					<View
						style={{
							width: "95%",
							height: "100%",
							backgroundColor: "white",
							elevation: 10,
							shadowOffset: { width: 1, height: 1 },
							shadowRadius: 3,
							shadowOpacity: 0.5,
						}}>
						<Text>{item.name}</Text>
						<Text>Top Depth: {item.topDepth}</Text>
						<Text>Bottom Depth: {item.bottomDepth}</Text>
						<TouchableOpacity 
							onPress={() => {
								realm.write(() => {
									realm.delete(item);
								});
							}}
							style={{
								borderRadius: 8,
								backgroundColor: "red",
								paddingLeft: 20,
								paddingRight: 20,
								paddingTop: 5,
								paddingBottom: 5,
								position: "absolute",
								left: 10,
								bottom: 10,
							}}>
							<Text style={{color: "white"}}>Delete</Text>
						</TouchableOpacity>
					</View>
			</View>
		);
	}
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item._id + ""}
		/>
	);
}