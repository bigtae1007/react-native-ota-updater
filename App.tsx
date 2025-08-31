/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={[
        backgroundStyle,
        { backgroundColor: "#fff", flex: 1, padding: 30 },
      ]}
    >
      <Text
        style={{
          alignContent: "center",
          textAlign: "center",
          fontSize: 30,
          marginTop: 40,
        }}
      >
        Rn Ota Updater Test
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          gap: 10,
          marginTop: 50,
        }}
      >
        <View style={styles.flexStyle}>
          <Text>Current Version :</Text>
          <Text>0.0.111</Text>
        </View>
        <View style={styles.flexStyle}>
          <Text>Example</Text>
          <Text>첫 빌드 단계입니다.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    gap: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
