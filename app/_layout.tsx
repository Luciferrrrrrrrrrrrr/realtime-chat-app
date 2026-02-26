import { Stack } from "expo-router";
import { db } from "@/utils";


export default function RootLayout() {
  
  return <Stack> 
    <db.SignedIn>
    <Stack.Screen name ="index"   />
    </db.SignedIn>

    <db.SignedOut>
     
     <Stack.Screen name ="index"   />


    </db.SignedOut>
  </Stack>;
}
