import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from './stylesSettings';
import { Ionicons } from '@expo/vector-icons';
import { Language } from "../../constants";
import { SET_LANGUAGE } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Settings: React.FC = () => {
    const dispatch: Function = useDispatch();
    const [selectedLan, setSelectedLan] = useState(Language.english);
    const onLanguageClicked = (language) => {
        dispatch({
            type: SET_LANGUAGE,
            payload: language,
          });
          setSelectedLan(language);
    };
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <Text style={styles.title}>Select a Language</Text>
        <Ionicons color='#444' size={28} name='ios-language-outline' />
      </View>
      <Pressable onPress={() => onLanguageClicked(Language.english)}>
        <Text style={[styles.text, selectedLan === 'en' && styles.selectedText]}>{Language.english.toLocaleUpperCase()}</Text>
      </Pressable>
      <Pressable onPress={() => onLanguageClicked(Language.german)}>
        <Text style={[styles.text, selectedLan === 'de' && styles.selectedText]}>{Language.german.toLocaleUpperCase()}</Text>
      </Pressable>
    </View>
  );
};
