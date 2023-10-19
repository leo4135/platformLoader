export class Eventer {
    #headers
    #body
    #method
    #url

    #res

    constructor(headers, body, method, url) {
        this.#headers = headers;
        this.#body = body;
        this.#method = method;
        this.#url = url;
    }

    async fetcherAuth(create) {
        await fetch(this.#url, {
            "headers": this.#headers,
            "body": this.#body,
            "method": this.#method
        }).then(res => {
            this.#res = res
        })
        await this.fetcherCreateEvent(create)
    }

    fetcherCreateEvent(create) {
        let cookies = this.#res.headers.get('Set-Cookie');

        fetch("https://researchinspb.ru/api/v1/event/", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ru",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "Cookie": cookies
            },
            "referrer": "https://researchinspb.ru/admin/events/create/general-information/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": create?.params,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(res => res.text()).then(data => {
            console.log(data)
                let parseID = JSON.parse(data)
                if (parseID?.title[0] === 'Мероприятие с таким названием зарегистрировано') {
                    return console.log('uje zaregano')
                }
                return parseID
            }
        )
    }


}

fetch("https://researchinspb.ru/api/v1/event/32/", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru",
        "content-type": "application/json",
        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-timezone": "Europe/Moscow"
    },
    "referrer": "https://researchinspb.ru/admin/events/32/edit/general-information/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"title\":\"Test2\",\"titleEng\":null,\"cypher\":null,\"isPublished\":false,\"type\":4,\"eventFormat\":\"online\",\"isAvailable\":true,\"parent\":null,\"coordinates\":null,\"location\":\"192174, г. Санкт-Петербург, ул. Бабушкина, д. 119, литера А\",\"locationEng\":null,\"description\":\"<p>Мероприятие с целью повышения уровня осведомленности обучающихся ОО о направлениях подготовки в рамках ФП &quot;Профессионалитет&quot;</p>\",\"descriptionAttachments\":[],\"descriptionEng\":null,\"descriptionEngAttachments\":[]}",
    "method": "PATCH",
    "mode": "cors",
    "credentials": "include"
});