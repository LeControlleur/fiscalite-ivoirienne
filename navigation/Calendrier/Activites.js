import { createStackNavigator, createAppContainer } from "react-navigation" 
import Activites from "../../screens/calendrier/Activites"

const ActivitesStackNavigator = createStackNavigator({
    Activites: {
        screen: Activites,
        navigationOptions: {
            title: "Nature des activités"
        }
    }
})

export default createAppContainer(ActivitesStackNavigator)