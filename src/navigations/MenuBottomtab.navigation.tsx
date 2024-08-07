import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home, Informacoes} from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome5, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { colors } from "../styles/colors"
import { MessageNavigation } from './menssage.navigaton'


type MenuTabParam = {
    Home: undefined
    Cardápio: undefined
    Mensagem: undefined

}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator screenOptions={{ 
            tabBarActiveBackgroundColor: 'rgba(232, 216, 197, 1)',
                tabBarActiveTintColor: colors.principal,
                headerShown: false,
                tabBarInactiveBackgroundColor: 'rgba(232, 216, 197, 1)',
                tabBarInactiveTintColor: colors.branco,
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Cardápio" component={Informacoes}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons name="book-open" size={24} color="black" />
                    )
                    
                }}

            />
            <Tab.Screen name="Mensagem" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="envelope" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )

}