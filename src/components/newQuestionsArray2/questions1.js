

const questions = [
    {
        id:1,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն արդյոք անդամ պետությունների օրենսդրությամբ սահմանված դեպքերում թույլատրվում է մինչեւ ապրանքների բացթողումը փոխել ապրանքների ժամանակավոր պահպանման վայրը",
        answers:[
            {id:0,answer:"այո՝ միայն ԵՏՀ հանձնաժողովի կողմից սահմանված դեպքերում",isCorrect:false},
            {id:1,answer:"այո",isCorrect:true},
            {id:2,answer:"Ոչ",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:2,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն ինչպես է սահմանվում «մաքսային հայտարարագրում» հասկացությունը",
        answers:[
            {id:0,answer:"Մաքսային մարմնին մաքսային հայտարարագրի միջոցով ներմուծվող ապրանքների վերաբերյալ տեղեկությունների, ընտրված մաքսային ընթացակարգի  վերաբերյալ և (կամ) ապրանքների բացթողման համար անհրաժեշտ այլ տեղեկությունների հայտարարագրում",isCorrect:false},
            {id:1,answer:"Հայտարարատուի մաքսային հայտարարագրի միջոցով ապրանքների վերաբերյալ տեղեկությունների, ֆինանսական պարտավորությունների կատարման ապահովման և (կամ) ապրանքների բացթողման համար անհրաժեշտ այլ տեղեկությունների հայտարարագրում",isCorrect:false},
            {id:2,answer:"Մաքսային մարմնին մաքսային հայտարարագրի միջոցով ապրանքների վերաբերյալ տեղեկությունների, ընտրված մաքսային ընթացակարգի  վերաբերյալ և (կամ) ապրանքների բացթողման համար անհրաժեշտ այլ տեղեկությունների հայտարարագրում",isCorrect:true},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:3,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն ինչպես է սահմանվում «մաքսատուրք» հասկացությունը",
        answers:[
            {id:0,answer:"պարտադիր վճար, որը գանձվում է մաքսային մարմինների կողմից Միության մաքսային սահմանով ապրանքներ տեղափոխելու դեպքում",isCorrect:true},
            {id:1,answer:"պարտադիր հարկատեսակ, որը գանձվում է մաքսային մարմինների կողմից Միության մաքսային սահմանով ապրանքներ տեղափոխելու դեպքում",isCorrect:false},
            {id:2,answer:"պարտադիր վճար, որը գանձվում է մաքսային մարմինների կողմից Հայաստանի հանրապետության մաքսային սահմանով ապրանքներ տեղափոխելու դեպքում",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:4,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն ինչպես է սահմանվում «միասնական դրույքաչափերով գանձվող մաքսատուրքեր, հարկեր» հասկացությունը",
        answers:[
            {id:0,answer:"անձնական օգտագործման ապրանքների նկատմամբ հաշվարկված մաքսատուրքերի, հարկերի գումարը՝ առանց այն դրա բաղկացուցիչ մաքսատուրքերի, հարկերի տրոհելու.",isCorrect:true},
            {id:1,answer:"անձնական օգտագործման ապրանքների նկատմամբ հաշվարկված մաքսատուրքերի գումարը՝ առանց այն դրա բաղկացուցիչ մաքսատուրքերի տրոհելու.",isCorrect:false},
            {id:2,answer:"անձնական օգտագործման ապրանքների նկատմամբ հաշվարկված մաքսատուրքերի, հարկերի գումարը՝ դրա բաղկացուցիչ մաքսատուրքերի, հարկերի տրոհելով.",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:5,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն ինչպես է սահմանվում «ներքին շուկայի պաշտպանության միջոցներ» հասկացությունը",
        answers:[
            {id:0,answer:"Հատուկ պաշտպանական, հակագնագցման, փոխհատուցման միջոցներ,սակագնային և ոչ սակագնային կարգավորման միջոցներ և «Միության մասին» պայմանագրին համապատասխան սահմանված՝ ներքին շուկայի պաշտպանության այլ միջոցներ, որոնք սահմանվում են երրորդ երկրներից ծագող և Միության մաքսային տարածք ներմուծվող ապրանքների նկատմամբ",isCorrect:false},
            {id:1,answer:"Հատուկ պաշտպանական, հակագնագցման, փոխհատուցման միջոցներ և «Միության մասին» պայմանագրին համապատասխան սահմանված՝ ներքին շուկայի պաշտպանության այլ միջոցներ, որոնք սահմանվում են երրորդ Միության երկներից ծագող և Միության մաքսային տարածք ներմուծվող ապրանքների նկատմամբ",isCorrect:false},
            {id:2,answer:"Հատուկ պաշտպանական, հակագնագցման, փոխհատուցման միջոցներ և «Միության մասին» պայմանագրին համապատասխան սահմանված՝ ներքին շուկայի պաշտպանության այլ միջոցներ, որոնք սահմանվում են երրորդ երկրներից ծագող և Միության մաքսային տարածք ներմուծվող ապրանքների նկատմամբ",isCorrect:true},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:6,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն նշվածներից որ փաստաթղթում են հաշվարկվում մաքսատուրքերը",
        answers:[
            {id:0,answer:"ֆինանսական հայտարարագում",isCorrect:false},
            {id:1,answer:"ապրանքների մատակարարումը հաստատող առևտրային փաստաթղթերում",isCorrect:false},
            {id:2,answer:"ապրանքի հայտարարագրում",isCorrect:true},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:7,
        question:"Նշված տարբերակների որում են սահմանված միայն մաքսային հայտարարագրեր",
        answers:[
            {id:0,answer:"Տարանցման հայտարարագիր, ուղևորային մաքսային հայտարարագիր, տրանսպորտային միջոցի հայտարարագիր,ծագման հայտարարագիր",isCorrect:false},
            {id:1,answer:"Տարանցման հայտարարագիր, ուղևորային մաքսային հայտարարագիր, տրանսպորտային միջոցի հայտարարագիր,ավելացված արժեքի հարկի հայտարարագիր",isCorrect:false},
            {id:2,answer:"Տարանցման հայտարարագիր, ուղևորային մաքսային հայտարարագիր, տրանսպորտային միջոցի հայտարարագիր,ուղեվորային մաքսային հայտարարագիր,մաքսային արժեքի հայտարարագիր",isCorrect:true},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:8,
        question:"Որ օրն է համարվում ապրանքները մաքսային ընթացակարգով ձևակերպելու օր",
        answers:[
            {id:0,answer:"Ապրանքները մաքսային ընթացակարգով ձևակերպելու օր է համարվում ապրանքների հայտարարագրի գրանցման օրը՝ բացառությամբ նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք ներմուծվող ապրանքների, որոնք համարվում են <<ազատ մաքսային գոտի>> մաքսային ընթացակարգով ձևակերպված նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք ներմուծման օրվանից",isCorrect:false},
            {id:1,answer:"Ապրանքները մաքսային ընթացակարգով ձևակերպելու օր է համարվում ապրանքների բացթողման օրը՝ բացառությամբ նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք ներմուծվող ապրանքների, որոնք համարվում են <<ազատ մաքսային գոտի>> մաքսային ընթացակարգով ձևակերպված նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք ներմուծման օրվանից",isCorrect:true},
            {id:2,answer:"Ապրանքները մաքսային ընթացակարգով ձևակերպելու օր է համարվում ապրանքների բացթողման օրը՝ բացառությամբ նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք ներմուծվող ապրանքների, որոնք համարվում են <<ազատ տնտեսական գոտի>> մաքսային ընթացակարգով ձևակերպված նավահանգստային ազատ տնտեսական գոտու կամ լոգիստիկ ազատ տնտեսական գոտու տարածք արտահանման օրվանից",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:9,
        question:"«Մաքսային տարանցում» մաքսային ընթացակարգին համապատասխան ապրանքների փոխադրման դեպքում մաքսային տարանցման ժամկետը երկարաձգելու համար հայտարարատուն կամ փոխադրողը մաքսային տարանցման սահմանված ժամկետը երկարաձգելու վերաբերյալ հիմնավորված դիմումը երբ և ուր է ուղարկում",
        answers:[
            {id:0,answer:"նախքան ուղարկող մաքսային մարմնի կողմից սահմանված մաքսային տարանցման ժամկետը լրանալը ուղարկող մաքսային մարմին կամ այն մաքսային մարմին, որը լիազորված է կատարել մաքսային գործառնություններ ",isCorrect:true},
            {id:1,answer:"Ուղարկող մաքսային մարմնի կողմից սահմանված մաքսային տարանցման ժամկետը լրանալուց հետո ուղարկող մաքսային մարմին կամ այն մաքսային մարմին, որը լիազորված է կատարել մաքսային գործառնություններ ",isCorrect:false},
            {id:2,answer:"նախքան ուղարկող մաքսային մարմնի կողմից սահմանված մաքսային տարանցման ժամկետը լրանալը ուղարկող մաքսային մարմին",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:10,
        question:"Համաձայն <<Մաքսային կարգավորման մասին>> ՀՀ օրենքի մաքսային մարմիններին վճարվող ստորև ներկայացվածներից որ վճարներն են համարվում մաքսային վճարներ",
        answers:[
            {id:0,answer:"Մաքսային վճարներ են համարվում  մաքսային մարմիններին վճարվող ավելացված արժեքի հարկը, ակցիզային հարկը,ճանապարհային հարկը և  Պետական տուրքը",isCorrect:false},
            {id:1,answer:"Մաքսային վճարներ են համարվում մաքսատուրքը, մաքսային մարմիններին վճարվող ավելացված արժեքի հարկը, ակցիզային հարկը և Պետական տուրքը",isCorrect:true},
            {id:2,answer:"Մաքսային վճարներ են համարվում արտահանման մաքսատուրքը,ներմուծման մաքսատուրքը,մաքսային մարմիններին վճարվող ավելացված արժեքի հարկը, ակցիզային հարկը և Պետական տուրքը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:11,
        question:"Ներմուծվող ապրանքների մաքսային արժեքը որոշելիս ստորև նշվածներից որ գինն է ընդունվում որպես համանման ապրանքների գործարքի գին",
        answers:[
            {id:0,answer:"նույնանման ապրանքների համար դիտարկվող պահին նախորդող 90-օրյա ժամկետում կիրառված գործարքի գինը",isCorrect:false},
            {id:1,answer:"համանման ապրանքների համար դիտարկվող պահին նախորդող 90-օրյա ժամկետում կիրառված գործարքի գինը",isCorrect:true},
            {id:2,answer:"համանման կամ նույնանման ապրանքների համար դիտարկվող պահին նախորդող 60-օրյա ժամկետում կիրառված գործարքի գինը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:12,
        question:"Ստորև նշվածններից որ դեպքում է մաքսային մարմինը մերժում ապրանքների ժամանակավոր պահպանությունը   ստացողի պահեստում.",
        answers:[
            {id:0,answer:"եթե ժամանակվոր պահպանություն իրականացնող անձը մինչև մաքսային մարմին դիմելու օրը երկու տարվա ընթացքում մեկ և ավելի անգամ ենթարկվել է վարչական պատասխանատվությ ան մաքսային գործի բնագավառին վերաբերող վարչական իրավախախտումների համար",isCorrect:false},
            {id:1,answer:"եթե ժամանակվոր պահպանություն իրականացնող անձը մինչև մաքսային մարմին դիմելու օրը մեկ տարվա ընթացքում մեկ և ավելի անգամ ենթարկվել է վարչական պատասխանատվությ ան մաքսային գործի բնագավառին վերաբերող վարչական իրավախախտումների  համար",isCorrect:false},
            {id:2,answer:"եթե ժամանակվոր պահպանություն իրականացնող անձը մինչև մաքսային մարմին դիմելու օրը մեկ տարվա ընթացքում երկու և ավելի անգամ ենթարկվել է վարչական պատասխանատվությ ան մաքսային գործի բնագավառին վերաբերող վարչական իրավախախտումների  համար",isCorrect:true},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:13,
        question:"Ստորև նշվածներից՝ որ պաշտոնատար անձինք իրավունք ունեն մաքսային մարմինների անունից մաքսային կանոնների խախտման վերաբերյալ գործերը քննելու և որոշում կայացնելու",
        answers:[
            {id:0,answer:"բոլոր պաշտոնների մաքսային մարմինները",isCorrect:false},
            {id:1,answer:"մաքսային մարմինների ղեկավարները, նրանց տեղակալները, վերադաս մաքսային մարմնի համապատասխան իրավասություն ունեցող կառուցվածքային ստորաբաժանումների ղեկավարները",isCorrect:true},
            {id:2,answer:"մաքսային մարմինների ղեկավարները կամ նրանց տեղակալները",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:14,
        question:"Ստորև նշվածներից որն է հանդիսանում մաքսային ձևակերպումների մասնագետի որակավորման վկայականի գործողությունը դադարեցման հիմք",
        answers:[
            {id:0,answer:"մաքսային ձևակերպումների մասնագետը մեկ տարվա ընթացքում երեք և ավելի անգամ ենթարկվել է պատասխանատվության` մաքսային վճարների թերի հաշվարկմանը և (կամ) վճարմանը և (կամ) ոչ սակագնային կարգավորման միջոցների կիրառմանը հանգեցնող մաքսային կանոնների խախտման համար.",isCorrect:true},
            {id:1,answer:"մաքսային ձևակերպումների մասնագետը մեկ տարվա ընթացքում երկու և ավելի անգամ ենթարկվել է պատասխանատվության` մաքսային վճարների թերի հաշվարկմանը և (կամ) վճարմանը  հանգեցնող մաքսային կանոնների խախտման համար.",isCorrect:false},
            {id:2,answer:"մաքսային ձևակերպումների մասնագետը երկու տարվա ընթացքում մեկ և ավելի անգամ ենթարկվել է պատասխանատվության` մաքսային վճարների ավել հաշվարկմանը և (կամ) վճարմանը և (կամ) ոչ սակագնային կարգավորման,ներքին շուկայի պաշտպանության միջոցների կիրառմանը հանգեցնող մաքսային կանոնների խախտման համար.",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:15,
        question:"Միության մաքսային օրենսգրքի Համաձայն մաքսային մարմիններին վճարվող ստորև ներկայացվածներից որ վճարներն են համարվում մաքսային վճարներ",
        answers:[
            {id:0,answer:"Մաքսային վճարներ են համարվում մաքսատուրքը, մաքսային մարմիններին վճարվող ավելացված արժեքի հարկը, ակցիզային հարկը և Պետական տուրքը",isCorrect:false},
            {id:1,answer:"Մաքսային վճարներ են ներմուծման մաքսատուրքը,արտահանման մաքսատուրքը,ավելացված արժեքի հարկը, որը գանձվում է Միության մաքսային տարածք ապրանքների ներմուծման ժամանակ,ակցիզային հարկը,մաքսավճարները",isCorrect:true},
            {id:2,answer:"Մաքսային վճարներ են ներմուծման մաքսատուրքը,ավելացված արժեքի հարկը, որը գանձվում է Միության մաքսային տարածք ապրանքների ներմուծման ժամանակ,ակցիզային հարկը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:16,
        question:"Ինչ ժամկետով է տրամադրվում մաքսատուրքի վճարումը հետաձգելու կամ տարաժամկետ վճարելու հնարավորությունը",
        answers:[
            {id:0,answer:"մաքսատուրքի վճարումը հետաձգելու կամ տարաժամկետ վճարելու հնարավորությունը տրամադրվում է հայտարարատուի խնդրարկած ժամկետով, բայց ոչ ավելի, քան վեց ամիս",isCorrect:true},
            {id:1,answer:"մաքսատուրքի վճարումը հետաձգելու կամ տարաժամկետ վճարելու հնարավորությունը տրամադրվում է հայտարարատուի խնդրարկած ժամկետով, բայց ոչ ավելի, քան երեք ամիս",isCorrect:false},
            {id:2,answer:"մաքսատուրքի վճարումը հետաձգելու կամ տարաժամկետ վճարելու հնարավորությունը տրամադրվում է հայտարարատուի կամ մաքսային ներկայացուցչի խնդրարկած ժամկետով, բայց ոչ ավելի, քան մեկ ամիս",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:17,
        question:"Փոխադրողը կամ Միության Օրենսգրքի 83-րդ հոդվածում նշված այլ անձինք մաքսային մարմնի աշխատանքային ժամերին՝ ժամանման մասին ծանուցման պահից սկսած 3 ժամվա ընթացքում փոխադրվող ապրանքների համար ստորև ներկայացված որ տարբերակի  գործառնություններից որեւէ մեկը պետք է կատարեն",
        answers:[
            {id:0,answer:"ապրանքները ժամանակավոր պահպանման հանձնելու հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ.",isCorrect:false},
            {id:1,answer:"ապրանքները ժամանակավոր պահպանման հանձնելու հետ,ժամանման վայրերից ժամանակավոր պահպանման վայրեր ապրանքների փոխադրման (տրանսպորտային փոխադրման) հետ,ապրանքների մաքսային հայտարարագրման հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ.",isCorrect:true},
            {id:2,answer:"ապրանքները ժամանակավոր պահպանման հանձնելու հետ,ապրանքների ոչնչացման հետ,ժամանման վայրերից ժամանակավոր պահպանման վայրեր ապրանքների փոխադրման (տրանսպորտային փոխադրման) հետ,ապրանքների մաքսային հայտարարագրման հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ,նավահանգստային ԱՏԳ կամ լոգիստիկ ԱՏԳ տարածքում «ազատ մաքսային գոտի» մաքսային ընթացակարգով ապրանքների ձեւակերպման հետ.",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:18,
        question:"Ինչ գործողության են ենթակա այն մաքսային ընթացակարգով ձեւակերպված ապրանքները, որի գործողությունը դադարել է ինչպես նաեւ այդ մաքսային ընթացակարգի կիրառման շրջանակներում ստացված (գոյացած), պատրաստված (ստացված) ապրանքները, որոնք արգելանքի չեն վերցվել (չեն արգելապահվել) մաքսային մարմինների կողմից",
        answers:[
            {id:0,answer:"Ենթակա են հանձնման ժամանակավոր պահպանման:",isCorrect:true},
            {id:1,answer:"Ենթակա են Միության տարածքից արտահանման",isCorrect:false},
            {id:2,answer:"Ենթակա են ոչնչացման",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:19,
        question:"Այն անձինք, որոնք ունեն լիազորություններ ժամանակավոր պահպանման հանձնված ապրանքների նկատմամբ,իրավունք ունե՞ն դրանք արտահանելու մինչև այդ ապրանքների բացթողումը",
        answers:[
            {id:0,answer:"Ունեն,եթե ապրանքները ժամանակավոր պահպանության տակ են ավել քան 4 ամիս,իսկ միջազգային փոստային առաքանիների դեպքում՝ 6 ամիս",isCorrect:false},
            {id:1,answer:"Ոչ,չունեն",isCorrect:true},
            {id:2,answer:"Այո,ունեն",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:20,
        question:"Որն է համարվում լիազոր մարմին ԱՏԳ ԱԱ 25-27 ապրանքային խմբերում ընդգրկված ապրանքների /միներալային արտադրանք/՝ <Ոչնչացում> մաքսային ընթացակարգով ձևակերպման ժամանակ",
        answers:[
            {id:0,answer:"ՀՀ սննդամթերքի անվտանգության տեսչական մարմինը",isCorrect:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:true},
            {id:2,answer:"ՀՀ Տարածքային կառավարման եւ ենթակառուցվածքների նախարարությունը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:21,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում Օզոնային շերտը քայքայող նյութերի (որոնց տեղափոխումը Եվրասիական  տնտեսական միության մաքսային տարածքով սահմանափակ է արտահանման և ներմուծման դեպքում) լիցենզավորման գործընթացը",
        answers:[
            {id:0,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:true,answered:false},
            {id:1,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:false,answered:false},
            {id:2,answer:"ՀՀ Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:22,
        question:"Գրենլանդական փոկերից և դրանց ձագերից պատրաստված արտադրանքերը, որոնց ներմուծումն արգելված է Եվրասիական տնտեսական միության մաքսային տարածք,ոլորտը համակարգող պետական լիազոր մարմին է հանդիսանում",
        answers:[
            {id:0,answer:"ՀՀ Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:23,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում թմրամիջոցներ և հոգեմետ (հոգեներգործուն) նյութերի պրեկուրսորներ չհամարվող թունավոր նյութերի (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է ներմուծման դեպքում) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:24,
        question:"Ստորև նշվածներից ով է որոշում Հայաստանի Հանրապետության սահմանով արտահանվող ապրանքների մաքսային արժեքը.",
        answers:[
            {id:0,answer:"հայտարարատուն կամ օրենքով սահմանված դեպքերում մաքսային մարմինը",isCorrect:true,answered:false},
            {id:1,answer:"մաքսային մարմինը",isCorrect:false,answered:false},
            {id:2,answer:"հայտարարատուն",isCorrect:false,answered:false},
        ]
    },
    {
        id:25,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում թմրամիջոցներ և հոգեմետ (հոգեներգործուն) նյութերի պրեկուրսորներ չհամարվող թունավոր նյութերի (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է ներմուծման դեպքում) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:26,
        question:"Ով է հայտարարագրում ապրանքի ԱՏԳ ԱԱ ծածկագիրը",
        answers:[
            {id:0,answer:"հայտարարատուն",isCorrect:true,answered:false},
            {id:1,answer:"հայտարարատուն կամ մաքսային մարմինը",isCorrect:false,answered:false},
            {id:2,answer:"մաքսային մարմինը",isCorrect:false,answered:false},
        ]
    },
    {
        id:27,
        question:"Հայտարարագրվող ԱՏԳ ԱԱ անվանացանկի  ապրանքները(դեղեր և դեղագործական նյութեր) ոչ դեղագործական նպատակներով ներմուծելու դեպքում,ինչ է անում հայտարարատուն արգելքներն և սահամանափակումները անցման համար ",
        answers:[
            {id:0,answer:"ներմուծողը պետք է ստանա այդ ապրանքերը ներմուծելու համար հավաստագիր",isCorrect:false,answered:false},
            {id:1,answer:"ներմուծողը հայտարարագրում է, որ ապրանքերը ներմուծվում է ոչ դեղագործական նպատակներով:",isCorrect:true,answered:false},
            {id:2,answer:"այդ ապրանքրների ներմուծումը արգելված է",isCorrect:false,answered:false},
        ]
    },
    {
        id:28,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում Մարդու օրգաններ և հյուսվածքներ, արյուն և դրա բաղադրամասեր, մարդու  կենսաբանական նյութերի նմուշներ (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է ներմուծման և (կամ)  արտահանման դեպքերում) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ առողջապահության նախարարություն",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:29,
        question:"Թույլատրվու՞մ է արդյոք ֆիզիկական անձանց մարդու օրգաններ և հյուսվածքներ, արյուն և դրա բաղադրամասեր, մարդու կենսաբանական նյութերի նմուշների տեղափոխումը",
        answers:[
            {id:0,answer:"Ֆիզիկական անձանց կողմից տեղափոխումը թույլատրվում է",isCorrect:false,answered:false},
            {id:1,answer:"Ֆիզիկական անձանց կողմից տեղափոխումը չի թույլատրվում, բացառությամբ արյան և դրա բաղադրամասերի (Պահանջվում է եզրակացություն)",isCorrect:false,answered:false},
            {id:2,answer:"Ֆիզիկական անձանց կողմից տեղափոխումը չի թույլատրվում,բացառությամբ կենսաբանական նմուշների (Պահանջվում է եզրակացություն)",isCorrect:true,answered:false},
        ]
    },
    {
        id:30,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում Ծածկագրային (կրիպտոգրաֆիկական) միջոցների (որոնց ներմուծումը Եվրասիական տնտեսական միության մաքսային տարածք և արտահանումը Եվրասիական տնտեսական միության մաքսային տարածքից սահմանափակ է) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ ոստիկանություն",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ ազգային անվտանգության ծառայություն",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ Բարձր տեխնոլոգիական արդյունաբերության նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:31,
        question:"Ինչ է տրամադրանում ՀՀ էկոնոմիկայի նախարարությունը թանկարժեք Թանկարժեք մետաղներ և թանկարժեք մետաղներ պարունակող հումքային ապրանքներ (որոնց ներմուծումը Եվրասիական տնտեսական միության մաքսային տարածք և  արտահանումը Եվրասիական տնտեսական միության մաքսային տարածքից սահմանափակ է) լիցենզավորման ժամանակ",
        answers:[
            {id:0,answer:"Տրամադրում է եզրակացություն",isCorrect:false,answered:false},
            {id:1,answer:"Տրամադրում է պետական վերահսկողության ակտ",isCorrect:true,answered:false},
            {id:2,answer:"Տրամադրում է ակտ",isCorrect:false,answered:false},
        ]
    },
    {
        id:32,
        question:"Ենթակա՞ են արտահանման Մշակութային այն արժեքները, որոնք գրանցված են կամ ենթակա են գրանցման մշակութային արժեքների պահպանական ցուցակում",
        answers:[
            {id:0,answer:"ենթակա են արտահանման միայն այն դեպքում, երբ Հայաստանի Հանրապետությունը մեկամսյա ժամկետում չի օգտվում դրանց գնման նախապատվության իրավունքից",isCorrect:true},
            {id:1,answer:"ենթակա են արտահանման միայն այն դեպքում, երբ Հայաստանի Հանրապետությունը եռամսյա ժամկետում չի օգտվում դրանց գնման նախապատվության իրավունքից",isCorrect:false},
            {id:2,answer:"ենթակա են արտահանման միայն այն դեպքում, երբ Հայաստանի Հանրապետության ոլորտը համակարգող մարմինը տրամադրում է լիցենզիա",isCorrect:false},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:33,
        question:"Ի՞նչ է «Ազատ պահեստ» մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն օտարերկրյա ապրանքների և Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման  պայմանները:",isCorrect:true,answered:false},//
            {id:1,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման պայմանները:",isCorrect:false,answered:false},
            {id:2,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման պայմանները:",isCorrect:false,answered:false},
        ]
    },
    {
        id:34,
        question:"Ինչ է «Ժամանակավոր ներմուծում (թույլտվություն)» մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Ժամանակավոր ներմուծում (թույլտվություն)» մաքսային ընթացակարգն օտարերկրյա և Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդ ապրանքները ժամանակավոր գտնվում և օգտագործվում են Միության մաքսային տարածքում, պահպանելով ապրանքներն այդ մաքսային ընթացակարգով ձևակերպելու և այդ մաքսային ընթացակարգին համապատասխան դրանք օգտագործելու պայմանները՝ ներմուծման մաքսատուրքերի, հարկերի մասնակի վճարմամբ և առանց հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման կամ առանց ներմուծման մաքսատուրքերի, հարկերի վճարման և առանց հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման:",isCorrect:false,answered:false},
            {id:1,answer:"«Ժամանակավոր ներմուծում (թույլտվություն)» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդ ապրանքները ժամանակավոր գտնվում և օգտագործվում են Միության մաքսային տարածքում, պահպանելով ապրանքներն այդ մաքսային ընթացակարգով ձևակերպելու և այդ մաքսային ընթացակարգին համապատասխան դրանք օգտագործելու պայմանները՝ ներմուծման մաքսատուրքերի, հարկերի մասնակի վճարմամբ և առանց հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման կամ առանց ներմուծման մաքսատուրքերի, հարկերի վճարման և առանց հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման:",isCorrect:true,answered:false},
            {id:2,answer:"«Ժամանակավոր ներմուծում (թույլտվություն)» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառելի մաքսային ընթացակարգ է, որին համապատասխան՝ Միության մաքսային տարածքում այդպիսի ապրանքների հետ կատարվում են վերամշակման գործողություններ՝ դրանց վերամշակման արդյունքներ ստանալու նպատակով, որոնք նախատեսված են Միության մաքսային տարածքից հետագա արտահանման համար՝ առանց այդպիսի օտարերկրյա ապրանքների առնչությամբ ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և դրանց օգտագործման պայմանները՝ այդ մաքսային ընթացակարգինհամապատասխան:",isCorrect:false,answered:false},
        ]
      },    {
        id:35,
        question:"Ի՞նչ է «Վերաներմուծում»  մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Վերաներմուծում» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ Միության մաքսային տարածքից ավելի վաղ արտահանված այդպիսի ապրանքները ներմուծվում են Միության մաքսային տարածք առանց ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման՝ պահպանելով ապրանքներն այդ մաքսային ընթացակարգով ձևակերպելու պայմանները:",isCorrect:true,answered:false},
            {id:1,answer:"«Վերաներմուծում» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ Միության մաքսային տարածքից ավելի վաղ արտահանված այդպիսի ապրանքները ներմուծվում են Միության մաքսային տարածք ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի մասնակի վճարմամբ՝ պահպանելով ապրանքներն այդ մաքսային ընթացակարգով ձևակերպելու պայմանները:",isCorrect:false,answered:false},
            {id:2,answer:"«Վերաներմուծում» մաքսային ընթացակարգն օտարերկրյա և Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ Միության մաքսային տարածքից ավելի վաղ արտահանված այդպիսի ապրանքները ներմուծվում են Միության մաքսային տարածք առանց ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման՝ պահպանելով ապրանքներն այդ մաքսային ընթացակարգով ձևակերպելու պայմանները:",isCorrect:false,answered:false},
        ]
      },
      {
        id:36,
        question:"«Ներքին սպառման համար վերամշակում» մաքսային ընթացակարգը`",
        answers:[
            {id:0,answer:"Օտարերկրյա և Միության ապրանքների նկատմամբ կիրառվող այն մաքսային ընթացակարգն է, որին համապատասխան այդ ապրանքները ենթարկվում են ներքին սպառման համար վերամշակման գործողությունների՝ դրանց վերամշակման արդյունքներն ստանալու նպատակով՝ հետագայում «ներքին սպառման համար բացթողում» մաքսային ընթացակարգով ձևակերպվելու համար՝ առանց այդ օտարերկրյա ապրանքների համար ներմուծման մաքսատուրքեր վճարելու, եթե պահպանվում են այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և դրանք այդ մաքսային ընթացակարգին համապատասխան օգտագործելու պայմանները:",isCorrect:false,answered:false},
            {id:1,answer:"Օտարերկրյա ապրանքների նկատմամբ կիրառվող այն մաքսային ընթացակարգն է, որին համապատասխան այդ ապրանքները ենթարկվում են ներքին սպառման համար վերամշակման գործողությունների՝ դրանց վերամշակման արդյունքներն ստանալու նպատակով՝ հետագայում «ներքին սպառման համար բացթողում» մաքսային ընթացակարգով ձևակերպվելու համար՝ առանց այդ օտարերկրյա ապրանքների համար ներմուծման մաքսատուրքեր վճարելու, եթե պահպանվում են այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և դրանք այդ մաքսային ընթացակարգին համապատասխան օգտագործելու պայմանները:",isCorrect:true,answered:false},
            {id:2,answer:"Օտարերկրյա ապրանքների նկատմամբ կիրառվող այն մաքսային ընթացակարգն է, որին համապատասխան այդ ապրանքները ենթարկվում են մաքսային տարածքից դուրս վերամշակման գործողությունների՝ դրանց վերամշակման արդյունքներն ստանալու նպատակով՝ հետագայում «Վերաներմուծում» մաքսային ընթացակարգով ձևակերպվելու համար՝ առանց այդ օտարերկրյա ապրանքների համար ներմուծման մաքսատուրքեր վճարելու, եթե պահպանվում են այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և դրանք այդ մաքսային ընթացակարգին համապատասխան օգտագործելու պայմանները:",isCorrect:false,answered:false},
        ]
    },
    {
        id:37,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում բույսերի պաշտպանության միջոցների (որոնց ներմուծումը Եվրասիական տնտեսական միության մաքսային տարածք սահմանափակ է) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ  Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:38,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում թանկարժեք քարերի (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է ներմուծման և արտահանման դեպքերում) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ  Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:false,answered:false},
            {id:2,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:true,answered:false},
        ]
    },
    {
        id:39,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում Ծածկագրային (կրիպտոգրաֆիկական) միջոցների (որոնց ներմուծումը Եվրասիական տնտեսական միության մաքսային տարածք և արտահանումը Եվրասիական տնտեսական միության մաքսային տարածքից սահմանափակ է) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ ոստիկանություն",isCorrect:false,answered:false},
            {id:1,answer:"ՀՀ ազգային անվտանգության ծառայություն",isCorrect:true,answered:false},
            {id:2,answer:"ՀՀ Բարձր տեխնոլոգիական արդյունաբերության նախարարությունը",isCorrect:false,answered:false},
        ]
    },
    {
        id:40,
        question:"ԵԱՏՄ հետ գործող ազատ առևտրի համաձայնագրերի շրջանակներում ո՞ր հավաստագիրն է հանդիսանում առանձնաշնորհային",
        answers:[
            {id:0,answer:"CT-4",isCorrect:false,answered:false},
            {id:1,answer:"CT-1",isCorrect:false,answered:false},
            {id:2,answer:"CT-3",isCorrect:true,answered:false},
        ]
    },
      

]

export default questions