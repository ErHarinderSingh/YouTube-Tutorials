/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import Setup from './Setup';

AppRegistry.registerComponent(appName, () => Setup);
