import * as React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00'},
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
];


const header = () => <Text style={styles.headerText}>Menu</Text>


const renderItem = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
    );
} 

const renderSectionHeader = ({ section : {title} }) => {
  return (
      <View>
          <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
  );
} 

export default function MenuItems() {
    

    return (
        <View style={styles.container}>
          <SectionList 
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListHeaderComponent={header}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },

    headerText: {
      padding: 40,
      fontSize: 40,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#EDEFEE',
      textAlign: 'center',
    },

    sectionHeaderText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 15,
        borderWidth: 5,
        borderColor: '#EE9972',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    itemName: {
        fontSize: 20,
        paddingRight:40
    },
    itemPrice: {
        fontSize: 16,
        color: 'gray',
    },
});