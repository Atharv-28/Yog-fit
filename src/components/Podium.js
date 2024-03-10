// Podium.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import bg from "../../assets/backgoundImages/rankbg.jpg";

const Podium = ({ rankingData }) => {
  const sortedData = rankingData.slice().sort((a, b) => b.score - a.score);
  const renderPodium = () => {
    const topThree = sortedData.slice(0, 3);

    return topThree.map((item, index) => (
      <View
        key={item.id}
        style={[
          styles.podiumItem,
          index === 0 && styles.firstPlace,
          index === 1 && styles.secondPlace,
          index === 2 && styles.thirdPlace,
        ]}
      >
        <Text style={styles.podiumPosition}>{index + 1}</Text>
        <Image style={styles.img} source={{ uri: item.img }} />
        <Text
          style={
            ({ flexWrap: "wrap" },
            { flexDirection: "column" },
            { textAlign: "center" })
          }
        >
          {item.username}
        </Text>
        <Text style={{fontSize:16}}>{item.score}🍾</Text>
      </View>
    ));
  };

  const renderRemainingList = () => {
    const remainingItems = sortedData.slice(3);

    return remainingItems.map((item, index) => (
      <View key={item.id} style={styles.remainingItem}>
        <View style={styles.ril}>
          <Text style={styles.rankIndex}>{index + 4}</Text>
          <Image style={styles.img} source={{ uri: item.img }} />
          <Text style={{fontSize:17}}>{item.username}</Text>
        </View>
        <Text style={{fontSize:17}}>{item.score}🏅</Text>
      </View>
    ));
  };

  return (
    <View style={styles.podiumContainer}>
      <View style={styles.podium}>{renderPodium()}</View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
        style={styles.riC}
      >
        {renderRemainingList()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  podiumItem: {
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    gap: 5,
  },
  podiumPosition: {
    fontSize: 20,
    fontWeight: "bold",
  },
  firstPlace: {
    backgroundColor: "gold",
    height: "95%",
    width: 100,
    borderRadius: 20,
  },
  secondPlace: {
    backgroundColor: "silver",
    height: "80%",
    width: 100,
    borderRadius: 20,
  },
  thirdPlace: {
    backgroundColor: "#cd7f32",
    height: "65%",
    width: 100,
    borderRadius: 20,
  },
  rankIndex:{
    fontSize: 18,
    fontWeight:"bold",
  },
  ril:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    gap: 20,
  },
  riC:{
    // borderColor: "blue",
    // borderWidth: 2,
    width: 380,
    borderRadius: 25,
    // backgroundColor: "#7bd5f5",

  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  remainingItem: {
    width: 340,
    height: 80,
    borderRadius: 15,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderColor: "red",
    // borderWidth: 2,
    paddingVertical: 5,
    marginTop: 10,
  },
  podium: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
    height: 240,
  },
});

export default Podium;
