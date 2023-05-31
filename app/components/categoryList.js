import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import CategoryItem from './CategoryItem';

const CategoryList = ({ data, onPress }) => {
  const handleItemPress = (index) => {
    if (onPress) {
      onPress(index);
    }
  };

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => handleItemPress(index)}>
          <CategoryItem name={item.name} image={item.image} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;
