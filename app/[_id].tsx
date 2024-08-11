import React from "react";
import { 
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput
} from "react-native";

import { Icon } from "@rneui/themed";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import "react-native-get-random-values";

import Realm, { BSON } from "realm";

import { useObject, useQuery, useRealm } from '@realm/react';

import { BlockList } from '@/components/BlockList';
import { Stack, useLocalSearchParams } from "expo-router";
import { Project } from "@/models/Project";
import { Block } from "@/models/Block";


export default function Details() {

  const params = useLocalSearchParams();

  const [openSptModal, setOpenSptModal] = React.useState(false);
  const [openUdModal, setOpenUdModal] = React.useState(false);
  const [openRockModal, setOpenRockModal] = React.useState(false);
  const [openPermeabilityTestModal, setOpenPermeabilityTestModal] = React.useState(false);
  const [openLugeonTestModal, setOpenLugeonTestModal] = React.useState(false);
  const [openPressuremeterTestModal, setOpenPressuremeterTestModal] = React.useState(false);
  const [openVaneShearTestModal, setOpenVaneShearTestModal] = React.useState(false);
  const [openTeleviewerModal, setOpenTeleviewerModal] = React.useState(false);

  const realm = useRealm();

  function renderSptModal() {
    const [topDepth, setTopDepth] = React.useState("");
    const [bottomDepth, setBottomDepth] = React.useState("");
    const [disturbedSampleNumber, setDisturbedSampleNumber] = React.useState("");
    const [penetrationTestNumber, setPenetrationTestNumber] = React.useState("");
    const [a, setA] = React.useState(-1);
    const [b, setB] = React.useState(-1);
    const [c, setC] = React.useState(-1);
    const [d, setD] = React.useState(-1);
    const [e, setE] = React.useState(-1);
    const [f, setF] = React.useState(-1);
    const [a2, setA2] = React.useState(-1);
    const [b2, setB2] = React.useState(-1);
    const [c2, setC2] = React.useState(-1);
    const [d2, setD2] = React.useState(-1);
    const [e2, setE2] = React.useState(-1);
    const [f2, setF2] = React.useState(-1);
    const [aIsActive, setAIsActive] = React.useState(true);
    const [bIsActive, setBIsActive] = React.useState(false);
    const [cIsActive, setCIsActive] = React.useState(false);
    const [dIsActive, setDIsActive] = React.useState(false);
    const [eIsActive, setEIsActive] = React.useState(false);
    const [fIsActive, setFIsActive] = React.useState(false);
    const [a2IsActive, setA2IsActive] = React.useState(false);
    const [b2IsActive, setB2IsActive] = React.useState(false);
    const [c2IsActive, setC2IsActive] = React.useState(false);
    const [d2IsActive, setD2IsActive] = React.useState(false);
    const [e2IsActive, setE2IsActive] = React.useState(false);
    const [f2IsActive, setF2IsActive] = React.useState(false);
    const [primaryColour, setPrimaryColour] = React.useState("");
    const [secondaryColour, setSecondaryColour] = React.useState("");
    const [soilPropertyIntensity, setSoilPropertyIntensity] = React.useState("-");
    const [soilType, setSoilType] = React.useState("");
    const [soilPropertyPreposition, setSoilPropertyPreposition] = React.useState("-");
    const [soilAdditionalProperties, setSoilAdditionalProperties] = React.useState("");
    const [recovery, setRecovery] = React.useState(-1);

    return (
      <Modal visible={openSptModal} transparent={true}>
        <MenuProvider skipInstanceCheck={true}>
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
                paddingLeft: 15,
                paddingTop: 15,
                paddingRight: 15,
                paddingBottom: 70,
                width: "95%",
                height: "80%",
                borderRadius: 10,
                alignItems: "center",
              }}>
              <TouchableOpacity 
                onPress={ () => setOpenSptModal(false)}
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
              <View style={styles.operationHeadingsContainer}>
                <Text style={styles.operationHeadingsTitle}>
                  Standard Penetration Test (SPT)
                </Text>
              </View>

              <View style={styles.operationDescriptionsContainer}>
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                  <View style={{paddingBottom: 10}}>
                    <Text>Top Depth (meter): </Text>
                    <TextInput
                      style={{
                        height: 30,
                        borderWidth: 1,
                      }}
                      keyboardType="numeric"
                      onChangeText={setTopDepth}
                      value={topDepth}
                    />
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Bottom Depth (meter): </Text>
                    <TextInput
                      editable={false}
                      selectTextOnFocus={false}
                      style={{
                        height: 30,
                        borderWidth: 1,
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      }}
                      keyboardType="numeric"
                      onChangeText={setBottomDepth}
                      value={bottomDepth}
                      placeholder="Auto"
                      placeholderTextColor={"rgba(0, 0, 0, 0.2)"}
                    />
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Disturbed Sample Number: </Text>
                    <TextInput
                      style={{
                        height: 30,
                        borderWidth: 1,
                      }}
                      keyboardType="numeric"
                      onChangeText={setDisturbedSampleNumber}
                      value={disturbedSampleNumber}
                    />
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Penetration Test Number: </Text>
                    <TextInput
                      style={{
                        height: 30,
                        borderWidth: 1,
                      }}
                      keyboardType="numeric"
                      onChangeText={setPenetrationTestNumber}
                      value={penetrationTestNumber}
                    />
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>SPT (N): </Text>
                    <View 
                      style={{
                        flex:1,
                        width: "100%",
                        flexDirection: "row",
                      }}>
                      <View
                        style={{
                          // backgroundColor: "blue",
                          width: "33%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <Text>Seating Drive:</Text>
                        <View style={{flexDirection: "row"}}>
                          {/* a */}
                          <View style={{alignItems: "center", width: "50%"}}>
                            <TextInput
                              editable={aIsActive}
                              selectTextOnFocus={aIsActive}
                              style={(aIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={ (input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedSeatingDriveValue = inputVal;
                                      if (accumulatedSeatingDriveValue < 25) {
                                        setA(inputVal);
                                        setA2(75);
                                        setA2IsActive(false);
                                        setB(-1);
                                        setBIsActive(true);
                                        setB2(-1);
                                        setB2IsActive(false);
                                      } else if (accumulatedSeatingDriveValue == 25) {
                                        setA(inputVal);
                                        setA2(-1);
                                        setA2IsActive(true);
                                        setB(-1);
                                        setBIsActive(false);
                                        setB2(-1);
                                        setB2IsActive(false);
                                      } else {
                                        setA(-1);
                                        setA2(-1);
                                        setA2IsActive(false);
                                        setB(-1);
                                        setBIsActive(false);
                                        setB2(-1);
                                        setB2IsActive(false);
                                        alert("Seating drive should not exceed 25 blows");
                                      }
                                    } else {

                                    }
                                  } else {

                                  }
                                } else {
                                  setA(-1);
                                  setAIsActive(true);
                                  setA2(-1);
                                  setA2IsActive(false);
                                  setBIsActive(false);
                                }
                              }}
                              value={(a < 0) ? "" : (a.toString())}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={a2IsActive}
                              selectTextOnFocus={a2IsActive}
                              style={(a2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setA2(inputVal);
                                        setC(-1);
                                        setCIsActive(true);
                                      } else {
                                        setA2(-1);
                                        setC(-1);
                                        setCIsActive(false);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setA2(-1);
                                  setC(-1);
                                  setCIsActive(false);
                                }
                              }}
                              value={(a2 < 0) ? "" : a2.toString()}
                            />
                            <Text>mm</Text>
                          </View>

                          {/* b */}
                          <View style={{alignItems: "center", width: "50%"}}>
                            <TextInput
                              editable={bIsActive}
                              selectTextOnFocus={bIsActive}
                              style={(bIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedSeatingDriveValue = a + inputVal;
                                      if (accumulatedSeatingDriveValue < 25) {
                                        setAIsActive(false);
                                        setB(inputVal);
                                        setB2(75);
                                        setB2IsActive(false);
                                        setC(-1);
                                        setCIsActive(true);
                                      } else if (accumulatedSeatingDriveValue == 25) {
                                        setAIsActive(false);
                                        setB(inputVal);
                                        setB2(-1);
                                        setB2IsActive(true);
                                        setC(-1);
                                        setCIsActive(false);
                                      } else {
                                        setAIsActive(true);
                                        setB(-1);
                                        setB2(-1);
                                        setB2IsActive(false);
                                        setC(-1);
                                        setCIsActive(false);
                                        alert("Seating drive should not exceed 25 blows");
                                      }
                                    }
                                  }
                                } else {
                                  setAIsActive(true);
                                  setB(-1);
                                  setB2(-1);
                                  setB2IsActive(false);
                                  setC(-1);
                                  setCIsActive(false);
                                }
                              }}
                              value={(b < 0) ? "" : b.toString()}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={b2IsActive}
                              selectTextOnFocus={b2IsActive}
                              style={(b2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setB2(inputVal);
                                        setC(-1);
                                        setCIsActive(true);
                                      } else {
                                        setB2(-1);
                                        setC(-1);
                                        setCIsActive(false);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setB2(-1);
                                  setC(-1);
                                  setCIsActive(false);
                                }
                              }}
                              value={(b2 < 0) ? "" : b2.toString()}
                            />
                            <Text>mm</Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          // backgroundColor: "red",
                          borderLeftWidth: 1,
                          width: "66%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <Text>Test Drive:</Text>
                        <View style={{flexDirection: "row"}}>
                          {/* c */}
                          <View style={{alignItems: "center", width: "25%"}}>
                            <TextInput
                              editable={cIsActive}
                              selectTextOnFocus={cIsActive}
                              style={(cIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedTestDriveValue = inputVal;
                                      if (accumulatedTestDriveValue < 50) {
                                        setAIsActive(false);
                                        setA2IsActive(false);
                                        setBIsActive(false);
                                        setB2IsActive(false);
                                        setC(inputVal);
                                        setC2(75);
                                        setC2IsActive(false);
                                        setD(-1);
                                        setDIsActive(true);
                                      } else if (accumulatedTestDriveValue == 50) {
                                        setAIsActive(false);
                                        setA2IsActive(false);
                                        setBIsActive(false);
                                        setB2IsActive(false);
                                        setC(inputVal);
                                        setC2(-1);
                                        setC2IsActive(true);
                                        setD(-1);
                                        setDIsActive(false);
                                      } else {
                                        if (b < 0) {
                                          setAIsActive(true);
                                          if (a == 25) {
                                            setA2IsActive(true);
                                          }
                                        } else {
                                          setBIsActive(true);
                                          if (a + b == 25) {
                                            setB2IsActive(true);
                                          }
                                        }
                                        setC(-1);
                                        setC2(-1);
                                        setC2IsActive(false);
                                        alert("Test drive should not exceed 50 blows");
                                      }
                                    }
                                  }
                                } else {
                                  if (b < 0) {
                                    setAIsActive(true);
                                    if (a == 25) {
                                      setA2IsActive(true);
                                    }
                                  } else {
                                    setBIsActive(true);
                                    if (a + b == 25) {
                                      setB2IsActive(true);
                                    }
                                  }
                                  setC(-1);
                                  setCIsActive(true);
                                  setC2(-1);
                                  setC2IsActive(false);
                                  setDIsActive(false);
                                }
                              }}
                              value={(c < 0) ? "" : c.toString()}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={c2IsActive}
                              selectTextOnFocus={c2IsActive}
                              style={(c2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setC2(inputVal);
                                        setD(-1);
                                        setDIsActive(false);
                                      } else {
                                        setC2(-1);
                                        setD(-1);
                                        setDIsActive(false);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setC2(-1);
                                  setD(-1);
                                  setDIsActive(false);
                                }
                              }}
                              value={(c2 < 0) ? "" : c2.toString()}
                            />
                            <Text>mm</Text>
                          </View>

                          {/* d */}
                          <View style={{alignItems: "center", width: "25%"}}>
                            <TextInput
                              editable={dIsActive}
                              selectTextOnFocus={dIsActive}
                              style={(dIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedTestDriveValue = c + inputVal;
                                      if (accumulatedTestDriveValue < 50) {
                                        setCIsActive(false);
                                        setD(inputVal);
                                        setD2(75);
                                        setD2IsActive(false);
                                        setE(-1);
                                        setEIsActive(true);
                                      } else if (accumulatedTestDriveValue == 50) {
                                        setCIsActive(false);
                                        setD(inputVal);
                                        setD2(-1);
                                        setD2IsActive(true);
                                        setE(-1);
                                        setEIsActive(false);
                                      } else {
                                        setCIsActive(true);
                                        setD(-1);
                                        setD2(-1);
                                        setD2IsActive(false);
                                        setE(-1);
                                        setEIsActive(false);
                                        alert("Test drive should not exceed 50 blows");
                                      }
                                    }
                                  }
                                } else {
                                  setCIsActive(true);
                                  setD(-1);
                                  setDIsActive(true);
                                  setD2(-1);
                                  setD2IsActive(false);
                                  setE(-1);
                                  setEIsActive(false);
                                }
                              }}
                              value={(d < 0) ? "" : d.toString()}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={d2IsActive}
                              selectTextOnFocus={d2IsActive}
                              style={(d2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setD2(inputVal);
                                        setE(-1);
                                        setEIsActive(false);
                                      } else {
                                        setD2(-1);
                                        setE(-1);
                                        setEIsActive(false);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setD2(-1);
                                  setE(-1);
                                  setEIsActive(false);
                                }
                              }}
                              value={(d2 < 0) ? "" : d2.toString()}
                            />
                            <Text>mm</Text>
                          </View>

                          {/* e */}
                          <View style={{alignItems: "center", width: "25%"}}>
                            <TextInput
                              editable={eIsActive}
                              selectTextOnFocus={eIsActive}
                              style={(eIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedTestDriveValue = c + d + inputVal;
                                      if (accumulatedTestDriveValue < 50) {
                                        setDIsActive(false);
                                        setE(inputVal);
                                        setE2(75);
                                        setE2IsActive(false);
                                        setF(-1);
                                        setFIsActive(true);
                                      } else if (accumulatedTestDriveValue == 50) {
                                        setDIsActive(false);
                                        setE(inputVal);
                                        setE2(-1);
                                        setE2IsActive(true);
                                        setF(-1);
                                        setFIsActive(false);
                                      } else {
                                        setDIsActive(true);
                                        setE(-1);
                                        setE2(-1);
                                        setE2IsActive(false);
                                        setF(-1);
                                        setFIsActive(false);
                                        alert("Test drive should not exceed 50 blows");
                                      }
                                    }
                                  }
                                } else {
                                  setDIsActive(true);
                                  setE(-1);
                                  setEIsActive(true);
                                  setE2(-1);
                                  setE2IsActive(false);
                                  setF(-1);
                                  setFIsActive(false);
                                }
                              }}
                              value={(e < 0) ? "" : e.toString()}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={e2IsActive}
                              selectTextOnFocus={e2IsActive}
                              style={(e2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setE2(inputVal);
                                        setF(-1);
                                        setFIsActive(false);
                                      } else {
                                        setE2(-1);
                                        setF(-1);
                                        setFIsActive(false);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setE2(-1);
                                  setF(-1);
                                  setFIsActive(false);
                                }
                              }}
                              value={(e2 < 0) ? "" : e2.toString()}
                            />
                            <Text>mm</Text>
                          </View>

                          {/* f */}
                          <View style={{alignItems: "center", width: "25%"}}>
                            <TextInput
                              editable={fIsActive}
                              selectTextOnFocus={fIsActive}
                              style={(fIsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input) => {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      const inputVal = parseInt(input);
                                      const accumulatedTestDriveValue = c + d + e + inputVal;
                                      if (accumulatedTestDriveValue < 50) {
                                        setEIsActive(false);
                                        setF(inputVal);
                                        setF2(75);
                                        setF2IsActive(false);
                                      } else if (accumulatedTestDriveValue == 50) {
                                        setEIsActive(false);
                                        setF(inputVal);
                                        setF2(-1);
                                        setF2IsActive(true);
                                      } else {
                                        setEIsActive(true);
                                        setF(-1);
                                        setF2(-1);
                                        setF2IsActive(false);
                                        alert("Test drive should not exceed 50 blows");
                                      }
                                    }
                                  }
                                } else {
                                  setEIsActive(true);
                                  setF(-1);
                                  setFIsActive(true);
                                  setF2(-1);
                                  setF2IsActive(false);
                                }
                              }}
                              value={(f < 0) ? "" : f.toString()}
                            />
                            <Icon
                              name="arrow-bottom-left-thin"
                              type="material-community"
                              size={30}
                            />
                            <TextInput
                              editable={f2IsActive}
                              selectTextOnFocus={f2IsActive}
                              style={(f2IsActive) ? styles.sptTextInputActive : styles.sptTextInputInactive}
                              keyboardType="numeric"
                              textAlign="center"
                              onChangeText={(input)=> {
                                if (input) {
                                  if (!isNaN(Number(input))) {
                                    if (Number.isInteger(Number(input))) {
                                      let inputVal = parseInt(input);
                                      if (1 <= inputVal && inputVal <= 75) {
                                        setF2(inputVal);
                                      } else {
                                        setF2(-1);
                                        alert("Input value should be in between 1mm to 75mm");
                                      }
                                    }
                                  }
                                } else {
                                  setF2(-1);
                                }
                              }}
                              value={(f2 < 0) ? "" : f2.toString()}
                            />
                            <Text>mm</Text>
                          </View>

                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Primary Colour: </Text>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            backgroundColor: primaryColour,
                          }}>
                            <Text>Choose Primary Colour</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 204, 0)") } style={{backgroundColor: "rgb(255, 204, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 1
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 255, 0)") } style={{backgroundColor: "rgb(255, 255, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 2
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 255, 102)") } style={{backgroundColor: "rgb(255, 255, 102)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 3
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 255, 153)") } style={{backgroundColor: "rgb(255, 255, 153)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 4
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(28, 28, 28)") } style={{backgroundColor: "rgb(28, 28, 28)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 5
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(77, 77, 77)") } style={{backgroundColor: "rgb(77, 77, 77)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 6
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(150, 150, 150)") } style={{backgroundColor: "rgb(150, 150, 150)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 7
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(192, 192, 192)") } style={{backgroundColor: "rgb(192, 192, 192)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 8
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(153, 51, 0)") } style={{backgroundColor: "rgb(153, 51, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 9
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(204, 51, 0)") } style={{backgroundColor: "rgb(204, 51, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 10
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 153, 102)") } style={{backgroundColor: "rgb(255, 153, 102)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 11
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 204, 153)") } style={{backgroundColor: "rgb(255, 204, 153)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 12
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(204, 0, 0)") } style={{backgroundColor: "rgb(204, 0, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 13
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 0, 0)") } style={{backgroundColor: "rgb(255, 0, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 14
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 80, 80)") } style={{backgroundColor: "rgb(255, 80, 80)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 15
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setPrimaryColour("rgb(255, 204, 204)") } style={{backgroundColor: "rgb(255, 204, 204)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 16
                          </Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Secondary Colour: </Text>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            backgroundColor: secondaryColour,
                          }}>
                            <Text>Choose Secondary Colour</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(102, 0, 102)") } style={{backgroundColor: "rgb(102, 0, 102)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 1
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(153, 0, 153)") } style={{backgroundColor: "rgb(153, 0, 153)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 2
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 153, 255)") } style={{backgroundColor: "rgb(255, 153, 255)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 3
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 204, 255)") } style={{backgroundColor: "rgb(255, 204, 255)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 4
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 102, 0)") } style={{backgroundColor: "rgb(255, 102, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 5
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 153, 51)") } style={{backgroundColor: "rgb(255, 153, 51)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 6
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 204, 102)") } style={{backgroundColor: "rgb(255, 204, 102)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 7
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(255, 228, 153)") } style={{backgroundColor: "rgb(255, 228, 153)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 8
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(0, 102, 0)") } style={{backgroundColor: "rgb(0, 102, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 9
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(0, 176, 0)") } style={{backgroundColor: "rgb(0, 176, 0)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 10
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(102, 255, 51)") } style={{backgroundColor: "rgb(102, 255, 51)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 11
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(204, 255, 102)") } style={{backgroundColor: "rgb(204, 255, 102)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 12
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(0, 0, 204)") } style={{backgroundColor: "rgb(0, 0, 204)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 13
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(0, 51, 204)") } style={{backgroundColor: "rgb(0, 51, 204)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 14
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(51, 153, 255)") } style={{backgroundColor: "rgb(51, 153, 255)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 15
                          </Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSecondaryColour("rgb(204, 236, 255)") } style={{backgroundColor: "rgb(204, 236, 255)", height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>
                            Colour 16
                          </Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </View>

                  <View style={{paddingBottom: 10}}>
                    <Text>Soil Properties: </Text>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                          }}>
                            <Text>{soilPropertyIntensity}</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption onSelect={ () => setSoilPropertyIntensity("Very slightly") } style={styles.menuOption}>
                          <Text>Very slightly</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyIntensity("Slightly") } style={styles.menuOption}>
                          <Text>Slightly</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyIntensity("Fine coarse") } style={styles.menuOption}>
                          <Text>Fine coarse</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyIntensity("-") } style={styles.menuOption}>
                          <Text>-</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            marginTop: 10,
                          }}>
                            <Text>{(soilType) ? soilType : "sandy clay"}</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <ScrollView style={{maxHeight: 500,}}>
                          <MenuOption onSelect={ () => setSoilType("CLAY") } style={styles.menuOption}>
                            <Text>CLAY</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("sandy CLAY") } style={styles.menuOption}>
                            <Text>sandy CLAY</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("gravelly CLAY") } style={styles.menuOption}>
                            <Text>gravelly CLAY</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("SILT") } style={styles.menuOption}>
                            <Text>SILT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("sandy SILT") } style={styles.menuOption}>
                            <Text>sandy SILT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("gravelly SILT") } style={styles.menuOption}>
                            <Text>gravelly SILT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("SAND") } style={styles.menuOption}>
                            <Text>SAND</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("gravelly SAND") } style={styles.menuOption}>
                            <Text>gravelly SAND</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("silty SAND") } style={styles.menuOption}>
                            <Text>silty SAND</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("clayey SAND") } style={styles.menuOption}>
                            <Text>clayey SAND</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("GRAVEL") } style={styles.menuOption}>
                            <Text>GRAVEL</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("sandy GRAVEL") } style={styles.menuOption}>
                            <Text>sandy GRAVEL</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("silty GRAVEL") } style={styles.menuOption}>
                            <Text>silty GRAVEL</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("clayey GRAVEL") } style={styles.menuOption}>
                            <Text>clayey GRAVEL</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("PEAT") } style={styles.menuOption}>
                            <Text>PEAT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("peaty organic CLAY") } style={styles.menuOption}>
                            <Text>peaty organic CLAY</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("peaty organic SILT") } style={styles.menuOption}>
                            <Text>peaty organic SILT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("peaty organic SAND") } style={styles.menuOption}>
                            <Text>peaty organic SAND</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("organic CLAY") } style={styles.menuOption}>
                            <Text>organic CLAY</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("organic SILT") } style={styles.menuOption}>
                            <Text>organic SILT</Text>
                          </MenuOption>
                          <MenuOption onSelect={ () => setSoilType("organic SAND") } style={styles.menuOption}>
                            <Text>organic SAND</Text>
                          </MenuOption>
                        </ScrollView>
                      </MenuOptions>
                    </Menu>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            marginTop: 10,
                          }}>
                            <Text>{soilPropertyPreposition}</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption onSelect={ () => setSoilPropertyPreposition("with") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>with</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyPreposition("with traces of") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>with traces of</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyPreposition("with occasional") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>with occasional</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilPropertyPreposition("-") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>-</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                    <Menu>
                      <MenuTrigger>
                        <View
                          style={{
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            marginTop: 10,
                          }}>
                            <Text>{(soilAdditionalProperties) ? soilAdditionalProperties : "pockets of sand"}</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("discrete organic matter") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>discrete organic matter</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("decomposed wood") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>decomposed wood</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("rootholes") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>rootholes</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("shells") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>shells</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("pockets of sand, silt, clay") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>pockets of sand</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("pockets of sand, silt, clay") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>pockets of silt</Text>
                        </MenuOption>
                        <MenuOption onSelect={ () => setSoilAdditionalProperties("pockets of sand, silt, clay") } style={{height: 40, alignItems: "center", justifyContent: "center",}}>
                          <Text>pockets of clay</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </View>
                  <View>
                    <Text>Sample Recover (mm): </Text>
                    <TextInput
                      style={{
                        height: 30,
                        borderWidth: 1,
                      }}
                      keyboardType="numeric"
                      onChangeText={ (input) => {
                        if (input) {
                          if (!isNaN(Number(input))) {
                            if (Number.isInteger(Number(input))) {
                              const inputVal = parseInt(input);
                              if (inputVal <= 450) {
                                setRecovery(inputVal);
                              } else {
                                alert("Sample Recover should not exceed 450mm");
                              }
                            }
                          }
                        } else {
                          setRecovery(-1);
                        }
                      }}
                      value={(recovery) < 0 ? "" : recovery.toString()}
                    />
                  </View>
                  <View style={{height: 20}}/>
                </ScrollView>
              </View>
                  
              <TouchableOpacity
                onPress={ () => {
                  realm.write(() => {
                    const newBlock : Block = {
                      _id: new BSON.ObjectId(),
                      name: "SPT Block",
                    } as Block;
                    project?.blocks.push(newBlock);
                  });
                  setOpenSptModal(false);
                }}
                style={styles.confirmAddButton}>
                <Text>Confirm</Text>
              </TouchableOpacity>

            </View>
          </View>
        </MenuProvider>
      </Modal>
    );
  }
  function renderUdModal() {
    return (
      <Modal visible={openUdModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}>

          {/* Pop up container */}
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
              onPress={ () => setOpenUdModal(false) }
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
            <Text>UD</Text>

            <TouchableOpacity
              onPress={ () => {
                setOpenUdModal(false);
              }}
              style={styles.confirmAddButton}>
              <Text>Confirm</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    );
  }
  function renderRockModal() {
    return (
      <Modal visible={openRockModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenRockModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Rock</Text>
          </View>
        </View>
      </Modal>
    );
  }
  function renderPermeabilityTestModal() {
    return (
      <Modal visible={openPermeabilityTestModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenPermeabilityTestModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Permeability Test</Text>
          </View>
        </View>
      </Modal>
    );
  }
  function renderLugeonTestModal() {
    return (
      <Modal visible={openLugeonTestModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenLugeonTestModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Lugeon Test</Text>
          </View>
        </View>
      </Modal>
    );
  }
  function renderPressuremeterTestModal() {
    return (
      <Modal visible={openPressuremeterTestModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenPressuremeterTestModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Pressuremeter Test</Text>
          </View>
        </View>
      </Modal>
    );
  }
  function renderVaneShearTestModal() {
    return (
      <Modal visible={openVaneShearTestModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenVaneShearTestModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Vane Shear Test</Text>
          </View>
        </View>
      </Modal>
    );
  }
  function renderTeleviewerModal() {
    return (
      <Modal visible={openTeleviewerModal} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "80%",
              height: "60%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <TouchableOpacity 
              onPress={ () => setOpenTeleviewerModal(false)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <Icon
                name="close-outline"
                type="ionicon"
                color="000000"
                size={40}
              />
            </TouchableOpacity>
            <Text>Televiewer</Text>
          </View>
        </View>
      </Modal>
    );
  }

  
  const project = useObject(Project, new BSON.ObjectId(params._id.toString()));
  const blocks = project?.blocks;

  return (
    <MenuProvider skipInstanceCheck={true}>
      <Stack.Screen options={{title: ""}}/>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}>

        <Text 
          style={
            styles.title
          }>
          {project?.name}
        </Text>

        <View style={{width: "100%", flex: 1}}>

          <BlockList data={blocks}></BlockList>
          <Menu
            style={{
              position: "absolute",
              right: 30,
              bottom: 30,
            }}>
            <MenuTrigger>
              <Icon
                reverse
                name='add-outline'
                type='ionicon'
                color='#000000'
              />
            </MenuTrigger>
            <MenuOptions>
              <ScrollView style={{height: 250}}>
                <MenuOption onSelect={ () => setOpenSptModal(true)} text="SPT" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenUdModal(true)} text="UD" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenRockModal(true)} text="Rock" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenPermeabilityTestModal(true)} text="Permeability Test" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenLugeonTestModal(true)} text="Lugeon Test" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenPressuremeterTestModal(true)} text="Pressuremeter Test" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenVaneShearTestModal(true)} text="Vane Shear Test" style={styles.menuOption}></MenuOption>
                <MenuOption onSelect={ () => setOpenTeleviewerModal(true)} text="Televiewer" style={styles.menuOption}></MenuOption>
              </ScrollView>
            </MenuOptions>
          </Menu>

        </View>
        {renderSptModal()}
        {renderUdModal()}
        {renderRockModal()}
        {renderPermeabilityTestModal()}
        {renderLugeonTestModal()}
        {renderPressuremeterTestModal()}
        {renderVaneShearTestModal()}
        {renderTeleviewerModal()}
      </View>
    </MenuProvider>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  menuOption: {
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  operationHeadingsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  operationHeadingsTitle: {
    fontWeight: "bold"
  },
  operationDescriptionsContainer: {
    marginTop: 15,
    width: "100%",
  },
  sptTextInputActive: {
    height: 30,
    borderWidth: 1,
    width: 50,
  },
  sptTextInputInactive: {
    height: 30,
    borderWidth: 1,
    width: 50,
    borderColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "rgba(0, 0, 0, 0.5)",
  },
  confirmAddButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },

});