import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MapScreen from './screens/map_screen';
import Contact from './screens/Contact_view';
import Report from './screens/report';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name}) => {
    return <MaterialCommunityIcons name={name} size={24} color="white" />;
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return(
        <Tab.Navigator
           
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#1b197a',
                    borderTopColor: '#ffffff',
                },
                tabBarActiveTintColor: '#ffffff',

            })}
            >

        <Tab.Screen
        name = "Map"
        component = {MapScreen}
        option={{ 
            headerShown: false ,
            tabBarLabel: '맵',
            tabBarIcon: props => TabIcon({...props, name:'map'}),
        }}
        />

        <Tab.Screen
        name = "Contacts"
        component = {Contact}
        option={{
            headerShown: false ,
            tabBarLabel: '연락처',
            tabBarIcon: props => TabIcon({...props, name:'contacts'})
        }}
        />
        <Tab.Screen
        name = "Report"
        component = {Report}
        option={{
            headerShown: false ,
            tabBarLabel: '연락처',
            tabBarIcon: props => TabIcon({...props, name:'alarm-light'})
        }}
       
        />

        <Tab.Screen
        name = "Share"
        component = {Contact}
        option={{
            headerShown: false ,
            tabBarLabel: '공유',
            tabBarIcon: props => TabShare({...props, name:'share-variant-outline'}),
        }}
        />

        </Tab.Navigator>
    );
};

export default TabNav;