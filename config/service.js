module.exports = {
	"service": "new_service",
	"models": [
		{
			"model": "new_model",
			"file": "NewModel",
			"datasource": "pgsql",
			"table": "game_player",
			"firestore_path": "",
			"can_update": false,
			"can_delete": false,
			"order_by_options": [
				"column",
				"-column"
			],
			"pagination": {
				"active": true,
				"default_page_size": 20
			}
		}
	]
};
