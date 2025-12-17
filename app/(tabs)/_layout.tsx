import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { COLOR } from '@/constant/color'

const TabLayouts = () => {
    return <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLOR.active,
            tabBarInactiveTintColor: COLOR.inactive,
            tabBarStyle: {
                backgroundColor: COLOR.background,
                borderTopColor: COLOR.border,
                paddingBottom: 10,
                paddingTop: 8,
                height: 60,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600",
            },
        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ),
            }}
        />

        <Tabs.Screen
            name="recipe"
            options={{
                title: "Recipes",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cafe-outline" size={size} color={color} />
                ),
            }}
        />
    </Tabs>
}

export default TabLayouts