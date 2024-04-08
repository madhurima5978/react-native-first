import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ContactsMenu from "../components/Room/ContactsMenu";
import Header from "../components/Room/Header";
import MenuButtons from "../components/Room/MenuButtons";
import SearchBar from "../components/Room/SearchBar";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
