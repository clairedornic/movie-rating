import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

class Logout extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(

            <View style={styles.main_container}>
                <Text style={styles.title2}>Logout</Text>
                <TouchableOpacity
                    accessibilityLabel="Log Out"
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Log Out</Text>
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
  
      title2: {
          fontSize: 25,
          fontWeight: '700',
          margin: 30,
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

export default Logout