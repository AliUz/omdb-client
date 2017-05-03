import {
    ListView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MovieActions from '../actions/MovieActions';
import MovieList from '../components/MovieList';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

function mapStateToProps(state) {
  const { movies } = state;
  return {
      dataSource: ds.cloneWithRows(movies.list),
      movies: movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MovieActions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
