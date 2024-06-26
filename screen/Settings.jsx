import { Appearance, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

const toggleTheme = () => {
    const currentScheme = Appearance.getColorScheme();
    Appearance.setColorScheme(currentScheme === 'dark' ? 'light' : 'dark');
  };

const settingData = [
    {
        name: 'Language',
    },
    {
        name: 'My Profile',
    },
    {
        name: 'Contact Us',
    },
    {
        name: 'Change Password',
    },
    {
        name: 'Privacy Policy',
    },
]

const Settings = () => {

    const {colors} = useTheme()
  return (
    <View style={{backgroundColor: colors.background}}>
      <Text style={{textAlign: 'center', paddingVertical: 30, fontSize: 28, fontWeight: 'bold', color: colors.text}}>Settings</Text>
        <View style={{paddingTop: 20, }}>
            {
                settingData.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1, borderColor: 'gray', marginHorizontal: 20}}>
                            <Text style={{fontSize: 23, paddingBottom: 5, marginTop: 25, color: colors.text}}>{item.name}</Text>
                            <Icon name="chevron-forward" size={25} color={colors.text} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 40}}>
            <Text style={{fontSize: 24, color: colors.text}}>Theme</Text>
            <Switch value={Appearance.getColorScheme() === 'dark'} onValueChange={toggleTheme} /> 
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})
