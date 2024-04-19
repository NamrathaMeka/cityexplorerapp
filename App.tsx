import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [interests, setInterests] = useState('');
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const [showMap, setShowMap] = useState(false);

  const handleInterestChange = (text) => {
    setInterests(text);
  };

  const handleSearch = () => {
    // Here you would make a call to your backend to fetch recommended places based on user interests
    // For demo purposes, let's just set some dummy recommended places
    const dummyPlaces = [
      { name: 'Museum of Modern Art', location: { latitude: 40.7614, longitude: -73.9776 } },
      { name: 'Central Park', location: { latitude: 40.7851, longitude: -73.9683 } },
      { name: 'Empire State Building', location: { latitude: 40.748817, longitude: -73.985428 } },
      { name: 'Statue of Liberty', location: { latitude: 40.6892, longitude: -74.0445 } },
      { name: 'Times Square', location: { latitude: 40.7580, longitude: -73.9855 } },
      { name: 'Brooklyn Bridge', location: { latitude: 40.7061, longitude: -73.9969 } }
    ];
    setRecommendedPlaces(dummyPlaces);
    setShowMap(false);
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  const renderRecommendedPlaces = () => {
    return (
      <ScrollView style={styles.placesContainer}>
        {recommendedPlaces.map((place, index) => (
          <TouchableOpacity key={index} style={styles.placeItem}>
            <Image source={{ uri: `https://source.unsplash.com/200x200/?${place.name}` }} style={styles.placeImage} />
            <Text style={styles.placeName}>{place.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderMap = () => {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} initialRegion={{
          latitude: 40.7128,
          longitude: -74.0060,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {recommendedPlaces.map((place, index) => (
            <Marker key={index} coordinate={place.location} title={place.name} />
          ))}
        </MapView>
        <Button title="Back to List" onPress={() => setShowMap(false)} style={styles.backButton} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>City Explorer</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your interests (e.g., historical sites, local cuisine)"
        onChangeText={handleInterestChange}
        value={interests}
      />

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonsContainer}>
            <Button title="Search" onPress={handleSearch} />
            <Button title="Show Map" onPress={handleShowMap} />
            <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
            <Button title="Entry Passes" onPress={() => navigation.navigate('EntryPasses')} />
            <Button title="Events Near Me" onPress={() => navigation.navigate('EventsNearMe')} />
            <Button title="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
            <Button title="Feedback" onPress={() => navigation.navigate('Feedback')} />
            <Button title="Review" onPress={() => navigation.navigate('Review')} />
            <Button title="Push Notifications" onPress={() => navigation.navigate('PushNotifications')} />
            <Button title="Time Zones" onPress={() => navigation.navigate('TimeZones')} />
            <Button title="Login Credentials" onPress={() => navigation.navigate('LoginCredentials')} />
            <Button title="Payment Information" onPress={() => navigation.navigate('PaymentInfo')} />
            <Button title="Location" onPress={() => navigation.navigate('Location')} />
          </View>
        </ScrollView>
      </View>

      {showMap ? renderMap() : renderRecommendedPlaces()}
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Button title="Feedback" onPress={() => navigation.navigate('Feedback')} />
      <Button title="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
      <Button title="Review" onPress={() => navigation.navigate('Review')} />
      <Button title="Push Notifications" onPress={() => navigation.navigate('PushNotifications')} />
      <Button title="Time Zones" onPress={() => navigation.navigate('TimeZones')} />
      <Button title="Login Credentials" onPress={() => navigation.navigate('LoginCredentials')} />
      <Button title="Payment Information" onPress={() => navigation.navigate('PaymentInfo')} />
      <Button title="Location" onPress={() => navigation.navigate('Location')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const EntryPassesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entry Passes</Text>
      <Image style={styles.entryPassImage} source={{ uri: 'https://source.unsplash.com/200x200/?ticket' }} />
      <Text style={styles.entryPassInfo}>
        Gain access to exclusive attractions with our entry passes! Buy now and explore the city like never before.
      </Text>
    </View>
  );
};

const EventsNearMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Events Near Me</Text>
      <Image style={styles.eventsImage} source={{ uri: 'https://source.unsplash.com/200x200/?event' }} />
      <Text style={styles.eventsInfo}>
        Discover exciting events happening near you! Join now and make unforgettable memories.
      </Text>
    </View>
  );
};

const FeedbackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feedback</Text>
      <TextInput
        style={styles.feedbackInput}
        multiline={true}
        placeholder="Enter your feedback here"
      />
      <Button title="Submit Feedback" onPress={() => alert('Feedback submitted!')} />
    </View>
  );
};

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.contactInfo}>
        For any queries or assistance, please contact us at: {'\n'}
        Email: support@cityexplorer.com {'\n'}
        Phone: +1 (123) 456-7890
      </Text>
    </View>
  );
};

const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review</Text>
      <Text style={styles.reviewInstructions}>
        We value your feedback! If you enjoy using City Explorer, please consider leaving us a review on the app store.
      </Text>
      <Button title="Leave a Review" onPress={() => alert('Redirecting to app store...')} />
    </View>
  );
};

const PushNotificationsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Push Notifications</Text>
      <Text style={styles.notificationStatus}>
        Push notifications are {notificationsEnabled ? 'enabled' : 'disabled'}
      </Text>
      <Button title={notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'} onPress={toggleNotifications} />
    </View>
  );
};

const TimeZonesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Time Zones</Text>
      <Text style={styles.timeZoneInfo}>
        Please select your preferred time zone:
      </Text>
      {/* Add time zone selection component here */}
    </View>
  );
};

const LoginCredentialsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Credentials</Text>
      {/* Add login credentials management UI here */}
    </View>
  );
};

const PaymentInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Information</Text>
      {/* Add payment information management UI here */}
    </View>
  );
};

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location</Text>
      {/* Add location settings UI here */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="EntryPasses" component={EntryPassesScreen} />
        <Stack.Screen name="EventsNearMe" component={EventsNearMeScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="PushNotifications" component={PushNotificationsScreen} />
        <Stack.Screen name="TimeZones" component={TimeZonesScreen} />
        <Stack.Screen name="LoginCredentials" component={LoginCredentialsScreen} />
        <Stack.Screen name="PaymentInfo" component={PaymentInfoScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  placesContainer: {
    flex: 1,
  },
  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  placeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  entryPassImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  entryPassInfo: {
    fontSize: 16,
  },
  eventsImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  eventsInfo: {
    fontSize: 16,
  },
  feedbackInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 20,
  },
  reviewInstructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  notificationStatus: {
    fontSize: 16,
    marginBottom: 20,
  },
  timeZoneInfo: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;

