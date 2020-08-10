import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';


import PageHeader from '../../components/PageHeader';

//import styles from './styles';

function Favorites() {

    return (
        <View>
            <PageHeader title="Meus Proffys favoritos.">

            </PageHeader>
        </View>
    );
}

export default Favorites;