var React = require('react');

var SearchUser = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.refs.username.value);
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
