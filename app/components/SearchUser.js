import React from 'react';
import GitHubUser from '../services/GitHubUser';

const SearchUser = React.createClass({
  handleSubmit: function(e){

    e.preventDefault();
    GitHubUser.getByUsername(this.refs.username.value).then((resp) => {
      this.props.updateUser(resp.data);
    });
    GitHubUser.getReposByUsername(this.refs.username.value).then((resp) => {
      this.props.updateRepos(resp.data);
    });
  },
  render: function(){
    return(
      <div className="jumbotron">
        <h1>GitHub Infos</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div clasName="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username"
                clasName="form-control"
                placeholder="Ex.: danielGalvao"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
});

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;
