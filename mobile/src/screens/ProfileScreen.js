import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
          </Text>
        </View>
        <Text style={styles.name}>{user?.first_name} {user?.last_name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.rating}>⭐ {user?.rating || 0}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <View style={styles.info}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.email}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>User Type</Text>
          <Text style={styles.value}>{user?.user_type}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.value}>{user?.country || 'Not set'}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>{user?.city || 'Not set'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 24,
    alignItems: 'center',
    paddingTop: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fbbf24',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#fff',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#1f2937',
    marginTop: 4,
  },
});

export default ProfileScreen;
