import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceDetailScreen = ({ route }) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{service.title_en}</Text>
        <Text style={styles.price}>${service.price}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{service.description_en}</Text>

        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detail}>
          <Text style={styles.label}>Delivery Time:</Text>
          <Text>{service.delivery_time_days || 'Not specified'} days</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Rating:</Text>
          <Text>⭐ {service.rating}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Orders:</Text>
          <Text>{service.total_orders}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 16,
  },
  description: {
    color: '#6b7280',
    lineHeight: 22,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  label: {
    fontWeight: '600',
    color: '#1f2937',
  },
});

export default ServiceDetailScreen;
