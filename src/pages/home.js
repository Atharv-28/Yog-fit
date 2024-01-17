import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import BottomNav from "../components/bottomNav";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text>Welcome Back Shravan !!</Text>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.ag77IUhQeW_A-FQGcASMLAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7",
          }}
          style={styles.image}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
          alignItems: "center",
        }}
      >
        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} width={10} />
            </View>
          </View>
        </View>
        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} width={10} />
            </View>
          </View>
        </View>
        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} />
            </View>
          </View>
        </View>

        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} width={10} />
            </View>
          </View>
        </View>
        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} width={10} />
            </View>
          </View>
        </View>
        <View style={styles.div1}>
          <View style={styles.sdiv1}>
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
              <CircularProgress value={30} radius={45} width={10} />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNav></BottomNav>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderWidth: 2,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  image2: {
    height: 40,
    width: 40,
  },
  container2: {
    height: "80%",
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  div: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  div1: {
    borderWidth: 2,
    height: "30%",
    width: "90%",
    borderRadius: 30,
    flex: 1,
    marginTop: 5,
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

export default Home;
