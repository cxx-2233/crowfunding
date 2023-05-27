import React, {Component} from 'react';
import web3 from './utils/InitWeb3';
//如果不是default，需要使用{}结构
import {fundingFactoryInstance} from './eth/instance';
import TabCenter from "./display/TabCenter";

import { useState, useEffect } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = {
            currentAccount : '',
        }
    }
    async componentDidMount() {
        let accounts = await web3.eth.getAccounts();

        let platformManager = await fundingFactoryInstance.methods.platformManager().call()
        console.log('manager :', platformManager)

        this.setState({currentAccount : accounts[0]});
        //console.log('aaa :', accounts);
    }
    render() {
        const myStyle={
            backgroundImage: "url('https://s1.ax1x.com/2023/04/27/p9Mgwxs.png')",
            height:'110vh',
            backgroundSize: 'cover',

        };
        let {currentAccount} = this.state;
        return (

            <div style={myStyle} >
                <h1>梦想之桥</h1>
                <p>当前账户:{currentAccount}</p>
                <TabCenter/>
            </div>
        );
    }
}


export default App;

