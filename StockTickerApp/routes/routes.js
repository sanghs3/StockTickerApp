module.exports = function routes(app, handlers) {

	// app.get('/login', handlers.login);
	// app.get('/signup', handlers.signup);


		// =====================================
		// HOME PAGE ===========================
		// =====================================
	 app.get('/', handlers.index);
	 

		// =====================================
		// Game PAGE ===========================
		// =====================================
	 
	 app.get('/game', handlers.game);
	
};