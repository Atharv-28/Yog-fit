import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as posenet from '@tensorflow-models/posenet';
import { useNavigation } from "@react-navigation/native";



const Tracker = () => {
  const navigation = useNavigation();

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

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

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
      <TouchableOpacity onPress={() => navigateToScreen("TemplatesPage")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/189/189254.png",
            }}
            style={styles.img}
          />
        </TouchableOpacity>
      <Camera
        style={styles.camera}
        type={cameraType}
        onCameraReady={() => console.log('Camera is ready')}
        onMountError={(error) => console.log('Camera Error: ', error)}
        ratio={'16:9'}
      >
        <ImageBackground
          style={{ flex: 0.8, resizeMode: 'cover', justifyContent: 'center',alignContent:"center", opacity: 0.3 }}
          source={{ uri: 'https://cdn.yogajournal.com/wp-content/uploads/2007/08/Cobra-Pose_Andrew-Clark.gif?width=730' }}
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
          style={styles.button}
          onPress={flipCamera}
        >
          <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/128/1829/1829373.png"}}
            style={styles.butImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isPlaying ? '#ff0000' : '#00ff00' }]}
          onPress={isPlaying ? stopTimer : startTimer}
        >
          <Image 
            style={styles.butImage}
            source={isPlaying? {uri:"https://cdn-icons-png.flaticon.com/128/4340/4340168.png"}:{uri:"https://cdn-icons-png.flaticon.com/128/10109/10109952.png"}}
          />
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
  img: {
    marginTop: 40,
    marginLeft:10,
    height: 50,
    width: 50,
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
  butImage:{
    height:40,
    width:40,
  },
  button: {
    borderRadius: 50,
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
