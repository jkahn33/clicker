import React from 'react';
import HomeClickerPage from '../admin/HomeClickerPage';
import Profile from '../admin/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function UserTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeClickerPage} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

export default function BottomTabNav(props) {
  // TODO replace with some sort of dynamic variable
  // const isStoreEmployee = true;
  // if (isStoreEmployee) {
  //   return <EventPlannerTabs />;
  // }
  // return <NonEventPlannerTabs />;\
  return <UserTabs />;
}
