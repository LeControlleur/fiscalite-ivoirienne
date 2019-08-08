import { createStackNavigator, createAppContainer } from "react-navigation" 
import Audit from "../../screens/conseil/Audit"

const AuditStackNavigator = createStackNavigator({
    Audit: {
        screen: Audit,
        navigationOptions: {
            title: "Audit et Consulting"
        }
    }
})

export default createAppContainer(AuditStackNavigator)