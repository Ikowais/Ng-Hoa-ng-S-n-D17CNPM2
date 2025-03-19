import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const categories = [
    { id: '1', name: 'Pizza', image: require('../assets/pizza.jpg') },
    { id: '2', name: 'Burgers', image: require('../assets/burger.jpg') },
    { id: '3', name: 'Steak', image: require('../assets/steak.jpg') },
];

const popularItems = [
    { id: '1', name: 'Food 1', price: '$1', image: require('../assets/food1.jpg') },
    { id: '2', name: 'Food 2', price: '$3', image: require('../assets/food2.jpg') },
];

const ExplorerScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
            {/* Header */}
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 10 }}>Explorer</Text>

            {/* Search Bar */}
            <View style={{
                flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', 
                borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5
            }}>
                <Ionicons name="location-outline" size={20} color="gray" />
                <TextInput placeholder="Search for meals or area" style={{ flex: 1, marginLeft: 5 }} />
                <Feather name="search" size={20} color="gray" />
            </View>

            {/* Categories */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Top Categories</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>Filter</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', marginRight: 15 }}>
                        <Image source={item.image} style={{ width: 80, height: 60, borderRadius: 10 }} />
                        <Text style={{ marginTop: 5 }}>{item.name}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />

            {/* Popular Items */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Items</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>View all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal
                data={popularItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: '#fff', borderRadius: 10, marginRight: 15 }}>
                        <Image source={item.image} style={{ width: 120, height: 100, borderRadius: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default HomeScreen;
