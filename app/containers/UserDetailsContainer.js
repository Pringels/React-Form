var React = require('react');
var UserDetails = require('../components/UserDetails');

var UserDetailsContainer = React.createClass({
 



 componentDidMount : function(){
 console.log(this.props.location.state.arrayInfo)
   

     	
    },

	render: function () {
		return (
			
			<UserDetails />
		);
	}
});

module.exports = UserDetailsContainer;

