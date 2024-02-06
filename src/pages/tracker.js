import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import * as posenet from '@tensorflow-models/posenet';

const Tracker = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [net, setNet] = useState(null);
  const [detectedPose, setDetectedPose] = useState(null);
  const [poseCorrect, setPoseCorrect] = useState(null);

  useEffect(() => {
    const loadPoseNet = async () => {
      const net = await posenet.load();
      setNet(net);
    };

    loadPoseNet();
  }, []);

  const handleCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  const referencePoses = [
    {
      name: 'Mountain Pose',
      keypoints: [
        { part: 'nose', position: { x: 0, y: 0 } },
        // ... Add other keypoints as needed
      ],
    },
    {
      name: 'Downward-Facing Dog',
      keypoints: [
        { part: 'nose', position: { x: 0, y: 0 } },
        // ... Add other keypoints as needed
      ],
    },
    {
      name: 'Warrior I',
      keypoints: [
        { part: 'nose', position: { x: 0, y: 0 } },
        // ... Add other keypoints as needed
      ],
    },
    {
      name: 'Tree Pose',
      keypoints: [
        { part: 'nose', position: { x: 0, y: 0 } },
        // ... Add other keypoints as needed
      ],
    },
    {
      name: 'Child Pose',
      keypoints: [
        { part: 'nose', position: { x: 0, y: 0 } },
        // ... Add other keypoints as needed
      ],
    },
  ];

  const isYogaPoseCorrect = (detectedPose, referencePose) => {
    // Compare detected pose with reference pose
    // You may need to implement a more sophisticated comparison logic based on your requirements
    // Here, we're just checking if the first keypoint (nose) is detected
    return detectedPose.keypoints[0].part === referencePose.keypoints[0].part;
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
        type={type}
        onCameraReady={() => console.log('Camera is ready')}
        onMountError={(error) => console.log('Camera Error: ', error)}
        ratio={'16:9'}
      >
        <ImageBackground
          style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
          source={{ uri: 'https://i.imgur.com/YOUR_BACKGROUND_IMAGE_URL.jpg' }}
        >
          {detectedPose && (
            <View style={styles.poseContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  poseContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    color: '#00ff00', // Green for correct, you can customize the color
  },
});

export default Tracker;