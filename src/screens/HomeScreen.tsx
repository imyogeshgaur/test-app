import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';


const HomeScreen = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const {name,followers,following,repos,website,twitter,} = route.params;

    return (
      <>
        <View style={styles.centered}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.inputBox} editable={false} value={name} />
          <Text style={styles.label}>Followers</Text>
          <TextInput
            style={styles.inputBox}
            editable={false}
            value={followers}
          />
          <Text style={styles.label}>Following</Text>
          <TextInput
            style={styles.inputBox}
            editable={false}
            value={following}
          />
          <Text style={styles.label}>Repositories</Text>
          <TextInput style={styles.inputBox} editable={false} value={repos} />
          <View style={styles.btnContainer}>
            {website == '' ? (
              <></>
            ) : (
              <TouchableOpacity
                style={styles.checkWebBtn}
                onPress={() => Linking.openURL(website)}>
                <Text style={styles.btnTextWhite}>See Website</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.checkBtn}
              onPress={() => navigation.navigate('Main')}>
              <Text style={styles.btnTextBlack}>Go Back</Text>
            </TouchableOpacity>
            {twitter == '' ? (
              <></>
            ) : (
              <TouchableOpacity
                style={styles.checkTwitterBtn}
                onPress={() =>
                  Linking.openURL(`https://twitter.com/${twitter}`)
                }>
                <Text style={styles.btnTextWhite}>See Twitter</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgb(121, 216, 160)',
    color: 'white',
    borderRadius: 5,
    fontWeight: '700',
  },
  btnContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '900',
  },
  checkBtn: {
    backgroundColor: 'rgb(89, 243, 153)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 8,
  },
  btnTextBlack: {
    color: 'black',
  },
  btnTextWhite: {
    color: 'white',
  },
  checkWebBtn: {
    backgroundColor: 'rgb(236, 89, 69)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 8,
  },
  checkTwitterBtn: {
    backgroundColor: 'rgb(25, 133, 221);',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 8,
  },
  // error: {
  //   fontSize:
  // },
});
