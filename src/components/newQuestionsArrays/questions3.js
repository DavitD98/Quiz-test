 const questions = [
    {
        id:0,
        question:"ժամանակավոր պահպանման հանձնված ապրանքների նկատմամբ լիազորություններ ունեցող անձինք մինչև բացթողումը`",
        answers:[
            {id:0,answer:"Իրավունք ունեն դրանք արտահանելու ժամանակավոր պահպանման վայրի տարածքից",isCorrect:false},
            {id:1,answer:"Իրավունք չունեն դրանք արտահանելու ժամանակավոր պահպանման վայրի տարածքից",isCorrect:true},//
            {id:2,answer:"Իրավունք ունեն առանց մաքսային մարմինների թույլտվության՝ դրանցից փորձանմուշներ վերցնել",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:1,
        question:"Ի՞նչ է «Հրաժարում՝ հօգուտ պետության»  մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Հրաժարում՝ հօգուտ պետության» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ այդպիսի ապրանքներն անհատույց հանձնվում են անդամ պետության սեփականությանը (եկամտին)՝ առանց ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման՝ պահպանելով այդպիսի մաքսային ընթացակարգով ապրանքների ձևակերպման պայմանները:",isCorrect:true},//
            {id:1,answer:"«Հրաժարում՝ հօգուտ պետության» մաքսային ընթացակարգն օտարերկրյա և Եվրասիական տնտեսական միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ այդպիսի ապրանքներն անհատույց հանձնվում են անդամ պետության սեփականությանը (եկամտին)՝ առանց ներմուծման մաքսատուրքերի, հարկերի, հատուկ, հակագնագցման, փոխհատուցման տուրքերի վճարման՝ պահպանելով այդպիսի մաքսային ընթացակարգով ապրանքների ձևակերպման պայմանները:",isCorrect:false},
            {id:2,answer:"«Հրաժարում՝ հօգուտ պետության» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան՝ այդպիսի ապրանքներն անհատույց հանձնվում են անդամ պետության սեփականությանը (եկամտին)՝  պահպանելով այդպիսի մաքսային ընթացակարգով ապրանքների ձևակերպման պայմանները:",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:2,
        question:"Ինչ եղանակով է իրականացվում ապրանքների ոչնչացումը",
        answers:[
            {id:0,answer:"Ոչնչացումն իրականացվում է պետական լիազոր մարմնի կողմից տրամադրված պայմանագրով",isCorrect:false},
            {id:1,answer:"Ոչնչացումն իրականացվում է մաքսային մարմնի կողմից նախանշված եղանակով",isCorrect:false},
            {id:2,answer:"Ոչնչացումն իրականացվում է պետական լիազոր մարմնի կողմից նախանշված եղանակով",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:3,
        question:"Ինչ գրառում է ընտրվում ապրանքային հայտարարագրի համակարգի յուրաքանչյուր ապրանքին կից, եթե այն տեղափոխվել է միջազգային  փոստային փոխադրումների միջոցով",
        answers:[
            {id:0,answer:"ЭД",isCorrect:false},
            {id:1,answer:"ЭКГ",isCorrect:false},
            {id:2,answer:"МПО",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:4,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում թանկարժեք մետաղներ և թանկարժեք մետաղներ պարունակող հումքային ապրանքների (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է արտահանման դեպքում) լիցենզավորման գործընթացը",
        answers:[
            {id:0,answer:"ՀՀ Էկոնոմիկայի նախարարությունը",isCorrect:true},//
            {id:1,answer:"ՀՀ Ֆինանսների նախարարությունը",isCorrect:false},
            {id:2,answer:"ՀՀ շրջակա միջավայրի նախարարությունը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:5,
        question:"Հայտարարագրման ժամանակ ով է որոշում ապրանքների ծագման երկիրը",
        answers:[
            {id:0,answer:"հայտարարատուն",isCorrect:false},
            {id:1,answer:"հայտարարատուն, իսկ <<Մաքսային կարգավորման մասին>> ՀՀ օրենքով սահմանված դեպքերում՝ մաքսային մարմինը",isCorrect:true},//
            {id:2,answer:"Վերադաս մաքսային մարմինը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:6,
        question:"Ո՞ւմ ներկայությամբ և ո՞րտեղ է իրականացվում անձի մաքսային զննումը",
        answers:[
            {id:0,answer:"անձի մաքսային զննումն անցկացվում է նույն սեռի 2 ընթերակաների ներկայությամբ, սանիտարահիգիենիկ պահանջներին համապատասխանող մեկուսացված սենյակում:",isCorrect:true},//
            {id:1,answer:"անձի մաքսային զննումն անցկացվում է սանիտարահիգիենիկ պահանջներին համապատասխանող մեկուսացված սենյակում:",isCorrect:false},
            {id:2,answer:"անձի մաքսային զննումն անցկացվում է նույն սեռի 2 ընթերակաների ներկայությամբ, սանիտարահիգիենիկ պահանջներին համապատասխանող մեկուսացված պահեստում:",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:7,
        question:"Ով է հայտարարագրում ապրանքի ԱՏԳ ԱԱ ծածկագիրը",
        answers:[
            {id:0,answer:"Պետական եկամուտների կոմիտեն",isCorrect:false},
            {id:1,answer:"մաքսային մարմինը",isCorrect:false},
            {id:2,answer:"հայտարարատուն",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:8,
        question:"Որքան է կազմում ապրանքների ժամանակավոր պահպանման ժամկետը, բացառությամբ միջազգային փոստային առաքանիների և մշտական բնակություն հաստատելու, փախստականի, հարկադիր տեղահանված անձի կարգավիճակ ստանալու մտադրություն ունեցող օտարերկրյա ֆիզիկական անձի անձնական օգտագործման ապրանքների ժամանակավոր պահպանման ժամկետը",
        answers:[
            {id:0,answer:"5 ամիս",isCorrect:false},
            {id:1,answer:"6 ամիս",isCorrect:false},
            {id:2,answer:"4 ամիս",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:9,
        question:"Ի՞նչ է «Ազատ պահեստ» մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն օտարերկրյա ապրանքների և Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման  պայմանները:",isCorrect:true},//
            {id:1,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման պայմանները:",isCorrect:false},
            {id:2,answer:"«Ազատ պահեստ» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է, որին համապատասխան այդպիսի ապրանքները տեղավորվում և օգտագործվում են ազատ պահեստում՝ առանց մաքսատուրքեր, հարկեր, հատուկ, հակագնագցման, փոխհատուցման տուրքեր վճարելու՝ պահպանելով այդ մաքսային ընթացակարգով ապրանքների ձևակերպման և այդ մաքսային ընթացակարգին համապատասխան դրանց օգտագործման պայմանները:",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:10,
        question:"Ինչ է մաքսային տեսազննումը",
        answers:[
            {id:0,answer:"2 պատասխանները սխալ են",isCorrect:false},
            {id:1,answer:"մաքսային ստուգման ձև է",isCorrect:false},
            {id:2,answer:"մաքսային հսկողության ձև է",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },

    {
        id:11,
        question:"Քանի մեթոդ է կիրառվում մաքսային արժեքի որոշման նպատակով",
        answers:[
            {id:0,answer:"6 մեթոդ",isCorrect:true},//
            {id:1,answer:"7 մեթոդ",isCorrect:false},
            {id:2,answer:"4 մեթոդ",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        
        id:12,
        question:"Որ մարմնի կոմից է սահմանվում մաքսային մարմնի կողմից հայտարարատուին, իրավատիրոջը կամ նրա շահերը կամ մի քանի իրավատերերի շահերը ներկայացնող անձին այն ապրանքների վերաբերյալ տեղեկատվություն տրամադրելու կարգը, որոնվ բացթողման ժամկետը կասեցնելու մասին որոշում է ընդունվել",
        answers:[
            {id:0,answer:"Պետական եկամուտների կոմիտեի",isCorrect:false},
            {id:1,answer:"ՀՀ կառավարության",isCorrect:false},
            {id:2,answer:"ԵԱՏՄ հանձնաժողովի",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:13,
        question:"Ստորև նշվածներից ով է իրականացնում Հայաստանի Հանրապետությունից արտահանվող ապրանքների ծագման երկրի որոշումը և ապրանքներին տրամադրվող` արտոնյալ ծագման կարգավիճակը հաստատող հավաստագրի տրամադրումը.",
        answers:[
            {id:0,answer:"ՀՀ Էկոնոմիկայի նախարարության",isCorrect:false},
            {id:1,answer:"ՀՀ Կառավարության լիազոր մարմինը",isCorrect:true},//
            {id:2,answer:"Հայտարարատուն",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:14,
        question:"Ստորև նշվածներից՝ որ պաշտոնատար անձինք իրավունք ունեն մաքսային մարմինների անունից մաքսային կանոնների խախտման վերաբերյալ գործերը քննելու և որոշում կայացնելու",
        answers:[
            {id:0,answer:"Բոլոր պաշտոնների մաքսային մարմինները",isCorrect:false},
            {id:1,answer:"վերադաս մաքսային մարմնի համապատասխան իրավասություն ունեցող կառուցվածքային ստորաբաժանումների ղեկավարները",isCorrect:false},
            {id:2,answer:"մաքսային մարմինների ղեկավարները, նրանց տեղակալները, վերադաս մաքսային մարմնի համապատասխան իրավասություն ունեցող կառուցվածքային ստորաբաժանումների ղեկավարները",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:15,
        question:"Ստորև նշվաշներից ով է ընդունում ապրանքների դասակարգման վերաբերյալ նախնական որոշումներն ըստ Եվրասիական տնտեսական միության արտաքին տնտեսական գորշունեության ապրանքային անվանացանկի",
        answers:[
            {id:0,answer:"ՀՀ պետական եկամուտների կոմիտեն",isCorrect:true},//
            {id:1,answer:"ԵՏՄ հանձնաժողովը",isCorrect:false},
            {id:2,answer:"Հայտարարատուն կամ շահագռգիռ անձը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:16,
        question:"Քանի թվային նիշ է պարունակում ԱՏԳ ԱԱ-ի ապրանքային դիրքը",
        answers:[
            {id:0,answer:"3.0",isCorrect:false},
            {id:1,answer:"1.0",isCorrect:false},
            {id:2,answer:"4.0",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:17,
        question:"Ստորև նշվածներից ինչով է որոշվում Եվրասիական տնտեսական միության  մաքսային սահմանով ներմուծվող ապրանքերի մաքսային արժեքը",
        answers:[
            
            {id:0,answer:"ԵԱՏՄ մաքսային օրենսգրքով",isCorrect:true},//
            {id:1,answer:"Հայտարարագրով",isCorrect:false},
            {id:2,answer:"ՀՀ <<Մաքսային կարգավորման մասին>> օրենքով ",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:18,
        question:"Որ ժամկետի սահմաններում կարող է երկարաձգվել «Մաքսային տարածքում վերամշակում» մաքսային ընթացակարգի գործողությունը",
        answers:[
            {id:0,answer:"2 պատասխանները սխալ են",isCorrect:false},
            {id:1,answer:"«Մաքսային տարածքում վերամշակում» մաքսային ընթացակարգի գործողությունը կարող է երկարաձգվել Միության մաքսային տարածքում ապրանքների վերամշակման առավելագույն ժամկետի սահմաններում, որը կազմում է 2 տարի կամ ապրանքների առանձին կատեգորիաների համար Հանձնաժողովի կողմից սահմանվող ավելի տևական ժամանակով",isCorrect:false},
            {id:2,answer:"«Մաքսային տարածքում վերամշակում» մաքսային ընթացակարգի գործողությունը կարող է երկարաձգվել Միության մաքսային տարածքում ապրանքների վերամշակման առավելագույն ժամկետի սահմաններում, որը կազմում է 3 տարի կամ ապրանքների առանձին կատեգորիաների համար Հանձնաժողովի կողմից սահմանվող ավելի տևական ժամանակով",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:19,
        question:"<Ոչնչացում> մաքսային ընթացակարգով ձևակերպված ապրանքների ոչնչացումը  իրականացվում է",
        answers:[
            {id:0,answer:"պետական լիազոր մարմնի կողմից նախանշված եղանակով",isCorrect:true},//
            {id:1,answer:"մաքսային մարմնի նախանշած եղանակով",isCorrect:false},
            {id:2,answer:"Պետական եկամուտների կոմիտեի նախանշած եղանակով",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:20,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն մաքսատուրքերի, հարկերի հաշվարկման նպատակով կիրառվում են",
        answers:[
            {id:0,answer:"մաքսային մարմնի կողմից մաքսային հայտարարագիրը գրանցելու օրվա նախորդող օրվա դրությամբ գործող դրույքաչափերը",isCorrect:false},
            {id:1,answer:"մաքսային մարմնի կողմից մաքսային հայտարարագիրը գրանցելու օրվա հաջորդող 5 օրերի դրույքաչափերը",isCorrect:false},
            {id:2,answer:"մաքսային մարմնի կողմից մաքսային հայտարարագիրը գրանցելու օրվա դրությամբ գործող դրույքաչափերը",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },

    {
        id:21,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն նշվածներից որը մաքսային ընթացակարգ չէ",
        answers:[
            {id:0,answer:"Մաքսային պահեստ",isCorrect:false},
            {id:1,answer:"վերաներմուծում",isCorrect:false},
            {id:2,answer:"ազատ տնտեսական գոտի",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:22,
        question:"ԵԱՏՄ մաքսային օրենսգրքի համաձայն, որպես ընդհանուր կանոն, որտեղ են իրականացվում  մաքսային գործառնությունները",
        answers:[
            {id:0,answer:"Ժամանակավոր պահպանման պահեստներում",isCorrect:false},
            {id:1,answer:"Մաքսային մարմինների գտնվելու վայրերու",isCorrect:true},//
            {id:2,answer:"ԵԱՏՄ մաքսային սահմանում գտնվում մաքսային   պահեստներում",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:23,
        question:"Եթե գրանցված նախնական մաքսային հայտարարագրով ապրանքների բացթողման ժամկետը երկարաձգվել է, կամ ապրանքների բացթողումը մերժվել է, ապա",
        answers:[
            {id:0,answer:"հայտարարատուն պարտավոր է իրականացնել մաքսային  գործառնություններ, որոնք կապված են ապրանքները ներմուծման հետ",isCorrect:false},
            {id:1,answer:"հայտարարատուն պարտավոր է իրականացնել մաքսային  գործառնություններ, որոնք կապված են ապրանքները ժամանակավոր պահպանման հանձնելու հետ",isCorrect:true},//
            {id:2,answer:"հայտարարատուն պարտավոր է ոչնչացնել ապրանքները՝ վերադաս մաքսային մարմնի թույլտվությունամբ",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:24,
        question:"Հայաստանի Հանրապետության լիազոր պետական կառավարման ո՞ր մարմինն է համակարգում հանքային հումքի տեսակների (որոնց տեղափոխումը Եվրասիական տնտեսական միության մաքսային տարածքով սահմանափակ է արտահանման դեպքում) լիցենզավորման գործընթացը.",
        answers:[
            {id:0,answer:"ՀՀ առողջապահության նախարարությունը",isCorrect:false},
            {id:1,answer:"ՀՀ շրջակա միջավայրի նախարարություն",isCorrect:false},
            {id:2,answer:"ՀՀ տարածքային կառավարման և ենթակառուցվածքների նախարարությու",isCorrect:true},//
            
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:25,
        question:"Մաքսային կանոնների խախտման հատկանիշներ հայտնաբերելիս մաքսային մարմինը կազմում է",
        answers:[
            {id:0,answer:"մաքսային կանոնների խախտման վերաբերյալ արձանագրություն",isCorrect:true},//
            {id:1,answer:"մաքսային կանոնների խախտման տուգանքի չափը",isCorrect:false},
            {id:2,answer:"2 պատասխանները սխալ են",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:26,
        question:"ՀՀ ՊԵԿ Հյուսիսային մաքսատուն-վարչության գործունեության տարածք է հանդիսանում",
        answers:[
            {id:0,answer:"Հայաստանի Հանրապետության Սյունիքի մարզի վարչական տարածքը",isCorrect:false},
            {id:1,answer:"Հայաստանի Հանրապետության Շիրակի մարզի վարչական տարածքը",isCorrect:true},//
            {id:2,answer:"Հայաստանի Հանրապետության Գեղարքունիքի մարզի վարչական տարածքը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:27,
        question:"Միության մաքսային տարածք ներմուծվող ապրանքները գտնվում են մաքսային հսկողության տակ",
        answers:[
            {id:0,answer:"մաքսային ստուգում անցնելու պահից",isCorrect:false},
            {id:1,answer:"մաքսային մարմնի կողմից բաց թողնելու պահից",isCorrect:false},
            {id:2,answer:"միության մաքսային սահմանը հատելու պահից",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:28,
        question:"Միության ապրանքները մի տեսակի տրանսպորտի տրանսպորտային միջոցից մեկ այլ տեսակի տրանսպորտի տրանսպորտային միջոց փոխաբեռնելու (վերաբեռնելու) թույլտվություն ստանալու համար հայտարարատուն",
        answers:[
            {id:0,answer:"հայտարարատուն կազմում է տարանցման հայտարարագիր",isCorrect:false},
            {id:1,answer:"hայտարարատուն ներկայացնում է դիմում",isCorrect:true},//
            {id:2,answer:"հայտարարատուն ներկայացնում է պահանջագիր",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:29,
        question:"Մաքսային կարգավորման մասին օրենքի համաձայն ինչպես են վերադարձվում մաքսատուրքերի  և հարկերի ավել վճարված կամ գանձված գումարները",
        answers:[
            {id:0,answer:"Ավել վճարված կամ գանձված մաքսատուրքի, հարկերի գումարները ենթակա են վերադարձման կամ հաշվանցման` վճարողի կամ նրա իրավահաջորդի դիմումի հիման վրա",isCorrect:true},//
            {id:1,answer:"Ավել վճարված կամ գանձված մաքսատուրքի, հարկերի գումարները ենթակա են վերադարձման կամ հաշվանցման` վճարողի կամ մաքսային մարմնի դիմումի հիման վրա",isCorrect:false},
            {id:2,answer:"Ավել վճարված կամ գանձված մաքսատուրքի, հարկերի գումարները ենթակա են վերադարձման կամ հաշվանցման` վճարողի կամ նրա իրավահաջորդի հայտարարագրում նշված մաքսային ընթացակարգի հիման վրա",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:30,
        question:"«Ոչնչացում» մաքսային ընթացակարգը չի կիրառվում, եթե ապրանքների ոչնչացումը",
        answers:[
            {id:0,answer:"կասեցվել է այլ մաքսային ընթացակարգով ապրանքների ձևակերպման համար",isCorrect:false},
            {id:1,answer:"արգելված է ԵՏՄ իրավական ակտերով",isCorrect:false},
            {id:2,answer:"կարող է վնաս հասցնել շրջակա միջավայրին կամ վտան",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },

    {
        id:31,
        question:"Ապրանքների մաքսային արժեքի մաքսային հսկողության իրականացման ընթացքում  մաքսային մարմնի կողմից պահանջված փաստաթղթերը հայտարարատուի կողմից կարող են ներկայացվել ապրանքների բացթողումից հետո՝ մաքսային հայտարարագրի գրանցման օրվանի",
        answers:[
            {id:0,answer:"30 օրացուցային օրը չգերազանցող ժամկետում",isCorrect:false},
            {id:1,answer:"60 օրացուցային օրը չգերազանցող ժամկետում",isCorrect:true},//
            {id:2,answer:"90  օրը չգերազանցող ժամկետում",isCorrect:false},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:32,
        question:" ԵԱՏՄ մաքսային օրենսգրքի համաձայն ապրանքները մաքսային ընթացակարգով ձևակերպելու օր է համարվում",
        answers:[
            {id:0,answer:"ապրանքների բացթողման օրը",isCorrect:true},//
            {id:1,answer:"ապրանքների մաքսային հայտարարագրի գրանցման օրը",isCorrect:false},
            {id:2,answer:"մաքսային սահմանը հատելու օրը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:33,
        question:"ԵԱՏՄ մաքսային օրենսդրությամբ սահմանված՝ ինչպիսի կարգավիճակ ունեցող ապրանքների նկատմամբ  կիրառվող ընթացակարգ է «Վերաարտահանում» մաքսային ընթացակարգը",
        answers:[
            {id:0,answer:"«Վերաարտահանում» մաքսային ընթացակարգն օտարերկրյա ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է:",isCorrect:false},
            {id:1,answer:"«Վերաարտահանում» մաքսային ընթացակարգն օտարերկրյա ապրանքների և Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է:",isCorrect:true},
            {id:2,answer:"«Վերաարտահանում» մաքսային ընթացակարգն Միության ապրանքների նկատմամբ կիրառվող մաքսային ընթացակարգ է:",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:34,
        question:" ԵԱՏՄ հետ գործող ազատ առևտրի համաձայնագրերի շրջանակներում ո՞ր հավաստագիրն է հանդիսանում առանձնաշնորհային ",
        answers:[
            {id:0,answer:"CT-3",isCorrect:true},//
            {id:1,answer:"CT-1",isCorrect:false},
            {id:2,answer:"CT-4",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:35,
        question:"Նշվածներից որոնք մաքսային հսկողության օբյեկտ չե",
        answers:[
            {id:0,answer:"մաքսային ձևակերպումների մասնագետները",isCorrect:false},
            {id:1,answer:"հայտարարատուները",isCorrect:false},
            {id:2,answer:"ֆիզիկական անձինք",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:36,
        question:"Նշվածներից որը մաքսային հսկողության անցկացումն ապահովող միջոց չէ",
        answers:[
            {id:0,answer:"մաքսային տեսազննում",isCorrect:true},//
            {id:1,answer:"մաքսային ստուգումը",isCorrect:false},
            {id:2,answer:"մաքսասակագնային հսկողությունը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:37,
        question:"Փորձագիտական հիմնարկների կողմից տրվող փորձաքննության արձանագրություններում նշված ապրանքների ծածկագրերը պարտադի՞ր են արդյոք պրանքների դասակարգման համար",
        answers:[
            {id:0,answer:"այո,պարտադիր են՝ բացառությամբ ՊԵԿ կողմից նշված հանգամանքներում",isCorrect:false},
            {id:1,answer:"այո,պարտադիր են",isCorrect:false},
            {id:2,answer:"ոչ, պարտադիր չեն",isCorrect:true},//
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:38,
        question:"Անդամ պետությունների մտավոր սեփականության օբյեկտների ազգային մաքսային ռեեստրը վարում է",
        answers:[
            {id:0,answer:"անդամ պետության կառավարությունը",isCorrect:false},
            {id:1,answer:"անդամ պետության մաքսային մարմինները",isCorrect:true},//
            {id:2,answer:"ԵԱՏՄ հանձնաժողովը",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },
    {
        id:39,
        question:"Ուղևորային հայտարարագրում նշման ենթակա տեղեկությունների ցանկը սահմանում է",
        answers:[
            {id:0,answer:"ՀՀ կառավարությունը",isCorrect:false},
            {id:1,answer:"Հանձնաժողովը",isCorrect:true},//
            {id:2,answer:"Պետական եկամուտների կոմիտեն",isCorrect:false},
        ].map(item => Object.assign(item,{answered:false}))
    },

]

export default questions