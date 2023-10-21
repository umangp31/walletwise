import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../component/UI/Container'
import useProfile from '../../hooks/useProfile'

type Props = {}

const Account = (props: Props) => {
  const { data, error, isLoading } = useProfile("test");
  if (isLoading) {
    return <Container>
      <ActivityIndicator size={"large"} />
    </Container>
  }
  if (error) {
    console.log(error)
  }
  if (data) {
    return (
      <Container>
        <View
          style={{
            flexDirection: "row",
            justifyContent:"space-between",
            alignItems:"center",
            padding:12
          }}
        >
          <View>
            <Image
              source={{
                uri: data.avatar
              }}
              height={100}
              width={100}
              style={{
                borderRadius: 50
              }}
            />
          </View>
        </View>
          <Text style={{fontSize:20}}>Hello {data?.name ?? ""}</Text>
        <Text>@{data.username}</Text>
      </Container>
    )
  }
}

export default Account

const styles = StyleSheet.create({})