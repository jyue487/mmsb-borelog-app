import {
	View,
  Text,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useRealm } from "@realm/react";
import { Link } from "expo-router";

export function ProjectList({ data } : any) {

	// const realm = useRealm();

  const renderItem = ({ item } : any) => {
		return (
      <Link href={`/${item._id}`} asChild>
        <TouchableOpacity 
          style={{
            width: 350,
            height: 100,
            marginBottom: 10,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
          }}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.name}</Text>
          
        </TouchableOpacity>
      </Link>
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