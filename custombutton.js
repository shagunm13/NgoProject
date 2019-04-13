import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

class customButton extends Component {
    render() {
        const { images, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => onPress()}
            >
                <Image source={images} style={styles.image} />
            </TouchableOpacity>
        );
    }
}



const styles = StyleSheet.create({
    image: {
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto'

    },

    buttonStyle: {
        top: 270,
        height: 90,
        width: 90,
        borderRadius: 45,
        borderColor: '#ebebeb',
        borderWidth: 0.5,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderBottomColor: '#DCDCDC',
    }
});

export default customButton;