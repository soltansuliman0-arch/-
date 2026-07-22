import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../store/slices/serviceSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices({ limit: 6 }));
  }, [dispatch]);

  const handleServicePress = (service) => {
    navigation.navigate('ServiceDetail', { service });
  };

  const renderService = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleServicePress(item)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.title_en}</Text>
        <View style={styles.rating}>
          <MaterialIcons name="star" size={16} color="#fbbf24" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {item.description_en}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.orders}>{item.total_orders} orders</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to SeveBiz</Text>
        <Text style={styles.heroSubtitle}>Find professional services</Text>
        <TouchableOpacity
          style={styles.browseButton}
          onPress={() => navigation.navigate('ServicesStack', { screen: 'ServicesTab' })}
        >
          <Text style={styles.browseButtonText}>Browse Services</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Services</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#2563eb" />
        ) : (
          <FlatList
            data={services}
            renderItem={renderService}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  hero: {
    backgroundColor: '#2563eb',
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
    opacity: 0.9,
  },
  browseButton: {
    backgroundColor: '#fbbf24',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  description: {
    color: '#6b7280',
    marginBottom: 12,
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  orders: {
    color: '#9ca3af',
    fontSize: 12,
  },
});

export default HomeScreen;
