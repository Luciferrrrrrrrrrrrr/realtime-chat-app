import schema from "@/instant.schema";
import { APP_ID } from "@/utils";
import { init } from "@instantdb/react-native";
import { Stack } from "expo-router";


export default function RootLayout() {
  
  return <Stack> 
    <Stack.Screen name ="index" />
  </Stack>;
}
