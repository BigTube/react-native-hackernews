'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;
var mainView = require('./src/component/main/');
var bigtubeHackernews = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: mainView,
          title: 'HackerNews',
          passProps: { myProp: 'foo' },
        }}
      />
    );
  }
});

AppRegistry.registerComponent('bigtubeHackernews', () => bigtubeHackernews);
