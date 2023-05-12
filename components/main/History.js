import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ItemHistory from './ItemHistory';
import { intiState } from './Home';

export default function History({navigation}) {
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  var history = useSelector((state) => {
    return state.historyItem;
  });
  history = history.reverse()
  var data = []
  history.forEach((id) => {
    intiState.home.forEach((item) => {
      if(item.id === id.idHistoryTruyen){
        data = [...data, item]
      }
    })
  })
  return (
    <ScrollView style={{backgroundColor: theme.theme === "white" ? "#ddd" : "black" }} >
      {data.map((item) => {
        return <ItemHistory item={item} key={item.id} navigation={navigation}/>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})