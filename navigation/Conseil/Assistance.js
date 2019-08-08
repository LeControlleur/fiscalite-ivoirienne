import { createStackNavigator, createAppContainer } from "react-navigation" 
import Assistance from "../../screens/conseil/Assistance"

const AssistanceStackNavigator = createStackNavigator({
    Assistance: {
        screen: Assistance,
        navigationOptions: {
            title: "Assistance juridique et fiscale"
        }
    }
})

export default createAppContainer(AssistanceStackNavigator)