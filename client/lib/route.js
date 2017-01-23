Router.configure({
	// LayoutTemplate
	layoutTemplate: 'walletLayout'
});

Router.route('/', function(){
	//set redirect assosiated with '/'
	this.redirect('/dashboard');
});

// Set mapping between URL and Route template.
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/sendEther', {name: 'sendEther'});
