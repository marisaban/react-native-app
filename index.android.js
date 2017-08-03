/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Button,
  ScrollView,
  View,
  Navigator
} from 'react-native';

export default class fsapp extends Component {
   _onPressButton(){
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>
          Convenient Online Personal Loans
        </Text>
        <Text style={styles.subheader}>
          Simple application process, fast approvals, no hassle. Get approved by phone
          or text... from anywhere.
        </Text>
        </View>

         <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Get Started </Text>
            </View>
          </TouchableWithoutFeedback>
          </View>

         <View style={styles.container}>
            <Text style={styles.header}> Get Approved For Up To <Text style={styles.colorText}>$15,000 </Text></Text>
            <Text style={styles.subheader}>
              We are not a payday lender. Our flexible personal loans are much more affordable 
              than any payday loan and there are no hidden costs, 
              application fees, or maintenance fees.
            </Text>
         </View>

          <View style={styles.shadowSection}>
            <View style={styles.shadowContainer}>
              <Text style={styles.shadowHeader}> Get Started <Text style={styles.colorText}>Online</Text> </Text>
              <Text style={styles.shadowText}>
                We understand that you are busy and that your time is valuable; 
                that’s why our application is tailored to you! 
                After applying online you can choose whether to get 
                approved by text or a phone call.
              </Text>
            </View>
         </View>

         <View style={styles.container}>
          <Text style={styles.header}>
            A <Text style={styles.colorText}>Flexible </Text>Personal Loan
          </Text>
          <Text style={styles.subheader}>
            We offer personal loans up to $15,000. All you have to do is select how 
            much you want to get started and let us take care of the rest.
          </Text>
        </View>

        <View style={styles.container}> 
          <Image style={styles.homeImage} source={require('./img/FSHomepage_Illustration_Mobile.png')} />
        </View>

         <View style={styles.container}>
          <Text style={styles.header}>
            <Text style={styles.colorText}> It is Your </Text>Money
          </Text>
          <Text style={styles.subheader}>
            Once the funds have been deposited into your account 
            you are free to spend it however you want.
          </Text>
        </View>

        <View style={styles.moneyContainer}>
          <View style={styles.moneyColumn}>
            <Text style={styles.moneyText}>
              Pay Bills 
            </Text>
             <Text style={styles.moneyText}>
              Reduce Debt
            </Text>
          </View>

          <View style={styles.moneyColumn}>
            <Text style={styles.moneyText}>
              Vehicle Repairs
            </Text>
             <Text style={styles.moneyText}>
              Go On Vacation
            </Text>
          </View>

          <View style={styles.moneyColumn}>
            <Text style={styles.moneyText}>
              Education Expenses
            </Text>
             <Text style={styles.moneyText}>
              Build Credit
            </Text>
          </View>

        </View>



      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 50
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

  },
  shadowSection: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20
  },
  shadowContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    borderColor: '#DFDFDF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  moneyContainer: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  moneyColumn: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  homeImage: {
    width: 300,
    height: 300,
    marginBottom: 50
  },
  header: {
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 5,
    width: 350,
    fontWeight: '600',
    color: '#6D6E70',
  },
  subheader: {
    textAlign: 'center',
    color: '#9D9A9A',
    fontWeight: '100',
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 30,
    width: 350,
  },
  shadowHeader: {
    fontSize: 25,
    padding: 20,
    fontWeight: '600',
    color: '#6D6E70',
  },
  button: {
    margin: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#44E3B3',
    borderRadius: 50
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 25
  },
  shadowText: {
    fontSize: 18,
    padding: 20,
    color: '#9D9A9A',
    fontWeight: '100',
    lineHeight: 30
  },
  colorText: {
    color: '#44E3B3', 
    alignItems: 'center'
  },
  moneyText: {
    padding: 30,
    fontSize: 15,
    width: 200
  }
});

// 'fsapp' must always be fsapp since it's the name of the project
// AppRegister tells RN which component is the root for the whole application
// if you have a project from Create React Native App, this is handled for you and
// you don't need to call AppRegistry
AppRegistry.registerComponent('fsapp', () => fsapp);
