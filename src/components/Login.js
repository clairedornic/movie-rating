import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'


class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text style={styles.title}>Movie Rating</Text>
                <Text style={styles.title2}>Login</Text>
                <TextInput 
                placeholder="Login or email"
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textinput}>
                </TextInput>
                <TouchableOpacity
                    accessibilityLabel="Log In"
                    onPress={() => this.props.navigation.navigate('My list')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },

    title: {
        fontSize: 45,
        fontWeight: '700',
        padding: 25
    },

    title2: {
        fontSize: 25
    },

    textinput: {
        width: "90%",
        margin: 10,
        padding: 10,
        backgroundColor: "#fff",
        color: "#000",
        height: 50,
    },

    btn: {
        padding: 10,
        backgroundColor: '#ff4d01',
        textAlign: 'center'
    },

    btnText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '600'
    }
  })

export default Login