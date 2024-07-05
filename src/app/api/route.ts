import { NextRequest, NextResponse } from "next/server"

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json(
    [
      {
        id: 1,
        first_name: "Dixie",
        last_name: "Mullineux",
        email: "dmullineux0@aol.com",
        gender: "F",
        language: "Bulgarian",
        avatar:
          "https://robohash.org/sitminimaaut.png?size=100x100\u0026set=set1",
        birthday: "1991-08-16",
      },
      {
        id: 2,
        first_name: "Fernandina",
        last_name: "Robilart",
        email: "frobilart1@shareasale.com",
        gender: "F",
        language: "Estonian",
        avatar:
          "https://robohash.org/dolorescommodiautem.bmp?size=100x100\u0026set=set1",
        birthday: "1993-05-06",
      },
      {
        id: 3,
        first_name: "Merrill",
        last_name: "Twinborough",
        email: "mtwinborough2@ustream.tv",
        gender: "F",
        language: "German",
        avatar:
          "https://robohash.org/occaecatirerumconsectetur.jpg?size=100x100\u0026set=set1",
        birthday: "1977-05-31",
      },
      {
        id: 4,
        first_name: "Mahmoud",
        last_name: "Clough",
        email: "mclough3@census.gov",
        gender: "M",
        language: "Spanish",
        avatar:
          "https://robohash.org/erroraspernaturest.jpg?size=100x100\u0026set=set1",
        birthday: "1969-04-30",
      },
      {
        id: 5,
        first_name: "Blinni",
        last_name: "Ashborne",
        email: "bashborne4@nih.gov",
        gender: "F",
        language: "Romanian",
        avatar:
          "https://robohash.org/suscipitundeid.bmp?size=100x100\u0026set=set1",
        birthday: "1972-11-08",
      },
      {
        id: 6,
        first_name: "Marla",
        last_name: "Hallock",
        email: "mhallock5@gov.uk",
        gender: "F",
        language: "Italian",
        avatar:
          "https://robohash.org/minusplaceatodit.png?size=100x100\u0026set=set1",
        birthday: "1955-12-22",
      },
      {
        id: 7,
        first_name: "Derrick",
        last_name: "Bullin",
        email: "dbullin6@wisc.edu",
        gender: "M",
        language: "Malagasy",
        avatar:
          "https://robohash.org/voluptatedolorumillum.jpg?size=100x100\u0026set=set1",
        birthday: "1980-08-09",
      },
      {
        id: 8,
        first_name: "Felicle",
        last_name: "Sawer",
        email: "fsawer7@spiegel.de",
        gender: "F",
        language: "Khmer",
        avatar:
          "https://robohash.org/perspiciatisnecessitatibusdolore.jpg?size=100x100\u0026set=set1",
        birthday: "1986-12-06",
      },
      {
        id: 9,
        first_name: "Chen",
        last_name: "Hinzer",
        email: "chinzer8@deliciousdays.com",
        gender: "M",
        language: "Maltese",
        avatar:
          "https://robohash.org/eoscupiditatemodi.jpg?size=100x100\u0026set=set1",
        birthday: "1982-10-09",
      },
      {
        id: 10,
        first_name: "Laurice",
        last_name: "Peffer",
        email: "lpeffer9@360.cn",
        gender: "F",
        language: "Latvian",
        avatar:
          "https://robohash.org/debitisvoluptasoptio.jpg?size=100x100\u0026set=set1",
        birthday: "2002-10-01",
      },
      {
        id: 11,
        first_name: "Tobe",
        last_name: "Claessens",
        email: "tclaessensa@digg.com",
        gender: "F",
        language: "Greek",
        avatar:
          "https://robohash.org/eumexcepturivoluptatem.jpg?size=100x100\u0026set=set1",
        birthday: "2001-08-09",
      },
      {
        id: 12,
        first_name: "Mendel",
        last_name: "Accombe",
        email: "maccombeb@feedburner.com",
        gender: "M",
        language: "Lithuanian",
        avatar:
          "https://robohash.org/aliasvoluptaseius.png?size=100x100\u0026set=set1",
        birthday: "2009-12-25",
      },
      {
        id: 13,
        first_name: "Trude",
        last_name: "Sadlier",
        email: "tsadlierc@engadget.com",
        gender: "F",
        language: "Yiddish",
        avatar:
          "https://robohash.org/rationeveliteos.bmp?size=100x100\u0026set=set1",
        birthday: "1970-04-18",
      },
      {
        id: 14,
        first_name: "Shirlee",
        last_name: "Hurlestone",
        email: "shurlestoned@surveymonkey.com",
        gender: "F",
        language: "Korean",
        avatar:
          "https://robohash.org/aperiametautem.png?size=100x100\u0026set=set1",
        birthday: "1973-08-28",
      },
      {
        id: 15,
        first_name: "Barnard",
        last_name: "Bowser",
        email: "bbowsere@rediff.com",
        gender: "M",
        language: "Pashto",
        avatar:
          "https://robohash.org/doloresessevoluptates.bmp?size=100x100\u0026set=set1",
        birthday: "1953-03-26",
      },
      {
        id: 16,
        first_name: "Enrico",
        last_name: "Colebeck",
        email: "ecolebeckf@census.gov",
        gender: "M",
        language: "Swati",
        avatar:
          "https://robohash.org/cupiditatedistinctioplaceat.bmp?size=100x100\u0026set=set1",
        birthday: "1992-07-16",
      },
      {
        id: 17,
        first_name: "Selene",
        last_name: "Absolem",
        email: "sabsolemg@foxnews.com",
        gender: "F",
        language: "German",
        avatar:
          "https://robohash.org/eligendietfacere.jpg?size=100x100\u0026set=set1",
        birthday: "2003-12-16",
      },
      {
        id: 18,
        first_name: "Booth",
        last_name: "Gainforth",
        email: "bgainforthh@linkedin.com",
        gender: "M",
        language: "Hungarian",
        avatar:
          "https://robohash.org/etetlaborum.png?size=100x100\u0026set=set1",
        birthday: "1998-05-07",
      },
      {
        id: 19,
        first_name: "Winonah",
        last_name: "Tingey",
        email: "wtingeyi@netvibes.com",
        gender: "F",
        language: "German",
        avatar:
          "https://robohash.org/pariaturvoluptatemexplicabo.jpg?size=100x100\u0026set=set1",
        birthday: "1976-08-09",
      },
      {
        id: 20,
        first_name: "Fred",
        last_name: "Kanwell",
        email: "fkanwellj@admin.ch",
        gender: "F",
        language: "Armenian",
        avatar:
          "https://robohash.org/omnisnatuserror.bmp?size=100x100\u0026set=set1",
        birthday: "1953-06-07",
      },
    ],
    { status: 200 }
  )
  // Put the api data here to avoid reach api request limit in mockoon
}

// To handle a POST request to /api
// export async function POST(request) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// Same logic to add a `PATCH`, `DELETE`...
