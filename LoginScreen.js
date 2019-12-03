/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import TextInput from './TextInput';

const colors = {
    background: '#e3e3e3',
    dodgerBlue: 'rgb(58,139,255)',
    dusk: 'rgb(65,77,107)',
    cloudyBlue: 'rgb(175,194,219)',
    blueyGray: 'rgb(134,154,183)',
    paleGray: 'rgb(233,237,244)',
  };

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.constainer}>
                    <View style={styles.iconWrapper}>
                        <Image style={styles.icon} source={require('./assets/icons/Logocrane.png')}></Image>
                        <Text style={styles.iconTxt}>Hello</Text>
                    </View>
                    <View style={styles.wrapper} >
                        <View style={styles.wrapperInput}>
                            <TextInput
                                txtLabel='this is label'
                                style={{marginTop: 60}}
                                txt={this.state.email}
                                txtHint='Please write email address.'
                                placeHolderTextColor={colors.blueyGray}
                                onTextChagned={(text) => {
                                    this.onTextChanged('EMAIL', text);
                                }} 
                            />
                            <TextInput
                                style={{marginTop: 8}}
                                txt={this.state.password}
                                txtHint='Please write password.'
                                placeHolderTextColor={colors.blueyGray}
                                onTextChanged={(text) => {
                                    this.onTextChanged('PASSWORD', text);
                                }}
                                isPassword
                            />
                        </View>
                    <TouchableOpacity
                        style={styles.touchForgotPw}
                    >
                        <Text style={styles.txtForgotPw}>Forgot password?</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtCopyright}>Copyright by platcube.com</Text>
                    </View>
                </View>
            </SafeAreaView>
            </>
        );
    };

    onTextChanged = (type, text) => {
        switch(type) {
            case 'EMAIL':
                this.setState({
                    email: text,
                });
            break;
            case 'PASSWORD':
                this.setState({
                    password: text,
                });
            break;
        }
    }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconWrapper: {

    position: 'absolute',
    top: 144,
    left: 40,


    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 36,
    height: 68,
    marginLeft: 4,
  },
  iconTxt: {
    fontSize: 20,
    color: colors.dusk,
    marginTop: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    marginTop: 260,
    width: '78%',
    height: 300,
    alignSelf: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapperInput: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.paleGray,
  },
  touchForgotPw: {
    marginTop: 20,
  },
  txtForgotPw: {
    fontSize: 12,
    color: colors.dodgerBlue,
    textDecorationLine: 'underline',
  },
  txtCopyright: {
    marginTop: 80,
    fontSize: 12,
    color: colors.cloudyBlue,
  },
});

