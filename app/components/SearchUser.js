var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e){

    e.preventDefault();
    GitHubUser.getByUsername(this.refs.username.value).then(function(resp){
      this.props.updateUser(resp.data);
    }.bind(this));
    GitHubUser.getReposByUsername(this.refs.username.value).then(function(resp){
      this.props.updateRepos(resp.data);
    }.bind(this));
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

module.exports = SearchUser;
