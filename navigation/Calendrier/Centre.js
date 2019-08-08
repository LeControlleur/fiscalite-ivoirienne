import { createStackNavigator, createAppContainer } from "react-navigation" 
import Centre from "../../screens/calendrier/Centre"

const CentreStackNavigator = createStackNavigator({
    Centre: {
        screen: Centre,
        navigationOptions: {
            title: "Centre d'imposition"
        }
    }
})

export default createAppContainer(CentreStackNavigator)