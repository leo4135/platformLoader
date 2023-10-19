async function lolkek() {
let cookie
    await fetch("https://demo.pnvsh.n3dev.ru/api/login/", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\""
        },
        "referrer": "https://demo.pnvsh.n3dev.ru/auth/sign-in/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"username\":\"leo4135@yandex.ru\",\"password\":\"Cqcalksu1994\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(res => {
        cookie = res.headers.get('Set-Cookie')
    }).then(() => {

        fetch("https://demo.pnvsh.n3dev.ru/api/v1/competition/62/stage/76/request/158/expertise/45/", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ru",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "Cookie": cookie
            },
            "referrer": "https://demo.pnvsh.n3dev.ru/user/profile/expertises/45/expertise/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"status\":\"ready\",\"grade\":50,\"comment\":\"filehandle.reat will be filled with the file data read. Default: Buffer.alloc(16384)\\noffset <integer> The location in the buffer at which to start filling. Default: 0\\nlength <integer> The number of bytes to read. Default: buffer.byteLength - offset\\nposition <integer> | <null> The location where to begin reading data from the file. If null, data will be read from the current file position, and the position will be updated. If position is an integer, the current file position will remain unchanged. Default:: null\\nReturns: <Promise> Fulfills upon success with an object with two properties:\\nbytesRead <integer> The number of bytes read\\nbuffer <Buffer> | <TypedArray> | <DataView> A reference to the passed in buffer argument.\\nReads data from the file and stores that in the given buffer.\\n\\nIf the file is not modified concurrently, the end-of-file is reached when the number of bytes read is zero.asdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasdaasdasdasdasda\",\"attachments\":[\"55e7f438-4b9d-46c2-870c-b9baf91784d5\"],\"uploadDate\":\"2023-09-21T14:00:31.210Z\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "omit"
        }).then(res => res.text()).then(data => {
            console.log(data)
        });

    })

}

lolkek()