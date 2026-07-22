import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Provider Dashboard</Text>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Total Services</Text>
        <Text style={styles.statValue}>0</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Active Orders</Text>
        <Text style={styles.statValue}>0</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Total Earnings</Text>
        <Text style={styles.statValue}>$0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stat: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 14,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 4,
  },
});

export default DashboardScreen;
