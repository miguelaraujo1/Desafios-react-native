import { View } from "react-native";
import { StatusBar, Text } from "react-native";
import {Ex1, Ex2, Ex3, DesafioAula1} from "./Flex/Flex";

export default function App() {  

  return (
    <View style={{flex:1}}>
      {/* <Ex1/> */}
      {/* <Ex2/> */}
      {/* <Ex3/> */}
      <DesafioAula1/>

      <StatusBar style='auto'/>
    </View>
    
  );
}


