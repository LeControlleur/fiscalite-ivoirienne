import { createStackNavigator, createAppContainer } from "react-navigation" 
import Impot from "../../screens/calendrier/Impot"

const ImpotStackNavigator = createStackNavigator({
    Impot: {
        screen: Impot,
        navigationOptions: {
            title: "Nature des impots"
        }
    }
})

export default createAppContainer(ImpotStackNavigator)