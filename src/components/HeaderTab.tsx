import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTab = () => {
    const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <View style={styles.headerTab}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab===props.text?"black":"white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            marginBottom:10
        }}
        onPress={()=>props.setActiveTab(props.text)}
    >
        <Text style={{ color:props.activeTab===props.text?'white':'black', fontSize:16,fontWeight:900 }}>{props.text}</Text>
    </TouchableOpacity>
)

export default HeaderTab

const styles = StyleSheet.create({
    headerTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor:'#efefef'
    },
})