import React from 'react';
import { Text, View, Image } from 'react-native';

import CustomButton from './custombutton'
import { styles } from './assets/css/App.js'

import logo from './assets/shudhi_logo.png'
import donar from './assets/donate-solid.png'
import ngo from './assets/hand-holding-heart-solid.png'
import volunteer from './assets/fist-raised-solid.png'

export default class HomeScreen extends React.Component {

    render() {
        const onPressLearnMore = () => {
            this.props.navigation.push('Ngo')
            console.log("working1qw")
        }

        const iconArray = [{ id: '1', name: 'NGO', icon: ngo, color: '#00AFEF' },
        { id: '2', name: 'VOLUNTEER', icon: volunteer, color: '#006CA8' },
        { id: '3', name: 'DONAR', icon: donar, color: '#00A859' }
        ]

        return (
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Text style={styles.homeTagContent}>Let your life be an </Text>
                <Text style={styles.homeTagContent}>inspiration</Text>
                <Text style={styles.homeTextContent}>Are you a :</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {iconArray && iconArray.map(data => (
                        <View key={data.id}>
                            <CustomButton
                                onPress={onPressLearnMore}
                                images={data.icon}
                            />
                            <Text style={{ top: 290, textAlign: 'center', color: data.color, fontWeight: 'bold', width: 90 }}>{data.name}</Text>
                        </View>
                    ))}
                </View>

            </View>
        );
    }
}



