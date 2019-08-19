/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../../actions/users/usersActions";
import UserItem from "./components/userItem";
import { Spinner, Icon } from "native-base";
import HeaderTitle from "../sharedComponents/header/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Footer from "./components/footer";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      totalPages: 0,
      users: []
    };
    this.userArr = [];
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <HeaderTitle title={"Users"} />
    };
  };

  componentWillReceiveProps = nextProps => {
    if (!nextProps.users.isFetching && nextProps.users.users.data) {
      this.setState({
        page: nextProps.users.users.page,
        totalPages: nextProps.users.users.total_pages,
        users: [...this.state.users, ...nextProps.users.users.data]
      });
    }
  };

  onEndReached = () => {
    if (
      this.state.totalPages > this.state.page &&
      !this.props.users.isFetching
    ) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.props.fetchUsers(this.state.page);
      });
    }
  };

  componentDidMount = () => {
    this.setState(
      {
        page: 1
      },
      () => {
        this.props.fetchUsers(this.state.page);
      }
    );
  };

  renderRow = data => {
    return <UserItem data={data} />;
  };

  renderFooter = () => {
    if (this.state.total_pages != 0 && this.state.page < this.state.totalPages)
      return null;
    return <Footer />;
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.users.isFetching && (
          <View style={{ flex: 1 }}>
            <Spinner color={"blue"} />
          </View>
        )}
        <View style={styles.containerStyle}>
          {!this.props.users.isFetching &&
            this.props.users.users.data.length && (
              <FlatList
                enableEmptySections={true}
                scrollEventThrottle={200}
                data={this.state.users}
                renderItem={({ item }) => <UserItem data={item} />}
                keyExtractor={item => item.id.toString()}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={3}
                ListFooterComponent={this.renderFooter.bind(this)}
              />
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerStyle: { backgroundColor: "#ffffff", flex: 1 },
  bodyText: {
    paddingLeft: 10,
    fontSize: hp("2.2%"),
    fontWeight: "400",
    color: "#212121"
  },
  headerBtnStyle: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingLeft: 15
  },
  iconStyles: {
    fontSize: 25,
    color: "#0091EA",
    paddingRight: 15
  }
});

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchUsers
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
