'use strict';
var React = require("react-native");
 var {
   Text,
   View,
   ListView,
   StyleSheet
 } = React;

var styles = require("./style");
var mainView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GO GO GO
        </Text>
      </View>
     );
   }
 });

module.exports = mainView;
