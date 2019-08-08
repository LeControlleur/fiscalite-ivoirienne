import { createStackNavigator, createAppContainer } from "react-navigation" 
import Formations from "../../screens/education/Formations"

const FormationsStackNavigator = createStackNavigator({
    Formations: {
        screen: Formations,
        navigationOptions: {
            title: "Formations fiscale"
        }
    }
})

export default createAppContainer(FormationsStackNavigator)