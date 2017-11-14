# ReactNativeARKit

This is a sample project to demonstrate how to use [`react-native-arkit`](https://github.com/HippoAR/react-native-arkit)

**Note**: ARKit is only supported by devices with A9 or later processors (iPhone 6s/7/SE/8/X, iPad 2017/Pro) on **iOS 11**. You also need **Xcode 9** to build the project.


## How to run the project

1. `git clone https://github.com/HippoAR/ReactNativeARKit.git`;
2. In the project folder, `yarn install` the dependencies (npm broken atm.)
3. Go to the `ios` folder and open `ReactNativeARKit.xcodeproj`. Build and run on your physical devices (ARKit doesn't run on simulators).
4. You also need to change the signing team 

Notice: the project is using "Release" config on run. If you want to debug and develop, change it to "Debug"
