import React from "react";

export const ContatosContext = React.createContext({});

export const ContatosProvider = (props) => {
	const contatos = [
		{
			id: 1,
			first_name: "Cleon",
			last_name: "Blood",
			email: "cblood0@mail.ru",
			gender: "M",
			language: "Haitian Creole",
			avatar:
				"https://robohash.org/ipsumquisconsectetur.png?size=100x100\u0026set=set1",
			birthday: "1992-12-11",
		},
		{
			id: 2,
			first_name: "Iorgos",
			last_name: "Barkley",
			email: "ibarkley1@umich.edu",
			gender: "M",
			language: "Northern Sotho",
			avatar:
				"https://robohash.org/architectomollitianisi.png?size=100x100\u0026set=set1",
			birthday: "1979-03-22",
		},
		{
			id: 3,
			first_name: "Hasheem",
			last_name: "Filde",
			email: "hfilde2@netvibes.com",
			gender: "M",
			language: "Macedonian",
			avatar:
				"https://robohash.org/placeatsedperferendis.jpg?size=100x100\u0026set=set1",
			birthday: "1959-10-08",
		},
		{
			id: 4,
			first_name: "Shaylah",
			last_name: "Peele",
			email: "speele3@independent.co.uk",
			gender: "F",
			language: "Kazakh",
			avatar:
				"https://robohash.org/adprovidentautem.png?size=100x100\u0026set=set1",
			birthday: "1993-01-16",
		},
		{
			id: 5,
			first_name: "Levy",
			last_name: "Pozzo",
			email: "lpozzo4@gnu.org",
			gender: "M",
			language: "Haitian Creole",
			avatar:
				"https://robohash.org/quisinventoreveniam.bmp?size=100x100\u0026set=set1",
			birthday: "1991-09-26",
		},
		{
			id: 6,
			first_name: "Titos",
			last_name: "Walduck",
			email: "twalduck5@prlog.org",
			gender: "M",
			language: "Gujarati",
			avatar: "https://robohash.org/autemquiaet.bmp?size=100x100\u0026set=set1",
			birthday: "1961-01-09",
		},
		{
			id: 7,
			first_name: "Trueman",
			last_name: "Lulham",
			email: "tlulham6@macromedia.com",
			gender: "M",
			language: "Swedish",
			avatar:
				"https://robohash.org/occaecatiullamvelit.bmp?size=100x100\u0026set=set1",
			birthday: "1993-04-25",
		},
		{
			id: 8,
			first_name: "Truman",
			last_name: "Hallgalley",
			email: "thallgalley7@europa.eu",
			gender: "M",
			language: "Filipino",
			avatar:
				"https://robohash.org/rerumvitaeaccusamus.jpg?size=100x100\u0026set=set1",
			birthday: "2000-04-21",
		},
		{
			id: 9,
			first_name: "Raquel",
			last_name: "Peaple",
			email: "rpeaple8@photobucket.com",
			gender: "F",
			language: "Yiddish",
			avatar: "https://robohash.org/etipsaodio.bmp?size=100x100\u0026set=set1",
			birthday: "1960-11-30",
		},
		{
			id: 10,
			first_name: "Elyn",
			last_name: "Hasley",
			email: "ehasley9@google.nl",
			gender: "F",
			language: "Romanian",
			avatar:
				"https://robohash.org/pariaturautnemo.png?size=100x100\u0026set=set1",
			birthday: "1978-03-11",
		},
		{
			id: 11,
			first_name: "Avrit",
			last_name: "Kearns",
			email: "akearnsa@psu.edu",
			gender: "F",
			language: "Icelandic",
			avatar:
				"https://robohash.org/animinonminus.png?size=100x100\u0026set=set1",
			birthday: "2007-02-22",
		},
		{
			id: 12,
			first_name: "Berri",
			last_name: "Cosham",
			email: "bcoshamb@51.la",
			gender: "F",
			language: "Portuguese",
			avatar:
				"https://robohash.org/mollitiaillumconsequuntur.bmp?size=100x100\u0026set=set1",
			birthday: "1971-12-08",
		},
		{
			id: 13,
			first_name: "Jammal",
			last_name: "Ibanez",
			email: "jibanezc@paginegialle.it",
			gender: "M",
			language: "Haitian Creole",
			avatar:
				"https://robohash.org/blanditiiscommodieveniet.jpg?size=100x100\u0026set=set1",
			birthday: "1999-12-16",
		},
		{
			id: 14,
			first_name: "Letta",
			last_name: "Pavlasek",
			email: "lpavlasekd@imdb.com",
			gender: "F",
			language: "Guaraní",
			avatar:
				"https://robohash.org/vitaequasiminima.jpg?size=100x100\u0026set=set1",
			birthday: "1976-08-12",
		},
		{
			id: 15,
			first_name: "Forrester",
			last_name: "Carrol",
			email: "fcarrole@studiopress.com",
			gender: "M",
			language: "Hiri Motu",
			avatar:
				"https://robohash.org/eosfacereatque.bmp?size=100x100\u0026set=set1",
			birthday: "1998-12-04",
		},
		{
			id: 16,
			first_name: "Bevon",
			last_name: "Biscomb",
			email: "bbiscombf@amazonaws.com",
			gender: "M",
			language: "Zulu",
			avatar:
				"https://robohash.org/nobisblanditiiset.jpg?size=100x100\u0026set=set1",
			birthday: "1991-09-28",
		},
		{
			id: 17,
			first_name: "Jere",
			last_name: "Warner",
			email: "jwarnerg@ning.com",
			gender: "M",
			language: "Somali",
			avatar:
				"https://robohash.org/doloresillototam.png?size=100x100\u0026set=set1",
			birthday: "2004-11-24",
		},
		{
			id: 18,
			first_name: "Olivero",
			last_name: "Scriver",
			email: "oscriverh@miitbeian.gov.cn",
			gender: "M",
			language: "Latvian",
			avatar:
				"https://robohash.org/velrepellatdolor.jpg?size=100x100\u0026set=set1",
			birthday: "1965-03-28",
		},
		{
			id: 19,
			first_name: "Horatio",
			last_name: "Tolchar",
			email: "htolchari@cam.ac.uk",
			gender: "M",
			language: "Arabic",
			avatar:
				"https://robohash.org/accusantiumvoluptateset.jpg?size=100x100\u0026set=set1",
			birthday: "1967-01-09",
		},
		{
			id: 20,
			first_name: "Jaynell",
			last_name: "Kivits",
			email: "jkivitsj@typepad.com",
			gender: "F",
			language: "Kashmiri",
			avatar:
				"https://robohash.org/aliquidminusfugiat.bmp?size=100x100\u0026set=set1",
			birthday: "1999-04-01",
		},
	];
	const addContatos = (contato) => {
		contatos.push(contato);
	};
	const getById = ({ id }) => {
		let contact = [];
		contatos.map((element) => {
			if (element.id === id) return contact.push(element);
		});
		return contact;
	};
	return (
		<ContatosContext.Provider value={{ contatos, addContatos, getById }}>
			{props.children}
		</ContatosContext.Provider>
	);
};
