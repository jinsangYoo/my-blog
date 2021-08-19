/** reactslimer
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {Platform, LogBox} from 'react-native'

 import {
   SafeAreaView,
   Alert, Button
 } from 'react-native';
 import { TouchableHighlight, TouchableOpacity, Text } from 'react-native';
 import { TextInput } from 'react-native'
import { AceConfiguration, ACParams, ACS, ACEResponseToCaller } from 'reactslimer';

function getGCode(): string {
  if (Platform.OS == 'ios') {
    return 'AK3A79964'
  }
  else {
    return 'AK2A79936'
  }
}

function isEmpty(value: any): boolean {
  return (
    value === null || // check for null
    value === undefined || // check for undefined
    value === '' || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
  )
}

function isLetterAtStringStartIndex(value: string): boolean {
  const regex = /^[\w].*/
  return regex.test(value)
}

function onlyLetteringAtStartIndex(value: string): string {
  if (!isEmpty(value)) {
    while (!isLetterAtStringStartIndex(value)) {
      value = value.substring(1)
      if (isEmpty(value)) {
        break
      }
    }
  }
  return value
}

 const onPress = () => {
  //  Alert.alert('home pressed.', 'message!!')

   console.log(`\n\n abcd: ${isLetterAtStringStartIndex('abcd')}`)
   console.log(`abcd: >>${onlyLetteringAtStartIndex('abcd')}<<`)

   console.log(`\n\n 1234abcd: ${isLetterAtStringStartIndex('1234abcd')}`)
   console.log(`1234abcd: >>${onlyLetteringAtStartIndex('1234abcd')}<<`)

   console.log(`\n\n !@#abcd: ${isLetterAtStringStartIndex('!@#abcd')}`)
   console.log(`!@#abcd: >>${onlyLetteringAtStartIndex('!@#abcd')}<<`)

   console.log(`\n\n //123abcd: ${isLetterAtStringStartIndex('//123abcd')}`)
   console.log(`//123abcd: >>${onlyLetteringAtStartIndex('//123abcd')}<<`)

   console.log(`\n\n 가나다abcd: ${isLetterAtStringStartIndex('가나다abcd')}`)
   console.log(`가나다abcd: >>${onlyLetteringAtStartIndex('가나다abcd')}<<`)

   console.log(`\n\n ㄱabcd: ${isLetterAtStringStartIndex('ㄱabcd')}`)
   console.log(`ㄱabcd: >>${onlyLetteringAtStartIndex('ㄱabcd')}<<`)

   console.log(`\n\n >> $%#$abcd<<: ${isLetterAtStringStartIndex(' $%#$abcd')}`)
   console.log(`>> $%#$abcd<<: >>${onlyLetteringAtStartIndex(' $%#$abcd')}<<`)

   console.log(`\n\n >>.sde<<: ${isLetterAtStringStartIndex('.sde')}`)
   console.log(`>>.sde<<: >>${onlyLetteringAtStartIndex('.sde')}<<`)
  }

  const onPressInitSDK = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'SDK 초기화')
    console.log("\n\n\n\nSDK 초기화 클릭!")
    
    const _config = AceConfiguration.init(getGCode())
    ACS.configure(_config)
   }

   const onPressInitSDKWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'SDK + CB 초기화')
    console.log("\n\n\n\nSDK + CB 초기화 클릭!")
    
    const _config = AceConfiguration.init(getGCode())
    ACS.configure(_config, (error?: Error, result?: ACEResponseToCaller) => {
      console.log('SDK + CB 초기화::in CB');
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
   }

   const onPressInitSDKWithCBx5 = () => {
    console.log("**************************************************************")
    console.log("\n\n\n\nSDK + CB 초기화 클릭! x5")
    
    for (var i = 0; i < 5;++i) {
      const _config = AceConfiguration.init(getGCode())
      ACS.configure(_config, (error?: Error, result?: ACEResponseToCaller) => {
        console.log('SDK + CB 초기화 x5::in CB');
        console.log('error: ' + JSON.stringify(error, null, 2));
        console.log('result: ' + JSON.stringify(result, null, 2));
      })
    }
   }

   const onPressInitSDKWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'SDK + Promise 초기화')
    console.log("\n\n\n\nSDK + Promise 초기화 클릭!")
    
    const _config = AceConfiguration.init(getGCode())
    ACS.configure(_config).then(response => {
      console.log('SDK + Promise 초기화::in then!!')
      console.log('response: ' + JSON.stringify(response, null, 2));
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendBuyWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendBuyWithPromise(getRandomIntInclusive(0, 999).toString())
    }).catch(err => {
      console.log('SDK + Promise 초기화::in reject!!')
      console.log('err: ' + JSON.stringify(err, null, 2));
    })
   }

   const onPressInitSDKWithPromisex5 = () => {
    console.log("**************************************************************")
    console.log("\n\n\n\nSDK + Promise 초기화 클릭! x5")
    
    for (var i = 0; i < 5;++i) {
      const _config = AceConfiguration.init(getGCode())
      ACS.configure(_config).then(response => {
        console.log('SDK + Promise 초기화 x5::in then!!')
        console.log('response: ' + JSON.stringify(response, null, 2));
        // sendWithPromise(getRandomIntInclusive(0, 999).toString())
        // sendBuyWithPromise(getRandomIntInclusive(0, 999).toString())
        // sendWithPromise(getRandomIntInclusive(0, 999).toString())
        // sendBuyWithPromise(getRandomIntInclusive(0, 999).toString())
      }).catch(err => {
        console.log('SDK + Promise 초기화 x5::in reject!!')
        console.log('err: ' + JSON.stringify(err, null, 2));
      })
    }
  }

   const onPressSDKDetails = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'SDK Details')
    const msg = '\n\n\n\nSDK Details 클릭!'
    console.log(msg)
    
    console.log(`ACS.getPackageNameOrBundleID: ${ACS.getPackageNameOrBundleID()}`)
    console.log(`ACS.SDKVersion: ${ACS.SDKVersion()}`)
   }

   const onPressSend = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send PL')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend PL 클릭! >>${randomValue}<<`
    console.log(msg)
    
    ACS.send(ACParams.init(ACParams.TYPE.EVENT, `Send PL 클릭! >>${randomValue}<<`))
   }

   const onPressSendWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send PL + CB')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend PL + CB 클릭! >>${randomValue}<<`
    console.log(msg)
    
    ACS.send(ACParams.init(ACParams.TYPE.EVENT, `Send PL + CB 클릭! >>${randomValue}<<`), (error?: object, result?: ACEResponseToCaller) => {
      console.log('Send PL + CB::in CB');
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
   }

   const onPressSendWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send PL + Promise')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend PL + Promise 클릭! >>${randomValue}<<`
    console.log(msg)
    sendWithPromise(randomValue)
   }

   const onPressSendWithCBx5 = () => {
    console.log("**************************************************************")
    for (var i = 0; i < 5; ++i) {
      const randomValue = getRandomIntInclusive(0, 999).toString()
      const msg = `\n\n\n\ ${i + 1}.nSend PL + CB 클릭! >>${randomValue}<<`
      console.log(msg)
      sendWithCB(randomValue, i + 1)
    }
   }

   function sendWithCB(randomValue: string, index: number = 1) {
    const params = ACParams.init(ACParams.TYPE.EVENT, `${index}.Send PL + CB 클릭! >>${randomValue}<<`)
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params, (error?: object, result?: ACEResponseToCaller) => {
      console.log(`${index}.SDK + CB 초기화::in CB`);
      console.log(`${index}.SDK + CB 초기화::error: ${JSON.stringify(error, null, 2)}`);
      console.log(`${index}.SDK + CB 초기화::result: ${JSON.stringify(result, null, 2)}`);
    })
   }

   const onPressSendWithPromisex5 = () => {
    console.log("**************************************************************")
    for (var i = 0; i < 5;++i) {
      const randomValue = getRandomIntInclusive(0, 999).toString()
      const msg = `\n\n\n\ ${i + 1}.nSend PL + Promise 클릭! >>${randomValue}<<`
      console.log(msg)
      sendWithPromise(randomValue, i + 1)
    }
   }

   function sendWithPromise(randomValue: string, index: number = 1) {
    const params = ACParams.init(ACParams.TYPE.EVENT, `${index}.Send PL + Promise 클릭! >>${randomValue}<<`)
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params).then(response => {
      console.log(`${index}.SDK PL + Promise::in then!!`)
      if (response) {
        console.log(`${index}.response: ${JSON.stringify(response, null, 2)}`);
      }
      else {
        console.log(`${index}.response is undefined.`);
      }
    }).catch(err => {
      console.log(`${index}.SDK PL + Promise::in reject!!`)
      if (err) {
        console.log(`${index}.err: ${JSON.stringify(err, null, 2)}`);
      }
      else {
        console.log(`${index}.err is undefined.`);
      }
    })
   }

   const onPressSendBuyWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send Buy + CB')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend Buy + CB 클릭! >>${randomValue}<<`
    console.log(msg)
    
    const params = ACParams.init(ACParams.TYPE.BUY, `Send Buy + CB 클릭! >>${randomValue}<<`)
    params.payMethodName = `지불방법 >>${randomValue}<<`
    params.orderNumber = `주문번호 >>${randomValue}<<`
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params, (error?: object, result?: ACEResponseToCaller) => {
      console.log('Send Buy + CB::in CB');
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
   }

   const onPressSendBuyWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send Buy + Promise')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend Buy + Promise 클릭! >>${randomValue}<<`
    console.log(msg)
    sendBuyWithPromise(randomValue)
   }

   function sendBuyWithPromise(randomValue: string) {
    const params = ACParams.init(ACParams.TYPE.BUY, `Send Buy + Promise 클릭! >>${randomValue}<<`)
    params.payMethodName = `지불방법 >>${randomValue}<<`
    params.orderNumber = `주문번호 >>${randomValue}<<`
    console.log(JSON.stringify(params, null, 2))
    
    ACS.send(params).then(response => {
      console.log('SDK Buy + Promise::in then!!')
      if (response) {
        console.log('response: ' + JSON.stringify(response, null, 2));
      }
      else {
        console.log('response is undefined.');
      }
    }).catch(err => {
      console.log('SDK Buy + Promise::in reject!!')
      if (err) {
        console.log('err: ' + JSON.stringify(err, null, 2));
      }
      else {
        console.log('err is undefined.');
      }
    })
   }

   function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

 const App = () => {
  console.log("reactslimer is ready.")
  // LogBox.ignoreAllLogs()
   return (
     <SafeAreaView>
       <Button title="home" onPress={onPress} />
       <Button title="SDK 초기화" onPress={onPressInitSDK} />
       <Button title="SDK + CB 초기화" onPress={onPressInitSDKWithCB} />
       <Button title="SDK + CB 초기화 x5" onPress={onPressInitSDKWithCBx5} />
       <Button title="SDK + Promise 초기화" onPress={onPressInitSDKWithPromise} />
       <Button title="Send + Promise 초기화 x5" onPress={onPressInitSDKWithPromisex5} />
       <Button title="SDK Details" onPress={onPressSDKDetails} />
       <Button title="Send PL" onPress={onPressSend} />
       <Button title="Send PL + CB" onPress={onPressSendWithCB} />
       <Button title="Send PL + Promise" onPress={onPressSendWithPromise} />
       <Button title="Send PL + CB x5" onPress={onPressSendWithCBx5} />
       <Button title="Send PL + Promise x5" onPress={onPressSendWithPromisex5} />
       <Button title="Send Buy + CB" onPress={onPressSendBuyWithCB} />
       <Button title="Send Buy + Promise" onPress={onPressSendBuyWithPromise} />
       <TouchableOpacity onPress={onPress}>
         
       </TouchableOpacity>
       <TouchableHighlight onPress={onPress}>
         <Text>TouchableHighlight</Text>
       </TouchableHighlight>
       <TextInput
       placeholder="enter your name"
       onChangeText={(text:string) => console.log(text)}
       onFocus={() => console.log('onFocus')}
      onBlur={() => console.log("onBlur")}
      onEndEditing={() => console.log('onEndEditing')} />
    </SafeAreaView>
   );
 };
 
export default App;


