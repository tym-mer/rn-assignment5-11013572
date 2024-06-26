import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import ProfileSection from '../components/ProfileSection'
import Card from '../assets/Card.png'
import Send from '../assets/send.png'
import Recieve from '../assets/recieve.png'
import Loan from '../assets/loan.png'
import Topup from '../assets/topUp.png'
import { useTheme } from '@react-navigation/native'
import Apple from '../assets/apple.png'
import Spotify from '../assets/spotify.png'
import Transfer from '../assets/moneyTransfer.png'
import Grocery from '../assets/grocery.png'
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
    {id: 1, name: 'Apple Store', text: 'Entertainment', amount: '-$5,99', image: Apple},
    {id: 2, name: 'Spotify', text: 'Music', amount: '-$12,99', image: Spotify},
    {id: 3, name: 'Money Transfer', text: 'Transaction', amount: '$300', image: Transfer},
    {id: 4, name: 'Grocery', text: 'Shopping', amount: '-$88', image: Grocery},
]

const Home = () => {
    const {colors} = useTheme()

    const renderItem = () => {
        return(
            <View style={{marginTop: 10, display:'flex', gap: 15}}>
                {
                    data.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  paddingHorizontal: 20}}>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                    <View style={{width: 50, height: 50, backgroundColor: '#f4f4f4', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <Image source={item.image} style={{}}/>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>{item.name}</Text>
                                        <Text style={{color: colors.text}}>{item.text}</Text>
                                    </View>
                                </View>
                                <Text style={{color: colors.text, fontSize: 18}}>{item.amount}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

  return (
    <SafeAreaView>
        <ProfileSection/>
        <View style={{display: 'flex', alignItems: 'center', marginHorizontal: 20}}>
            <Image source={Card} style={{width: 380, height: 240, borderRadius: 30}}/>
        </View>
        <View style={{display: 'flex', alignItems: 'center', gap: 10, flexDirection: 'row', marginVertical: 30, justifyContent: 'space-evenly'}}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 60, height: 60, borderRadius: 50, backgroundColor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name='arrow-up' size={25} color={colors.text}/>
                </TouchableOpacity>
                <Text style={{color: colors.text}}>Send</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 60, height: 60, borderRadius: 50, backgroundColor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name='arrow-down' size={25} color={colors.text}/>
                </TouchableOpacity>
                <Text style={{color: colors.text}}>Recieve</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 60, height: 60, borderRadius: 50, backgroundColor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Loan} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <Text style={{color: colors.text}}>Loan</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 60, height: 60, borderRadius: 50, backgroundColor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Topup} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <Text style={{color: colors.text}}>Top Up</Text>
            </View>
            
        </View>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>Transaction</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 20, color: 'blue'}}>See All</Text>
            </TouchableOpacity> 
        </View>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    
})