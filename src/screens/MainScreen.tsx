import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';

const MainScreen = () => {
  const navigation: any = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [followers, setFollowers] = useState<string>('');
  const [following, setFollowing] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [repos, setRepos] = useState<string>('');
  const [website, setWebsite] = useState<string>('');

  const redirectToProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`,
      );
      const data = await response.data;
      console.log(data)
      setMessage(data.message);
      setName(data.name);
      setFollowers(data.followers.toString());
      setFollowing(data.following.toString());
      setRepos(data.public_repos.toString());
      data.twitter_username != null
        ? setTwitter(data.twitter_username)
        : setTwitter('');
      data.blog != '' ? setWebsite(data.blog) : setWebsite('');
      if (message === 'Not Found') {
        console.log(message)
        ToastAndroid.show('User Not Found',5000);
      } else {
        navigation.navigate('Home', {
          followers,
          following,
          website,
          twitter,
          repos,
          name,
        });
      }
    } catch (error) {
      console.log('Main Screen Error : ' + error);
      ToastAndroid.show('User Not Found',5000);
    }
  };
  return (
    <View style={styles.centered}>
      <Text style={styles.label}>Enter Github UserName</Text>
      <TextInput
        style={styles.inputBox}
        value={userName}
        onChangeText={setUserName}
      />
      <TouchableOpacity style={styles.checkBtn} onPress={redirectToProfile}>
        <Text style={styles.btnText}>Check Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    marginTop: 10,
    backgroundColor: 'rgb(150, 240, 235);',
    color: 'black',
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '900',
  },
  checkBtn: {
    backgroundColor: 'rgb(68, 158, 233)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
  },
});
