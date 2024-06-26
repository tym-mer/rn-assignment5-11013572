import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../assets/profile.png'
import Search from '../assets/search.png'
import { useTheme } from '@react-navigation/native'

const ProfileSection = () => {
    const {colors} = useTheme()
  return (
    <View style={styles.container}>
        <View style={{display: 'flex', alignItems: 'center', gap: 10, flexDirection: 'row'}}>
            <Image source={Profile} style={{width: 60, height: 60}}/>
            <View>
                <Text style={{fontSize: 16, color: 'gray'}}>Welcome back,</Text>
                <Text style={{fontSize: 23, fontWeight: 'bold', color: colors.text}}>Tym-mer</Text>
            </View>
        </View>
        <View style={{width: 50, height: 50, backgroundColor:'#F4F4F4', borderRadius: 50, display: 'flex', alignItems:"center", justifyContent:'center'}}>
            <Image source={Search} style={{width: 30, height: 30}}/>
        </View>
    </View>
  )
}

export default ProfileSection

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40
    }
})