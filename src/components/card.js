import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

const card = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.et}>
          <View style={styles.ex}>
            <Text style={styles.e2}>Excercise</Text>
          </View>

          <View style={styles.tt}>
            <Text style={styles.e1}>Excercise</Text>
            <View style={styles.days}>
              <Text style={styles.e11}>7 days</Text>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
                }}
                style={styles.fire}
              />
            </View>
            <Text style={styles.e1}>Excercise</Text>
          </View>
        </View>
        <View style={styles.pb}>
          {/* <CircularProgress value={30} radius={45} width={10} /> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image2: {
    height: 40,
    width: 40,
  },
  div: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card: {
    borderWidth: 2,
    borderRadius: 30,
    height: 180,
    width: 350,
    flex: 0.1,
    marginTop: 15,
  },
  sdiv1: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "red",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  et: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "yellow",
    height: "100%",
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  tt: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  e1: {
    borderColor: "red",
    borderWidth: 2,
    height: 30,
    fontSize: 10,
    width: 60,
    borderRadius: 50,
    textAlignVertical: "center",
    textAlign: "center",
  },
  e2: {
    fontSize: 30,
  },
  e11: {
    fontSize: 10,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "red",
    borderWidth: 2,
    height: 30,
    fontSize: 10,
    width: 70,
    borderRadius: 50,
    alignItems: "center",
  },
  fire: {
    height: 15,
    width: 15,
    borderRadius: 50,
  },

  pb: {
    flexDirection: "row",
    height: 180,
    alignItems: "center",
  },
});

export default card;
