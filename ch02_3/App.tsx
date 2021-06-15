/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   Text
 } from 'react-native';
 import * as D from './src/data'

 const person = D.createRandomPerson()
 const App = () => {
   return (
     <SafeAreaView>
       <Text>{JSON.stringify(person, null, 2)}</Text>
     </SafeAreaView>
   );
 };

 export default App;
