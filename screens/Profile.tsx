import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileCard from '../component/UI/ProfileCard'

type Props = {}

const Profile = (props: Props) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
        <ProfileCard/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})