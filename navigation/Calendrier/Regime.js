import { createStackNavigator, createAppContainer } from "react-navigation" 
import Regime from "../../screens/calendrier/Regime"

const RegimeStackNavigator = createStackNavigator({
    Apprentissage: {
        screen: Regime,
        navigationOptions: {
            title: "Regime d'imposition"
        }
    }
})

export default createAppContainer(RegimeStackNavigator)