import { createStackNavigator, createAppContainer } from "react-navigation" 
import Apprentissage from "../../screens/education/Apprentissage"

const ApprentissageStackNavigator = createStackNavigator({
    Apprentissage: {
        screen: Apprentissage,
        navigationOptions: {
            title: "Apprentissage"
        }
    }
})

export default createAppContainer(ApprentissageStackNavigator)