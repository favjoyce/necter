import { Link } from "expo-router";
import { Text, View,StyleSheet,Image} from "react-native";

export default function Index() {
  return (
    <View
      style={style.main}
    > 
     <Link href="/second">
      <View style={style.smallDiv}>
        <Image source={require("../assets/images/Group1.png")}/>
      </View>
          </Link>

    </View>
  );
}

const style =StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#53b175"
      },
    smallDiv:{
      // backgroundColor:"white",
      width:"95%",
      height:220,
      alignItems:'center',
      justifyContent:'center'

    }  

})