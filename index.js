// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, View } from 'react-native';
import React, { Component } from 'react';

const diffuse = 'white';

const PlaneCursor = withProjectedPosition()(({ positionProjected }) => {
  if (!positionProjected) return null;
  return (
    <ARKit.Group>
      <ARKit.Torus
        position={positionProjected}
        transition={{ duration: 0.1 }}
        shape={{ ringR: 0.1, pipeR: 0.01 }}
        material={{
          lightingModel: ARKit.LightingModel.Constant,
          color: '#DA1182'
        }}
      />
      <ARKit.Light
        position={positionProjected}
        type={ARKit.LightType.Omni}
        color="#DA1182"
      />
    </ARKit.Group>
  );
});

const ObjectCursor = withProjectedPosition()(({ positionProjected }) => {
  if (!positionProjected) return null;
  return (
    <ARKit.Group>
      <ARKit.Sphere
        position={positionProjected}
        transition={{ duration: 0.1 }}
        shape={{ radius: 0.01 }}
        material={{
          lightingModel: ARKit.LightingModel.Constant,
          color: '#4C92EF'
        }}
      />
      <ARKit.Light
        position={positionProjected}
        type={ARKit.LightType.Omni}
        color="#4C92EF"
      />
    </ARKit.Group>
  );
});

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class ReactNativeARKit extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug
          planeDetection
          lightEstimationEnabled
          onPlaneDetected={console.log} // event listener for plane detection
          onPlaneUpdate={console.log} // event listener for plane update
        >
          <ARKit.Box
            id="object_1"
            position={{ x: 0, y: 0, z: 0 }}
            shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
            material={{ diffuse }}
          />
          <ARKit.Sphere
            id="object_2"
            position={{ x: 0.2, y: 0, z: 0 }}
            shape={{ radius: 0.05 }}
            material={{ diffuse }}
          />
          <ARKit.Cylinder
            id="object_3"
            position={{ x: 0.4, y: 0, z: 0 }}
            shape={{ radius: 0.05, height: 0.1 }}
            material={{ diffuse }}
          />
          <ARKit.Cone
            id="object_4"
            position={{ x: 0.0, y: 0.2, z: 0 }}
            shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
            material={{ diffuse }}
          />
          <ARKit.Pyramid
            id="object_5"
            position={{ x: 0.2, y: 0.15, z: 0 }}
            shape={{ width: 0.1, height: 0.1, length: 0.1 }}
            material={{ diffuse }}
          />
          <ARKit.Tube
            id="object_6"
            position={{ x: 0.4, y: 0.2, z: 0 }}
            shape={{ innerR: 0.03, outerR: 0.05, height: 0.1 }}
            material={{ diffuse }}
          />
          <ARKit.Torus
            id="object_7"
            position={{ x: 0, y: 0.4, z: 0 }}
            shape={{ ringR: 0.06, pipeR: 0.02 }}
            material={{ diffuse }}
          />
          <ARKit.Capsule
            id="object_8"
            position={{ x: 0.2, y: 0.4, z: 0 }}
            shape={{ capR: 0.02, height: 0.06 }}
            material={{ diffuse }}
          />
          <ARKit.Plane
            id="object_9"
            position={{ x: 0.4, y: 0.4, z: 0 }}
            shape={{ width: 0.1, height: 0.1 }}
            material={{ diffuse }}
          />
          <ARKit.Text
            id="object_11"
            text="ARKit is Cool!"
            position={{ x: 0, y: 0.6, z: 0 }}
            eulerAngles={{ y: 3.14 / 6 }}
            font={{ size: 0.15, depth: 0.05 }}
            material={{ diffuse }}
          />
          <ARKit.Text
            text="made by react-native-arkit"
            frame="FrontOfCamera"
            position={{ x: 0, y: 0, z: 0 }}
            font={{ size: 0.01, depth: 0.002 }}
            material={{ diffuse: 'blue' }}
          />
          <ARKit.Model
            id="object_10"
            position={{ x: -0.2, y: 0, z: 0 }}
            model={{ file: 'art.scnassets/ship.scn', scale: 0.03 }}
          />

          <ARKit.Light
            position={{ x: 1, y: 3, z: 2 }}
            type={ARKit.LightType.Omni}
            color="white"
          />
          <ARKit.Light
            position={{ x: 0, y: 1, z: 0 }}
            type={ARKit.LightType.Spot}
            eulerAngles={{ x: -Math.PI / 2 }}
            spotInnerAngle={45}
            spotOuterAngle={45}
            color="green"
          />

          <PlaneCursor
            projectPosition={{
              x: windowWidth / 2,
              y: windowHeight / 2,
              // take first detected feature plane
              plane: results => (results.length > 0 ? results[0] : null)
            }}
          />
          <ObjectCursor
            projectPosition={{
              x: windowWidth / 2,
              y: windowHeight / 2,
              node: results => {
                const filtered = results.filter(r =>
                  r.id.startsWith('object_')
                );
                // take last detected object
                return filtered.length > 0 ? filtered[0] : null;
              }
            }}
          />
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);
