import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

class Dashboard extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.CardView}>
                    <View style={styles.CardViewSub}>
                        <Text>Dashboard</Text>
                        <TouchableHighlight
                            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                        >
                            <Image source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                        </TouchableHighlight>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            < View style={{ width: 50, height: 50, backgroundColor: 'orange' }} />
                            < View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
                        </View>
                    </View>
                </View>


                <View style={styles.CardView}>
                    <View style={styles.CardViewSub}>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',padding:10 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    < View style={{ color: '#acacac', textAlign: 'right' }}>
                                        <Text>Total Groups</Text>
                                    </View>
                                    < View>
                                        <Text style={{ fontSize: 24 }}>3/8</Text>
                                    </ View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                < View>
                                    <Text style={{ color: '#acacac', textAlign: 'right' }}>Bid</Text>
                                </View>
                                < View>
                                    <Text style={{ fontSize: 24 }}>Krishnan RA</Text>
                                </ View>
                            </View>
                        </View>


                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    < View>
                                        <Text style={{ color: '#acacac' }}>Loan Taken</Text>
                                    </View>
                                    < View>
                                        <Text style={{ fontSize: 24 }}>42,000</Text>
                                    </ View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                < View>
                                    <Text style={{ color: '#acacac' }}>Earned</Text>
                                </View>
                                < View>
                                    <Text style={{ fontSize: 24 }}>3600</Text>
                                </ View>
                            </View>
                        </View>

                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',

    },
    CardView: {
        
        height: 150,
        alignSelf: "stretch",
        alignItems: 'center',
    },
    CardViewSub: {
        backgroundColor: 'white',
        height: 130,
        // alignSelf: "stretch",
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: '98%',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#aeaeae',
        shadowOffset: { height: 0, width: 0 },

    },
    profileImgContainer: {
        marginLeft: 8,
        height: 42,
        width: 42,
        borderRadius: 40,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
})

export default Dashboard;