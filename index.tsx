import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root-navigation";
import { store, persistor } from "./src/store/app/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

registerRootComponent(App);
