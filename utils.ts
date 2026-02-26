import { init } from "@instantdb/react-native";
import schema from "./instant.schema";

export const APP_ID = process.env.EXPO_PUBLIC_INSTANT_APP_ID;

if (!APP_ID){
  throw new Error("You need to set your APP ID")
}

export const db = init({appId : APP_ID, schema: schema});