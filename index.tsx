import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root-navigation";
import { store, persistor } from "./src/store/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaView, StyleSheet } from "react-native";
import { theme } from "./src/ui";

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

registerRootComponent(App);

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: theme.colors.background },
});
