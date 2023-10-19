import { Eventer } from '../models/login_fetcher.js'

// let massive = []
//
// let pathJSONFiles = ['./files/json/AMK.json']
//
// let fetcher = fetch(`http://localhost:3000/${pathJSONFiles[0]}`)
//     .then(res => res.json())
//     .then((data) => {
//         massive.push(data)
//
//         console.log(massive[1][35][0]['Название мероприятия                      (на русском и при наличии английском языке)'])
//
//     })
//
//
//
// massive.push(fetcher)
//
//


let createEvent = {
        params: `{\"title\":\"Test2\",\"titleEng\":null,\"cypher\":null,\"isPublished\":false,\"type\":4,\"eventFormat\":\"online\",\"isAvailable\":true,\"parent\":null,\"coordinates\":null,\"location\":\"192174, г. Санкт-Петербург, ул. Бабушкина, д. 119, литера А\",\"locationEng\":null,\"description\":\"<p>Мероприятие с целью повышения уровня осведомленности обучающихся ОО о направлениях подготовки в рамках ФП &quot;Профессионалитет&quot;</p>\",\"descriptionEng\":null}`
}


        let log = new Eventer({
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "ru",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-cypress-is-xhr-or-fetch": "xhr",
                    "Referer": "https://researchinspb.ru/auth/sign-in/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "{\"username\":\"admin@pnvsh.local\",\"password\":\"Dahgh1naixi1\"}",
            "POST",
            "https://researchinspb.ru/api/login/"
        ).fetcherAuth(createEvent)







// Timeout -
//
//
//
//
//     let resp = log.getResponse
//     let cookies = resp.headers.get('Set-Cookie')
//
//     let params = `{\"title\":\"${massive[1][35][1]['Название мероприятия                      (на русском и при наличии английском языке)']}\",\"titleEng\":null,\"cypher\":null,\"isPublished\":false,\"type\":4,\"eventFormat\":\"online\",\"isAvailable\":true,\"parent\":null,\"coordinates\":null,\"location\":\"192174, г. Санкт-Петербург, ул. Бабушкина, д. 119, литера А\",\"locationEng\":null,\"description\":\"<p>Мероприятие с целью повышения уровня осведомленности обучающихся ОО о направлениях подготовки в рамках ФП &quot;Профессионалитет&quot;</p>\",\"descriptionEng\":null}`
//
//
//
//     console.log(params)
//
//
//     for (let k = 0; k < 1; k++) {
//
//         fetch("https://researchinspb.ru/api/v1/event/", {
//             "headers": {
//                 "accept": "application/json, text/plain, */*",
//                 "accept-language": "ru",
//                 "content-type": "application/json",
//                 "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
//                 "sec-ch-ua-mobile": "?1",
//                 "sec-ch-ua-platform": "\"Android\"",
//                 "sec-fetch-dest": "empty",
//                 "sec-fetch-mode": "cors",
//                 "sec-fetch-site": "same-origin",
//                 "Cookie": cookies
//             },
//             "referrer": "https://researchinspb.ru/admin/events/create/general-information/",
//             "referrerPolicy": "strict-origin-when-cross-origin",
//             "body": params,
//             "method": "POST",
//             "mode": "cors",
//             "credentials": "include"
//         }).then(res => res.text()).then(data => {
//             let parseID = JSON.parse(data)
//             if (parseID?.title[0] === 'Мероприятие с таким названием зарегистрировано') {
//                 return console.log('uje zaregano')
//             }
//             return parseID
//           }
//         ).then(parseID => {
//             let URLupdater = `https://researchinspb.ru/api/v1/event/${parseID.id}/`
//             let referrerURL = `https://researchinspb.ru/admin/events/${parseID.id}/create/topic/`
//             let URLmainObject = {
//                 'URLupdater': URLupdater,
//                 'referrerURL': referrerURL
//             }
//             return URLmainObject
//         }).then((URLmainObject) => {
//
//             // получили id, монтируем в ссылки и начинаем заполнять данные со 2-й страницы заполнения форм, первая была заполнена выше с переданными в нее данными param
//
//             console.log(URLmainObject.URLupdater + '  ' + URLmainObject.referrerURL)
//             fetch(`${URLmainObject.URLupdater}`, {
//                 "headers": {
//                     "accept": "application/json, text/plain, */*",
//                     "accept-language": "ru",
//                     "content-type": "application/json",
//                     "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
//                     "sec-ch-ua-mobile": "?1",
//                     "sec-ch-ua-platform": "\"Android\"",
//                     "sec-fetch-dest": "empty",
//                     "sec-fetch-mode": "cors",
//                     "sec-fetch-site": "same-origin",
//                     "Cookie": cookies
//                 },
//                 "referrer": `${URLmainObject.referrerURL}`,
//                 "referrerPolicy": "strict-origin-when-cross-origin",
//                 "body": "{\"membersAges\":{},\"membersStatuses\":[\"student\"],\"grnti\":[],\"okso\":[],\"vak\":[],\"rnf\":[],\"areas\":[]}",
//                 "method": "PATCH",
//                 "mode": "cors",
//                 "credentials": "include"
//             }).then(res => res.text()).then(data => console.log(data));
//
//
//             // получаем id организации и внутри промиса пишем фетч, в который помещаем этот id
//
//             fetch("http://researchinspb.ru/api/v1/organization/?page=1&pageSize=114", {
//                 "headers": {
//                     "accept": "application/json, text/plain, */*",
//                     "accept-language": "ru",
//                     "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
//                     "sec-ch-ua-mobile": "?1",
//                     "sec-ch-ua-platform": "\"Android\"",
//                     "sec-fetch-dest": "empty",
//                     "sec-fetch-mode": "cors",
//                     "sec-fetch-site": "same-origin",
//                     "Cookie": cookies
//                 },
//                 "referrer": "https://researchinspb.ru/admin/",
//                 "referrerPolicy": "strict-origin-when-cross-origin",
//                 "body": null,
//                 "method": "GET",
//                 "mode": "cors",
//                 "credentials": "include"
//             }).then(res => res.text()).then(data => {
//                 let pop = JSON.parse(data)
//                 console.log(pop.results[10].id)
//                 const idOrganization = pop.results[10].id
//                 return idOrganization
//             }).then(idOrganization => {
//                 console.log(idOrganization);
//
//                 // fetch(`${URLupdater}`, {
//                 //     "headers": {
//                 //         "accept": "application/json, text/plain, */*",
//                 //         "accept-language": "ru",
//                 //         "content-type": "application/json",
//                 //         "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
//                 //         "sec-ch-ua-mobile": "?1",
//                 //         "sec-ch-ua-platform": "\"Android\"",
//                 //         "sec-fetch-dest": "empty",
//                 //         "sec-fetch-mode": "cors",
//                 //         "sec-fetch-site": "same-origin",
//                 //         "Cookie": cookies
//                 //     },
//                 //     "referrer": `${referrerURL}`,
//                 //     "referrerPolicy": "strict-origin-when-cross-origin",
//                 //     "body": "{\"organizer\":53,\"organizerAddress\":\"192174, г. Санкт-Петербург, ул. Бабушкина, д. 119, литера А\",\"organizerAddressEng\":null,\"organizerSupervisorFio\":\"Семенова Светлана Альбертовна\",\"organizerSupervisorFioEng\":null,\"organizerPhone\":[\"78123623215\"],\"organizerSite\":\"https://academykotin.ru/\",\"organizerEmail\":\"info@academykotin.ru\",\"organizerVk\":\"https://vk.com/nevmash\",\"organizerTelegram\":\"https://t.me/professionalismAMK\"}",
//                 //     "method": "PATCH",
//                 //     "mode": "cors",
//                 //     "credentials": "include"
//                 // }).then(res => res.text()).then(data => console.log(data));
//             });
//
//             // передаем остатки данных, в которых не нужны никакие дополнительные фетчи
//
//             // fetch(`${URLupdater}`, {
//             //     "headers": {
//             //         "accept": "application/json, text/plain, */*",
//             //         "accept-language": "ru",
//             //         "content-type": "application/json",
//             //         "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
//             //         "sec-ch-ua-mobile": "?1",
//             //         "sec-ch-ua-platform": "\"Android\"",
//             //         "sec-fetch-dest": "empty",
//             //         "sec-fetch-mode": "cors",
//             //         "sec-fetch-site": "same-origin",
//             //         "Cookie": cookies
//             //     },
//             //     "referrer": `${referrerURL}`,
//             //     "referrerPolicy": "strict-origin-when-cross-origin",
//             //     "body": "{\"periods\":[{\"lower\":\"2023-07-21T16:28:47.618Z\",\"upper\":\"2023-07-22T18:00:00.827Z\"}],\"registrationComment\":null,\"registrationNecessity\":null,\"placesNumber\":null}",
//             //     "method": "PATCH",
//             //     "mode": "cors",
//             //     "credentials": "include"
//             // }).then(res => res.text()).then(data => console.log(data));
//             //
//
//         })
//
//
//     }






