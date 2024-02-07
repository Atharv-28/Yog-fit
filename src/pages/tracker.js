import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as posenet from '@tensorflow-models/posenet';


const Tracker = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [net, setNet] = useState(null);
  const [detectedPose, setDetectedPose] = useState(null);
  const [referencePoses, setReferencePoses] = useState([]);
  const [poseCorrect, setPoseCorrect] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const timerRef = useRef(null);

  useEffect(() => {
    const loadPoseNet = async () => {
      const net = await posenet.load();
      setNet(net);
    };

    loadPoseNet();
  }, []);

  const handleCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  const loadReferencePoses = async () => {
    const posesWithImages = await Promise.all(
      referencePoses.map(async (pose) => {
        const image = await Image.resolveAssetSource({ uri: pose.imageUri });
        const net = await posenet.load();
        const imageTensor = await netUtil.fetch(image.uri, {}, { isBinary: true });
        const poseEstimation = await net.estimateSinglePose(imageTensor, {
          flipHorizontal: false,
        });

        return {
          name: pose.name,
          keypoints: poseEstimation.keypoints,
        };
      })
    );

    setReferencePoses(posesWithImages);
  };

  useEffect(() => {
    // Load reference poses when the component mounts
    loadReferencePoses();
  }, []);

  const isYogaPoseCorrect = (detectedPose, referencePose) => {
    const distanceThreshold = 20;

    const areAllKeypointsCorrect = referencePose.keypoints.every((refKeypoint) => {
      const detectedKeypoint = detectedPose.keypoints.find((dKey) => dKey.part === refKeypoint.part);

      if (!detectedKeypoint) {
        return false;
      }

      const distance = Math.sqrt(
        Math.pow(detectedKeypoint.position.x - refKeypoint.position.x, 2) +
        Math.pow(detectedKeypoint.position.y - refKeypoint.position.y, 2)
      );

      return distance <= distanceThreshold;
    });

    return areAllKeypointsCorrect;
  };

  const handleCameraStream = async (camera) => {
    const options = {
      flipHorizontal: false,
      maxDetections: 1,
      scoreThreshold: 0.5,
    };

    const imageTensor = await camera.takePictureAsync({
      base64: true,
    });

    const pose = await net.estimateSinglePose(imageTensor.base64, options);
    setDetectedPose(pose);

    // Check if the yoga pose is correct for each reference pose
    const correctPose = referencePoses.find((refPose) =>
      isYogaPoseCorrect(pose, refPose)
    );

    setPoseCorrect(correctPose ? correctPose.name : null);
  };

  const startTimer = () => {
    setIsPlaying(true);
    setTimer(0);
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsPlaying(false);
    clearInterval(timerRef.current);
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  useEffect(() => {
    if (isPlaying && poseCorrect) {
      // You can add your logic here when the pose is correct
      console.log('Correct Pose!');
    }
  }, [isPlaying, poseCorrect]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={cameraType}
        onCameraReady={() => console.log('Camera is ready')}
        onMountError={(error) => console.log('Camera Error: ', error)}
        ratio={'16:9'}
      >
        <ImageBackground
          style={{ flex: 0.8, resizeMode: 'cover', justifyContent: 'center' }}
          source={{ uri: 'https://i.imgur.com/YOUR_BACKGROUND_IMAGE_URL.jpg' }}
        >
          {detectedPose && (
            <View
              style={[
                styles.poseContainer,
                { borderColor: poseCorrect ? '#00ff00' : '#ff0000' },
              ]}
            >
              <Text style={styles.poseText}>
                Detected Pose: {detectedPose.keypoints[0].part} (
                {detectedPose.keypoints[0].position.x.toFixed(2)},{' '}
                {detectedPose.keypoints[0].position.y.toFixed(2)})
              </Text>
              {poseCorrect !== null && (
                <Text style={styles.correctnessText}>
                  {`Correct Pose: ${poseCorrect}`}
                </Text>
              )}
              {/* Display coordinates for other keypoints if needed */}
            </View>
          )}
        </ImageBackground>
      </Camera>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isPlaying ? '#ff0000' : '#00ff00' }]}
          onPress={isPlaying ? stopTimer : startTimer}
        >
          <Text style={styles.buttonText}>{isPlaying ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={flipCamera}
        >
          <Text style={styles.buttonText}>Flip Camera</Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>{`Timer: ${timer}s`}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 0.9,
  },
  poseContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  poseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  correctnessText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "green",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tracker;
