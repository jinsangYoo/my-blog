import {useEffect} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';

function CloudMessaging() {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    requestUserPermission();
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
  }

  async function requestUserPermission() {
    const authorizationStatus = await messaging().requestPermission();
    const enabled =
      authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL;
    // 권한상태 (-1: 요청 안함, 0: 거부, 1: 수락, 2: 임시권한)
    console.log(
      `enabled: ${enabled}, Authorization status: ${authorizationStatus}`,
    );

    switch (authorizationStatus) {
      case 0:
        console.log(`${authorizationStatus}: 거부`);
        checkToken();
        break;
      case 1:
        console.log(`${authorizationStatus}: 수락`);
        // 토큰 요청
        checkToken();

        // 앱 꺼져있을 때
        messaging()
          .getInitialNotification()
          .then(remoteMessage => handleCloudMsg(remoteMessage));

        // background에서만 작동
        messaging().onNotificationOpenedApp(remoteMessage => {
          handleCloudMsg(remoteMessage);
        });
        break;
      case 2:
        console.log(`${authorizationStatus}: 임시권한`);
        break;
      default:
        break;
    }
  }

  // 토큰 요청: 추후 필요할 예정
  function checkToken() {
    messaging()
      .getToken()
      .then(token => {
        console.log('token:', token);
      });
  }

  async function handleCloudMsg(
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) {
    if (remoteMessage) {
      if (remoteMessage.data) {
        // 내가 원하는 액션이 작동하게 하기
        console.log(
          `remoteMessage.data:, ${JSON.stringify(remoteMessage.data, null, 2)}`,
        );
      } else {
        console.log('remoteMessage.data is invalid');
      }
    } else {
      console.log('remoteMessage is invalid');
    }
  }

  return null;
}

export default CloudMessaging;
