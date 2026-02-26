import { APP_ID } from '@/utils';
import { init, i, InstaQLEntity } from '@instantdb/react-native';
import { View, Text, Button, StyleSheet } from 'react-native';


const selectId = '4d39508b-9ee2-48a3-b70d-8192d9c5a059';

function App() {
  
  // const { isLoading, error, data } = db.useQuery({
  //   colors: {
  //     $: { where: { id: selectId } },
  //   },
  // });
  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  // if (error) {
  //   return (
  //     <View>
  //       <Text>Error: {error.message}</Text>
  //     </View>
  //   );
  // }

  return (
  <View>
    <Text>Hello</Text>
  </View>

  );
}


export default App;