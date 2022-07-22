import { StyleSheet } from 'react-native'
import React from 'react'
import { Appbar, Menu } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'

export default function CustomNavigationBar({navigation, back}) {
    const [visible, setVisible] = React.useState(false)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)
    return (
        <Appbar.Header style={styles.container}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="Facilita Imóveis" />
            {!back ? (
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action icon="menu" color='white' style={{borderRadius: 50, backgroundColor:"transparent"}} size={22} onPress={openMenu} />
                    }>
                        <Menu.Item onPress={() => {console.log('Option 1 pressed')}} icon="briefcase-plus-outline" title="Anunciar"/>
                        <Menu.Item onPress={() => {console.log('Option 2 pressed')}} icon="calendar-clock-outline" title="Diárias"/>
                        <Menu.Item onPress={() => {console.log('Option 3 pressed')}} icon="home-city-outline" title="Mensal"/>
                        <Menu.Item onPress={() => {console.log('Option 2 was pressed ;) morça')}} icon="account-arrow-right-outline" title="Sair"/>
                </Menu>
            ) : null}
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#474747"
    }
})