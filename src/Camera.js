import { useCameraDevices } from 'react-native-vision-camera'
import { useEffect, useState, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import AppContext from './lib/context';
import GameLogic from './lib/gameLogic';

const LoadingView = () => <Text>Carregando...</Text>
const NoPermission = () => <Text>Avalon precisa de permissões da câmera para ler o QR Code</Text>

export default CameraPage = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const context = useContext(AppContext);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    checkCameraPermission();
  })


  useEffect(() => {
    if (barcodes.length > 0) {
        context.dispatch({ type: 'SET_GAME', payload: JSON.parse(barcodes[0].displayValue) })
        // const game = new GameLogic(context.app.players)
        // context.dispatch({ type: 'SET_PLAYERS', payload: game.sortCharacters(context.app.rules, context.app.seed + context.app.game) })
        // console.log('AFTER: ' + JSON.stringify(context.app.players))
        navigation.replace('Player')
    }
  }, [barcodes])

  const checkCameraPermission = async () => {
    try {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      setCameraPermission(cameraPermission === 'authorized')

      if (cameraPermission !== 'authorized') {
        const newCameraPermission = await Camera.requestCameraPermission()

        setCameraPermission(newCameraPermission === 'authorized')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (device == null) return <LoadingView />
  if (!cameraPermission) return <NoPermission />

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  )
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});