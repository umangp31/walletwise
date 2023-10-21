import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseGroupCard from '../../../component/UI/ExpenseGroupCard'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Groups = (props: Props) => {
  return (
    <SafeAreaView style={{paddingHorizontal:10,gap:12}}  >
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
      <ExpenseGroupCard/>
    </SafeAreaView>
  )
}

export default Groups

const styles = StyleSheet.create({})