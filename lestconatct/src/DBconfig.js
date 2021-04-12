export const DBConfig = {
	name: "MyDB",
	version: 2,
	objectStoresMeta: [
		{
			store: "contatos",
			storeConfig: { keyPath: "id", autoIncrement: true },
			storeSchema: [
				{
					name: "first_name",
					keypath: "first_name",
					options: { unique: false },
				},
				{ name: "last_name", keypath: "last_name", options: { unique: false } },
				{ name: "email", keypath: "email", options: { unique: false } },
				{ name: "gender", keypath: "gender", options: { unique: false } },
				{ name: "languages", keypath: "languages", options: { unique: false } },
				{ name: "birthday", keypath: "birthday", options: { unique: false } },
				{ name: "avatar", keypath: "avatar", options: { unique: false } },
			],
		},
	],
};
