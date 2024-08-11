import { Link } from "expo-router";
import React from "react";
import { 
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Project } from "@/models/Project";
import { ProjectList } from "@/components/ProjectList";
import { useQuery, useRealm } from "@realm/react";
import { Icon } from "@rneui/themed";
import { BSON, List } from "realm";
import { VELOCITY_EPS } from "react-native-reanimated/lib/typescript/reanimated2/animation/decay/utils";
import { Block } from "@/models/Block";


export default function Index() {
  const title = "List of projects";

  const realm = useRealm();

  const [openNewProjectModal, setOpenNewProjectModal] = React.useState(false);
  const [newProjectName, setNewProjectName] = React.useState("");

  const renderNewProjectModal = () => {
    return (
      <Modal visible={openNewProjectModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <TouchableOpacity 
              onPress={ () => setOpenNewProjectModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}>
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>New Project Name: </Text>
            <TextInput
              style={{
                height: 30,
                borderWidth: 1,
                width: 260,
              }}
              onChangeText={setNewProjectName}
              value={newProjectName}
            />
            <TouchableOpacity
              onPress={ () => {
                realm.write(() => {
                  realm.create("Project", {
                    _id: new BSON.ObjectId(),
                    name: newProjectName,
                    blocks: [],
                  });
                });
                setOpenNewProjectModal(false);
              }}
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "green",
                padding: 10,
              }}>
              <Text style={{color: "white",}}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const projects = useQuery("Project");

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: "center", padding: 10}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{width: "100%", alignItems: "center"}}>
        <ProjectList data={projects}></ProjectList>
        <TouchableOpacity
          onPress={() => {
            setOpenNewProjectModal(true);
          }}
          style={{
            width: 180,
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "green",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          <Text style={{color: "white", textAlign: "center"}}>Create New Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            realm.write(() => {
              realm.deleteAll();
              realm.deleteModel("Project");
              realm.deleteModel("Block");
              console.log("Cleared Realm!");
            });
          }}
          style={{
            width: 180,
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "red",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          <Text style={{color: "white", textAlign: "center"}}>Clear Realm</Text>
        </TouchableOpacity>
      </View>
      {renderNewProjectModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

});