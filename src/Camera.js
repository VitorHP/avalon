import { useCameraDevices } from 'react-native-vision-camera'
import { useEffect, useState, } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const LoadingView = () => <Text>Carregando...</Text>
const NoPermission = () => <Text>Avalon precisa de permissões da câmera para ler o QR Code</Text>

export default CameraPage = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  useEffect(() => {
    checkCameraPermission();
  })

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
    />
  )
}