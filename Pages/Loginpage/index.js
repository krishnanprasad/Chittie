import React, { Component } from 'react'
import { View } from 'react-native'

class LoginPage extends Component {
    state = {
        placename: ""
    };
    placeNameChangeHandler = val => {
        this.setState({
            placename: val
        });
    };
    onPress = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.LoginFont}>Welcome to Chittie</Text>

                <TextInput
                    style={styles.textbox}
                    onChangeText={this.placeNameChangeHandler}
                    value={this.state.text}
                    placeholder="Enter Phone Number"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                    activeOpacity={0.8}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d8d8d8",
        width: 150,
        borderRadius: 5
    },
    textbox: {
        height: 50,
        width: 350,
        color: 'black',
        borderRadius: 4,
        backgroundColor: "white",
        padding: 10,
        height: 50,
        marginBottom: 10,
        borderBottomColor: "#2d0000",
        borderWidth: 1
    },
    LoginFont: {
        fontSize: 32,
        marginBottom: 20
    },
});
export default LoginPage