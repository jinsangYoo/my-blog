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
   ScrollView,
   Alert, Button
 } from 'react-native';
 import { TouchableHighlight, TouchableOpacity, Text } from 'react-native';
 import { TextInput } from 'react-native'
import { AceConfiguration, ACParams, ACS, ACEResponseToCaller, ACProduct, ACEGender, ACEMaritalStatus } from 'reactslimer';

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

function isAlphabetOrNumberAtStringStartIndex(value: string): boolean {
  const regex = /^[\w].*/
  return regex.test(value)
}

function onlyAlphabetOrNumberAtStringStartIndex(value: string): string {
  if (!isEmpty(value)) {
    while (!isAlphabetOrNumberAtStringStartIndex(value)) {
      value = value.substring(1)
      if (isEmpty(value)) {
        break
      }
    }
  }
  return value
}

export function isLetterAtStringStartIndex(value: string): boolean {
  const regex = /^[\w|ㄱ-ㅎ|ㄱ-ㅎ|가-힣].*/
  return regex.test(value)
}

export function onlyLetteringAtStartIndex(value: string): string {
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

   console.log(`\n\n abcd: ${isAlphabetOrNumberAtStringStartIndex('abcd')}`)
   console.log(`abcd: >>${onlyAlphabetOrNumberAtStringStartIndex('abcd')}<<`)

   console.log(`\n\n 1234abcd: ${isAlphabetOrNumberAtStringStartIndex('1234abcd')}`)
   console.log(`1234abcd: >>${onlyAlphabetOrNumberAtStringStartIndex('1234abcd')}<<`)
   console.log(`\n\n 1234abcd321: ${isAlphabetOrNumberAtStringStartIndex('1234abcd321')}`)
   console.log(`1234abcd321: >>${onlyAlphabetOrNumberAtStringStartIndex('1234abcd321')}<<`)

   console.log(`\n\n !@#abcd: ${isAlphabetOrNumberAtStringStartIndex('!@#abcd')}`)
   console.log(`!@#abcd: >>${onlyAlphabetOrNumberAtStringStartIndex('!@#abcd')}<<`)
   console.log(`\n\n !@#abcd#@!: ${isAlphabetOrNumberAtStringStartIndex('!@#abcd#@!')}`)
   console.log(`!@#abcd#@!: >>${onlyAlphabetOrNumberAtStringStartIndex('!@#abcd#@!')}<<`)

   console.log(`\n\n //123abcd: ${isAlphabetOrNumberAtStringStartIndex('//123abcd')}`)
   console.log(`//123abcd: >>${onlyAlphabetOrNumberAtStringStartIndex('//123abcd')}<<`)
   console.log(`\n\n //123abcd//: ${isAlphabetOrNumberAtStringStartIndex('//123abcd//')}`)
   console.log(`//123abcd//: >>${onlyAlphabetOrNumberAtStringStartIndex('//123abcd//')}<<`)

   console.log(`\n\n 가나다abcd: ${isAlphabetOrNumberAtStringStartIndex('가나다abcd')}`)
   console.log(`가나다abcd: >>${onlyAlphabetOrNumberAtStringStartIndex('가나다abcd')}<<`)
   console.log(`\n\n 가나다abcd다나가: ${isAlphabetOrNumberAtStringStartIndex('가나다abcd다나가')}`)
   console.log(`가나다abcd다나가: >>${onlyAlphabetOrNumberAtStringStartIndex('가나다abcd다나가')}<<`)

   console.log(`\n\n ㄱabcd: ${isAlphabetOrNumberAtStringStartIndex('ㄱabcd')}`)
   console.log(`ㄱabcd: >>${onlyAlphabetOrNumberAtStringStartIndex('ㄱabcd')}<<`)
   console.log(`\n\n ㄱabcdㅎ: ${isAlphabetOrNumberAtStringStartIndex('ㄱabcdㅎ')}`)
   console.log(`ㄱabcdㅎ: >>${onlyAlphabetOrNumberAtStringStartIndex('ㄱabcdㅎ')}<<`)

   console.log(`\n\n >> $%#$abcd<<: ${isAlphabetOrNumberAtStringStartIndex(' $%#$abcd')}`)
   console.log(`>> $%#$abcd<<: >>${onlyAlphabetOrNumberAtStringStartIndex(' $%#$abcd')}<<`)
   console.log(`\n\n >> $%#$abcd$%#$ <<: ${isAlphabetOrNumberAtStringStartIndex(' $%#$abcd$%#$ ')}`)
   console.log(`>> $%#$abcd$%#$ <<: >>${onlyAlphabetOrNumberAtStringStartIndex(' $%#$abcd$%#$ ')}<<`)

   console.log(`\n\n >>.sde<<: ${isAlphabetOrNumberAtStringStartIndex('.sde')}`)
   console.log(`>>.sde<<: >>${onlyAlphabetOrNumberAtStringStartIndex('.sde')}<<`)
   console.log(`\n\n >>.sde.<<: ${isAlphabetOrNumberAtStringStartIndex('.sde.')}`)
   console.log(`>>.sde.<<: >>${onlyAlphabetOrNumberAtStringStartIndex('.sde.')}<<`)
   console.log("**************************************************************")
   console.log(`\n\n\n\n abcd: ${isLetterAtStringStartIndex('abcd')}`)
   console.log(`abcd: >>${onlyLetteringAtStartIndex('abcd')}<<`)

   console.log(`\n\n 1234abcd: ${isLetterAtStringStartIndex('1234abcd')}`)
   console.log(`1234abcd: >>${onlyLetteringAtStartIndex('1234abcd')}<<`)
   console.log(`\n\n 1234abcd321: ${isLetterAtStringStartIndex('1234abcd321')}`)
   console.log(`1234abcd321: >>${onlyLetteringAtStartIndex('1234abcd321')}<<`)

   console.log(`\n\n !@#abcd: ${isLetterAtStringStartIndex('!@#abcd')}`)
   console.log(`!@#abcd: >>${onlyLetteringAtStartIndex('!@#abcd')}<<`)
   console.log(`\n\n !@#abcd#@!: ${isLetterAtStringStartIndex('!@#abcd#@!')}`)
   console.log(`!@#abcd#@!: >>${onlyLetteringAtStartIndex('!@#abcd#@!')}<<`)

   console.log(`\n\n //123abcd: ${isLetterAtStringStartIndex('//123abcd')}`)
   console.log(`//123abcd: >>${onlyLetteringAtStartIndex('//123abcd')}<<`)
   console.log(`\n\n //123abcd//: ${isLetterAtStringStartIndex('//123abcd//')}`)
   console.log(`//123abcd//: >>${onlyLetteringAtStartIndex('//123abcd//')}<<`)

   console.log(`\n\n 가나다abcd: ${isLetterAtStringStartIndex('가나다abcd')}`)
   console.log(`가나다abcd: >>${onlyLetteringAtStartIndex('가나다abcd')}<<`)
   console.log(`\n\n 가나다abcd다나가: ${isLetterAtStringStartIndex('가나다abcd다나가')}`)
   console.log(`가나다abcd다나가: >>${onlyLetteringAtStartIndex('가나다abcd다나가')}<<`)

   console.log(`\n\n ㄱabcd: ${isLetterAtStringStartIndex('ㄱabcd')}`)
   console.log(`ㄱabcd: >>${onlyLetteringAtStartIndex('ㄱabcd')}<<`)
   console.log(`\n\n ㄱabcdㅎ: ${isLetterAtStringStartIndex('ㄱabcdㅎ')}`)
   console.log(`ㄱabcdㅎ: >>${onlyLetteringAtStartIndex('ㄱabcdㅎ')}<<`)

   console.log(`\n\n >> $%#$abcd<<: ${isLetterAtStringStartIndex(' $%#$abcd')}`)
   console.log(`>> $%#$abcd<<: >>${onlyLetteringAtStartIndex(' $%#$abcd')}<<`)
   console.log(`\n\n >> $%#$abcd$%#$ <<: ${isLetterAtStringStartIndex(' $%#$abcd$%#$ ')}`)
   console.log(`>> $%#$abcd$%#$ <<: >>${onlyLetteringAtStartIndex(' $%#$abcd$%#$ ')}<<`)

   console.log(`\n\n >>.sde<<: ${isLetterAtStringStartIndex('.sde')}`)
   console.log(`>>.sde<<: >>${onlyLetteringAtStartIndex('.sde')}<<`)
   console.log(`\n\n >>.sde.<<: ${isLetterAtStringStartIndex('.sde.')}`)
   console.log(`>>.sde.<<: >>${onlyLetteringAtStartIndex('.sde.')}<<`)
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
      
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
      // sendWithPromise(getRandomIntInclusive(0, 999).toString())
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
    console.log(`ACS.getDetail: ${JSON.stringify(ACS.getDetail(), null, 2)}`)
   }

   const onPressSend = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send PL')
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\nSend PL 클릭! >>${randomValue}<<`
    console.log(msg)
    
    ACS.send(ACParams.init(ACParams.TYPE.EVENT, `Send PL 클릭! >>${randomValue}<<`))
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
    params.products = [
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`)
    ]
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
    params.products = [
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`)
    ]
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

  const onPressSendAddCartWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send AddCart + CB')
    const params = ACParams.init(ACParams.TYPE.ADDCART)
    sendCartWithCB('Send AddCart + CB', params)
   }

   const onPressSendDelCartWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send DelCart + CB')
    const params = ACParams.init(ACParams.TYPE.DELCART)
    sendCartWithCB('Send DelCart + CB', params)
   }

   function sendCartWithCB(argMessage: string, params: ACParams): void {
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `\n\n\n\n${argMessage} 클릭! >>${randomValue}<<`
    console.log(msg)
    
    params.products = [
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue + 1}`,`제품카테${randomValue + 1}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 1}`, `Code${randomValue + 1}`),
      new ACProduct(`제품명${randomValue + 2}`,`제품카테${randomValue + 2}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 2}`, `Code${randomValue + 2}`),
    ]
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params, (error?: object, result?: ACEResponseToCaller) => {
      console.log(`${argMessage}::in CB`);
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
  }

  const onPressSendAddCartWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send AddCart + Promise')
    const params = ACParams.init(ACParams.TYPE.ADDCART)
    sendCartWithPromise('Send AddCart + Promise', params)
   }

   const onPressSendDelCartWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send DelCart + Promise')
    const params = ACParams.init(ACParams.TYPE.DELCART)
    sendCartWithPromise('Send DelCart + Promise', params)
   }

  function sendCartWithPromise(argMessage: string, params: ACParams) {
    const randomValue = getRandomIntInclusive(0, 990).toString()
    params.products = [
      new ACProduct(`제품명${randomValue}`,`제품카테${randomValue}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue}`, `Code${randomValue}`),
      new ACProduct(`제품명${randomValue + 1}`,`제품카테${randomValue + 1}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 1}`, `Code${randomValue + 1}`),
      new ACProduct(`제품명${randomValue + 2}`,`제품카테${randomValue + 2}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 2}`, `Code${randomValue + 2}`),
      new ACProduct(`제품명${randomValue + 3}`,`제품카테${randomValue + 3}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 3}`, `Code${randomValue + 3}`),
      new ACProduct(`제품명${randomValue + 4}`,`제품카테${randomValue + 4}`,`${getRandomIntInclusive(0, 999)}`, getRandomIntInclusive(0, 999),`ID${randomValue + 4}`, `Code${randomValue + 4}`),
    ]
    console.log(JSON.stringify(params, null, 2))
    
    ACS.send(params).then(response => {
      console.log(`${argMessage}::in then!!`)
      if (response) {
        console.log('response: ' + JSON.stringify(response, null, 2));
      }
      else {
        console.log('response is undefined.');
      }
    }).catch(err => {
      console.log(`${argMessage}::in reject!!`)
      if (err) {
        console.log('err: ' + JSON.stringify(err, null, 2));
      }
      else {
        console.log('err is undefined.');
      }
    })
   }

   const onPressSendAppearProductWithCB = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send AppearProduct + CB')
    const randomValue = getRandomIntInclusive(0, 990).toString()
    const params = ACParams.init(ACParams.TYPE.APPEAR_PRODUCT, `Send AppearProduct + CB! >>${randomValue}<<`)
    params.productName = `제품명 >>${randomValue}<<`
    params.productCategoryName = `제품카테 >>${randomValue}<<`
    params.productPrice = getRandomIntInclusive(0, 990).toString()
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params, (error?: object, result?: ACEResponseToCaller) => {
      console.log('Send AppearProduct + CB::in CB');
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
   }

   const onPressSendAppearProductWithPromise = () => {
    console.log("**************************************************************")
    Alert.alert('알림', 'Send AppearProduct + Promise')
    const randomValue = getRandomIntInclusive(0, 990).toString()
    const params = ACParams.init(ACParams.TYPE.APPEAR_PRODUCT, `Send AppearProduct + CB! >>${randomValue}<<`)
    params.productName = `제품명 >>${randomValue}<<`
    params.productCategoryName = `제품카테 >>${randomValue}<<`
    params.productPrice = getRandomIntInclusive(0, 990).toString()
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params).then(response => {
      console.log('SDK AppearProduct + Promise::in then!!')
      if (response) {
        console.log('response: ' + JSON.stringify(response, null, 2));
      }
      else {
        console.log('response is undefined.');
      }
    }).catch(err => {
      console.log('SDK AppearProduct + Promise::in reject!!')
      if (err) {
        console.log('err: ' + JSON.stringify(err, null, 2));
      }
      else {
        console.log('err is undefined.');
      }
    })
   }

   const onPressSendWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send PL + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.EVENT, msg)
    sendCommonWithCB(msg, params)
   }

   const onPressSendLinkWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    // const msg = `Send LINK + CB >${randomValue}<`
    const msg = "URL_64" // 서버에 뭐 설정해야함
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LINK, msg)
    params.linkName = `링크 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   const onPressSendTelWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send TEL + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.TEL, msg)
    params.tel = `텔 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   const onPressSendJoinWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Join + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.JOIN, msg)
    params.userId = `가입 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   const onPressSendLoginWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Login + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LOGIN, msg)
    params.userAge = getRandomIntInclusive(0, 999)
    if (params.userAge % 5 == 0) {
      params.userGender = ACEGender.Unknown
    }
    else if (params.userAge % 3 == 0) {
      params.userGender = ACEGender.Woman
    }
    else if (params.userAge % 2 == 0) {
      params.userGender = ACEGender.Man
    }

    if (params.userAge % 5 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Unknown
    }
    else if (params.userAge % 3 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Single
    }
    else if (params.userAge % 2 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Married
    }

    params.userId = `로그인 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   const onPressSendLeaveWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Leave + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LEAVE, msg)
    params.userId = `탈퇴 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   const onPressSendSearchWithCB = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Search + CB >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.SEARCH, msg)
    params.keyword = `키워드 >${randomValue}<`
    sendCommonWithCB(msg, params)
   }

   function sendCommonWithCB(argMessage: string, params: ACParams): void {
    const msg = `\n\n\n\n CB ${argMessage} 클릭!`
    console.log(msg)
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params, (error?: object, result?: ACEResponseToCaller) => {
      console.log(`${argMessage}::in CB`);
      console.log('error: ' + JSON.stringify(error, null, 2));
      console.log('result: ' + JSON.stringify(result, null, 2));
    })
  }

  const onPressSendWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send PL + Promise 클릭! >>${randomValue}<<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.EVENT, msg)
    sendCommonWithPromise(msg, params)
   }

  const onPressSendLinkWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    // const msg = `Send LINK + Promise >${randomValue}<`
    const msg = "URL_64" // 서버에 뭐 설정해야함
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LINK, msg)
    params.linkName = `링크 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   const onPressSendTelWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send TEL + Promise >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.TEL, msg)
    params.tel = `텔 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   const onPressSendJoinWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Join + Promise >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.JOIN, msg)
    params.userId = `가입 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   const onPressSendLoginWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Login + Promise >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LOGIN, msg)
    params.userAge = getRandomIntInclusive(0, 999)
    if (params.userAge % 5 == 0) {
      params.userGender = ACEGender.Unknown
    }
    else if (params.userAge % 3 == 0) {
      params.userGender = ACEGender.Woman
    }
    else if (params.userAge % 2 == 0) {
      params.userGender = ACEGender.Man
    }

    if (params.userAge % 5 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Unknown
    }
    else if (params.userAge % 3 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Single
    }
    else if (params.userAge % 2 == 0) {
      params.userMaritalStatus = ACEMaritalStatus.Married
    }

    params.userId = `로그인 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   const onPressSendLeaveWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Leave + Promise >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.LEAVE, msg)
    params.userId = `탈퇴 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   const onPressSendSearchWithPromise = () => {
    console.log("**************************************************************")
    const randomValue = getRandomIntInclusive(0, 999).toString()
    const msg = `Send Search + Promise >${randomValue}<`
    Alert.alert('알림', msg)
    const params = ACParams.init(ACParams.TYPE.SEARCH, msg)
    params.keyword = `키워드 >${randomValue}<`
    sendCommonWithPromise(msg, params)
   }

   function sendCommonWithPromise(argMessage: string, params: ACParams): void {
    const msg = `\n\n\n\n Promise ${argMessage} 클릭!`
    console.log(msg)
    console.log(JSON.stringify(params, null, 2))

    ACS.send(params).then(response => {
      console.log(`${argMessage}::in then!!`)
      if (response) {
        console.log('response: ' + JSON.stringify(response, null, 2));
      }
      else {
        console.log('response is undefined.');
      }
    }).catch(err => {
      console.log(`${argMessage}::in reject!!`)
      if (err) {
        console.log('err: ' + JSON.stringify(err, null, 2));
      }
      else {
        console.log('err is undefined.');
      }
    })
  }

 const App = () => {
  console.log("reactslimer is ready.")
  // LogBox.ignoreAllLogs()
   return (
     <SafeAreaView>
       <ScrollView>
       <Button title="home" onPress={onPress} />
       <Button title="SDK 초기화" color='navy' onPress={onPressInitSDK} />
       <Button title="SDK + CB 초기화" onPress={onPressInitSDKWithCB} />
       <Button title="SDK + CB 초기화 x5" color='navy' onPress={onPressInitSDKWithCBx5} />
       <Button title="SDK + Promise 초기화" onPress={onPressInitSDKWithPromise} />
       <Button title="Send + Promise 초기화 x5" color='navy' onPress={onPressInitSDKWithPromisex5} />
       <Button title="SDK Details" onPress={onPressSDKDetails} />
       <Button title="Send PL" color='navy' onPress={onPressSend} />
       <Button title="Send PL + CB" onPress={onPressSendWithCB} />
       <Button title="Send PL + Promise" color='navy' onPress={onPressSendWithPromise} />
       <Button title="Send PL + CB x5" onPress={onPressSendWithCBx5} />
       <Button title="Send PL + Promise x5" color='navy' onPress={onPressSendWithPromisex5} />
       <Button title="Send Buy + CB" onPress={onPressSendBuyWithCB} />
       <Button title="Send Buy + Promise" color='navy' onPress={onPressSendBuyWithPromise} />
       <Button title="Send AddCart + CB" onPress={onPressSendAddCartWithCB} />
       <Button title="Send AddCart + Promise" color='navy' onPress={onPressSendAddCartWithPromise} />
       <Button title="Send DelCart + CB" onPress={onPressSendDelCartWithCB} />
       <Button title="Send DelCart + Promise" color='navy' onPress={onPressSendDelCartWithPromise} />
       <Button title="Send AppearProduct + CB" onPress={onPressSendAppearProductWithCB} />
       <Button title="Send AppearProduct + Promise" color='navy' onPress={onPressSendAppearProductWithPromise} />
       <Button title="Send Link + CB" onPress={onPressSendLinkWithCB} />
       <Button title="Send Link + Promise" color='navy' onPress={onPressSendLinkWithPromise} />
       <Button title="Send Tel + CB" onPress={onPressSendTelWithCB} />
       <Button title="Send Tel + Promise" color='navy' onPress={onPressSendTelWithPromise} />
       <Button title="Send Join + CB" onPress={onPressSendJoinWithCB} />
       <Button title="Send Join + Promise" color='navy' onPress={onPressSendJoinWithPromise} />
       <Button title="Send Login + CB" onPress={onPressSendLoginWithCB} />
       <Button title="Send Login + Promise" color='navy' onPress={onPressSendLoginWithPromise} />
       <Button title="Send Leave + CB" onPress={onPressSendLeaveWithCB} />
       <Button title="Send Leave + Promise" color='navy' onPress={onPressSendLeaveWithPromise} />
       <Button title="Send Search + CB" onPress={onPressSendSearchWithCB} />
       <Button title="Send Search + Promise" color='navy' onPress={onPressSendSearchWithPromise} />
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
      </ScrollView>
    </SafeAreaView>
   );
 };
 
export default App;


