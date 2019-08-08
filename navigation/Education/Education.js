import { createStackNavigator, createAppContainer } from "react-navigation" 
import Education from "../../screens/education/Education"

const EducationStackNavigator = createStackNavigator({
    Education: {
        screen: Education,
        navigationOptions: {
            title: "Education au civisme fiscal"
        }
    }
})

export default createAppContainer(EducationStackNavigator)