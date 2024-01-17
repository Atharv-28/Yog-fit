import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import BottomNav from './BottomNav';
import SquareComponents from './SquareComponents';
const Profile = () => {
  return (

<View style={styles.profile}>
<View style={styles.user}>
<Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.ag77IUhQeW_A-FQGcASMLAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7' }}
          style={[styles.image,styles.marg]}
        />
        <Text style={[styles.marg,styles.txt]}>User</Text>
</View>
<SquareComponents></SquareComponents>
<BottomNav></BottomNav>
</View>
  );
};
const styles = StyleSheet.create({
  profile:{
height:'100%',
width:'100%',

  },
 user:{
  borderColor:'red',
  borderWidth:2,
  flexDirection:'row',
  alignItems:'center',
  marginTop:50
 },
 image:{
  height:50,
  width:50,
borderRadius:50
 },
 marg:{
marginLeft:30,
 },
 txt:{
  fontSize:20
 },
 
});

export default Profile;