import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    GitHubUser.getByUsername(this.refs.username.value).then((resp) => {
      this.props.updateUser(resp.data);
    });
    GitHubUser.getReposByUsername(this.refs.username.value).then((resp) => {
      this.props.updateRepos(resp.data);
    });
  }
  render(){
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
}

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;
