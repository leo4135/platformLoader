 const fileMainName = 'ПСПбГМУ Павлова'
const fileMainNamer = {
    path: fileMainName
}

const excelToJson = require('convert-excel-to-json');
const fs = require("fs");
const filesPath = [`../files/excel/АМК.xlsx`]

const wordsReplacerMassiv = [
    {
        R: 'А',
        E: 'A'
    },
    {
        R: 'Б',
        E: 'B'
    },
    {
        R: 'В',
        E: 'V'
    },
    {
        R: 'Г',
        E: 'G'
    },
    {
        R: 'Д',
        E: 'D'
    },
    {
        R: 'Е',
        E: 'E'
    },
    {
        R: 'Ё',
        E: 'IO'
    },
    {
        R: 'Ж',
        E: 'J'
    },
    {
        R: 'З',
        E: 'Z'
    },
    {
        R: 'И',
        E: 'I'
    },
    {
        R: 'Й',
        E: 'II'
    },
    {
        R: 'К',
        E: 'K'
    },
    {
        R: 'Л',
        E: 'L'
    },
    {
        R: 'М',
        E: 'M'
    },
    {
        R: 'Н',
        E: 'N'
    },
    {
        R: 'О',
        E: 'O'
    },
    {
        R: 'П',
        E: 'P'
    },
    {
        R: 'Р',
        E: 'R'
    },
    {
        R: 'С',
        E: 'C'
    },
    {
        R: 'Т',
        E: 'T'
    },
    {
        R: 'У',
        E: 'U'
    },
    {
        R: 'Ф',
        E: 'F'
    },
    {
        R: 'Х',
        E: 'H'
    },
    {
        R: 'Ц',
        E: 'C'
    },
    {
        R: 'Ч',
        E: 'CH'
    },
    {
        R: 'Ш',
        E: 'SH'
    },
    {
        R: 'Щ',
        E: 'SH'
    },
    {
        R: 'Ъ',
        E: ''
    },
    {
        R: 'Ы',
        E: 'I'
    },
    {
        R: 'Ь',
        E: ''
    },
    {
        R: 'Э',
        E: 'E'
    },
    {
        R: 'Ю',
        E: 'U'
    },
    {
        R: 'Я',
        E: 'IA'
    },
    {
        R: '_',
        E: '_'
    }
]


for (let n = 0; n < filesPath.length; n++) {

    const result = excelToJson({
        sourceFile: filesPath[n],

        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        header: {
            rows: 2
        },
        sheets: [
            'Диссертационные советы',
            {
                name: 'Диссертационные советы',
                header: {
                    rows: 2
                }
            },
            'Основная информация', {
                name: 'Научные журналы',
                header: {
                    rows: 1
                },
                columnToKey: {
                    'A': '{{A1}}',
                    'B': '{{B1}}',
                    'C': '{{C1}}',
                    'D': '{{D1}}',
                    'E': '{{E1}}',
                    'F': '{{F1}}',
                    'G': '{{G1}}',
                    'H': '{{H1}}',
                    'I': '{{I1}}',
                    'J': '{{J1}}',
                    'K': '{{K1}}',
                    'L': '{{L1}}',
                    'M': '{{M1}}',
                    'N': '{{N1}}',
                    'O': '{{O1}}',
                    'P': '{{P1}}'
                }
            },
            {
                name: 'Крупнейшие мероприятия',
                header: {
                    rows: 1
                },
                columnToKey: {
                    'A': '{{A1}}',
                    'B': '{{B1}}',
                    'C': '{{C1}}',
                    'D': '{{D1}}',
                    'E': '{{E1}}',
                    'F': '{{F1}}',
                    'G': '{{G1}}',
                    'H': '{{H1}}',
                    'I': '{{I1}}',
                    'J': '{{J1}}',
                    'K': '{{K1}}',
                    'L': '{{L1}}',
                    'M': '{{M1}}',
                    'N': '{{N1}}',
                    'O': '{{O1}}',
                    'P': '{{P1}}'
                }
            }]

    });


    let sovets = result['Диссертационные советы'];
    let journals = result['Научные журналы']
    let events = result['Крупнейшие мероприятия']
    console.log(events)
    let imgJournals = []


    let ogrn, inn, fullNameRus, fullNameEng, shortNameRus, shortNameEng, typeOrg, bossFullName,
        bossFullNameEng, bossRoleRus, bossRoleEng, infoAboutOrgRus, infoAboutOrgEng, keyWords,
        OKSO, GRNTI, RNF, VAK, adressRus, adressEng, telephone, webSite, email, VK, TG, youtube, rutube

    for (let i = 0; i < result['Основная информация'].length; i++) {

        switch (result['Основная информация'][i].A) {
            case 'ОГРН':
                ogrn = result['Основная информация'][i]

                console.log(ogrn)
                break
            case 'ИНН':
                inn = result['Основная информация'][i]
                console.log(inn)
                break
            case 'Полное наименование (на русском языке)':
                fullNameRus = result['Основная информация'][i]
                const newStr = fullNameRus.B.replace(/"/g, '');
                fullNameRus.B = newStr
                console.log(fullNameRus)
                break
            case 'Полное наименование (на английском языке)':
                fullNameEng = result['Основная информация'][i]
                console.log(fullNameEng)
                break
            case 'Краткое наименование (на русском языке)':
                shortNameRus = result['Основная информация'][i]
                console.log(shortNameRus)
                break
            case 'Краткое наименование (на английском языке)':
                shortNameEng = result['Основная информация'][i]
                console.log(shortNameEng)
                break
            case 'Тип организации (Образовательная организация высшего образования, Профессиональная образовательная организация, Научная организация, Некоммерческая организация, Организация дополнительного образования, иное - указать)':
                typeOrg = result['Основная информация'][i]
                console.log(typeOrg)
                break
            case 'ФИО руководителя (на русском языке)':
                bossFullName = result['Основная информация'][i]
                console.log(bossFullName)
                break
            case 'ФИО руководителя (на английском языке)':
                bossFullNameEng = result['Основная информация'][i]
                console.log(bossFullNameEng)
                break
            case 'Должность руководителя (на русском языке)':
                bossRoleRus = result['Основная информация'][i]
                console.log(bossRoleRus)
                break

            case 'Должность руководителя (на английском языке)':
                bossRoleEng = result['Основная информация'][i]
                console.log(bossRoleEng)
                break

            case 'Общая информация об организации (на русском языке)':
                infoAboutOrgRus = result['Основная информация'][i]
                console.log(infoAboutOrgRus)
                break

            case 'Общая информация об организации (на английском языке)':
                infoAboutOrgEng = result['Основная информация'][i]
                console.log(infoAboutOrgEng)
                break

            case 'Ключевые слова, характеризующие образовательную и научную деятельность организации (Информатика, Математика, Медицина и т.д. на усмотрение организации)':
                keyWords = result['Основная информация'][i]
                console.log(keyWords)
                break

            case 'Области образования и укрупненные группы по ОКСО (коды и наименования)':
                OKSO = result['Основная информация'][i]
                console.log(OKSO)
                break

            case 'Научные области по ГРНТИ (коды и наименования)':
                GRNTI = result['Основная информация'][i]
                console.log(GRNTI)
                break

            case 'Области науки по РНФ (коды и наименования)':
                RNF = result['Основная информация'][i]
                console.log(RNF)
                break

            case 'Области наук и группы специальностей по ВАК (коды и наименования)':
                VAK = result['Основная информация'][i]
                console.log(VAK)
                break

            case 'Адрес (на русском языке)':
                adressRus = result['Основная информация'][i]
                console.log(adressRus)
                break

            case 'Адрес (на английском языке)':
                adressEng = result['Основная информация'][i]
                console.log(adressEng)
                break

            case 'Телефон':
                telephone = result['Основная информация'][i]
                console.log(telephone)
                break

            case 'Сайт (адрес в сети Интернет)':
                webSite = result['Основная информация'][i]
                console.log(webSite)
                break

            case 'Адрес электронной почты':
                email = result['Основная информация'][i]
                console.log(email)
                break

            case 'Адрес группы ВКонтакте (ссылка)':
                VK = result['Основная информация'][i]
                console.log(VK)
                break

            case 'Адрес канала Telegram (ссылка)':
                TG = result['Основная информация'][i]
                console.log(TG)
                break

            case 'Youtube (ссылка на презентационный видеоролик)':
                youtube = result['Основная информация'][i]
                console.log(youtube)
                break

            case 'Rutube (ссылка на презентационный видеоролик)':
                rutube = result['Основная информация'][i]
                console.log(rutube)
                break
            default:
                break
        }
    }


    let filePather = filesPath[n]
    let nameParse = './excel_files/'
    let fileName = filePather.replace(nameParse, '')
    let currentFileNameJSON = fileName.replace('.xlsx', '.json')
    let fileNameWithoutSpaces = currentFileNameJSON.replace(' ', '_')
    console.log(currentFileNameJSON)

    const fs = require('fs');

    let isBe = [
        {
            'lic': false,
        },
        {
            'svid': false,
        },
        {
            'logo': false,
        },
        {
            'bg': false
        }
    ]


    fs.stat(`C:/Users/User/WebstormProjects/platform_actualization/organizations/${fileMainName}/logo.png`, function (err) {
        if (!err) {
            isBe[2].logo = true;

        }
    })

    fs.stat(`C:/Users/User/WebstormProjects/platform_actualization/organizations/${fileMainName}/bg.jpg`, function (err) {
        if (!err) {
            isBe[3].bg = true;

        }
    })

    fs.stat(`C:/Users/User/WebstormProjects/platform_actualization/organizations/${fileMainName}/Аккредитация.pdf`, function (err) {
        if (!err) {
            isBe[1].svid = true;

        }
    })

    fs.stat(`C:/Users/User/WebstormProjects/platform_actualization/organizations/${fileMainName}/Лицензия.pdf`, function (err) {
        if (!err) {
            isBe[0].lic = true;
            console.log(isBe[0].logo)
        }
    })

    for (let i = 0; i < 5; i++) {
        fs.stat(`C:/Users/User/WebstormProjects/platform_actualization/organizations/${fileMainName}/jour_${i}.png`, function (err) {
            if (!err) {
                let name = `jour_${i}.png`
                let obj = {
                    name: name,

                }

                imgJournals.push(obj)
            }
        })
    }


    setTimeout(() => {

        let filepath = fileNameWithoutSpaces;
        let filepathEng = '';

        for (let j = 0; j < filepath.length; j++) {
            let iterator = filepath[j]
            for (let l = 0; l < wordsReplacerMassiv.length; l++) {
                if (iterator == wordsReplacerMassiv[l].R) {
                    filepathEng += wordsReplacerMassiv[l].E
                }
            }
        }


        filepathEng += '.json'


        let fileContent = JSON.stringify([ogrn, inn, fullNameRus, fullNameEng, shortNameRus, shortNameEng, typeOrg, bossFullName,
            bossFullNameEng, bossRoleRus, bossRoleEng, infoAboutOrgRus, infoAboutOrgEng, keyWords,
            OKSO, GRNTI, RNF, VAK, adressRus, adressEng, telephone, webSite, email, VK, TG, youtube, rutube, isBe[0], isBe[1], isBe[2], isBe[3], sovets, journals, imgJournals, fileMainNamer, events])


        fs.writeFile(`../files/json/${filepathEng}`, fileContent, (err) => {
            if (err) throw err;

            console.log("Успешно");
        });

    }, 5000)


}