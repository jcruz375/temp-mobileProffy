import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';


import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList() {

    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis.">

            </PageHeader>
        </View>
    );
}

export default TeacherList;