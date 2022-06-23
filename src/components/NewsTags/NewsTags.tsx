import React from 'react';
import {FlatList} from 'react-native';
import {NewsCategory} from '../../constants';
import {Tag} from '../Tag/Tag';
import styles from './stylesNewsTags';

export const NewsTags: React.FC<{
  selectedCategory: String;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Object.keys(NewsCategory)}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};