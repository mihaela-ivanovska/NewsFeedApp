import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './stylesSettings';
import { Ionicons } from '@expo/vector-icons';
export const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <Text style={styles.title}>Select a Language</Text>
        <Ionicons color='#444' size={28} name='ios-language-outline' />
      </View>
      <Pressable>
        <Text style={[styles.text]}>EN</Text>
      </Pressable>
      <Pressable>
        <Text style={[styles.text]}>BG</Text>
      </Pressable>
    </View>
  );
};
