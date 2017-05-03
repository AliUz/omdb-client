import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

import NowPlaying from './components/NowPlaying';
import Search from './components/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import codePush from 'react-native-code-push';

class MovieDB extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'nowPlaying'
      };
  }

  componentDidMount(){
      codePush.sync({ updateDialog: false, installMode: codePush.InstallMode.IMMEDIATE });
  }

  render() {
      return (
          <TabBarIOS selectedTab={this.state.selectedTab}>
              <Icon.TabBarItemIOS
                    selected={this.state.selectedTab === 'nowPlaying'}
                    iconName="film"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'nowPlaying'
                        });
                    }}>
                    <NowPlaying/>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    selected={this.state.selectedTab === 'search'}
                    iconName="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

export default MovieDB;
