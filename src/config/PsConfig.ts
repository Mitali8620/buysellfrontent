export default class PsConfig {

    static versionNo : String = '1.1';

    ///
    /// API Key to connection with Main Backend
    /// This key must equal with key from backend
    ///
    static apiKey: String = "teampsisthebest";

    ///
    /// Live Mode
    /// ------------
    /// If you want to upload to server, please enable below and comment Development below
    ///
    static fixedDomain: String = "https://olexa.co.in/admin"; 
    static domain: String = "https://olexa.co.in/admin"; 

    ///
    /// Development Mode
    /// -----------------
    /// Before upload to server, please comment this 2 lines.
    ///
    // static fixedDomain: String = "https://olexa.co.in/admin";    
    // static domain: String = "http://localhost:3000";

    ///
    /// Firebase Config
    ///
    static firebaseConfig = {
        apiKey: "AIzaSyDP-nVYR5cQwDT3pNz-Td60ElYUGYFIo84",
        authDomain: "olexa-17b2e.firebaseapp.com",
        databaseURL: "https://olexa-17b2e-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "olexa-17b2e",
        storageBucket: "olexa-17b2e.appspot.com",
        messagingSenderId: "119573694640",
        appId: "1:119573694640:web:6f408763a8ceecbbca5375",
        measurementId: "G-DTNM3WERQS"        
    };
    
    

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// static firebaseConfig = {
//   apiKey: "AIzaSyDquXgEdNqLh_jYVSm6K3o_mRj4oxUyPGY",
//   authDomain: "olexa-8e59d.firebaseapp.com",
//   databaseURL: "https://olexa-8e59d-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "olexa-8e59d",
//   storageBucket: "olexa-8e59d.appspot.com",
//   messagingSenderId: "709265089163",
//   appId: "1:709265089163:web:da8f0bcc1b9c038c346a8e",
//   measurementId: "G-T6V0VSQ5BY"
// };

// Initialize Firebase

    ///
    /// Base URL * Don't update it *
    ///
    static base: String = PsConfig.domain; 
    static baseUrl: String = PsConfig.domain + '/index.php';
    static fixedPath : String = PsConfig.fixedDomain;
    
    
    /// Google Map Key
    /// ----------------
    static mapKey: String = "AIzaSyCtBHbqTWRgh9O8veCOJNnCMG56lXTdGJw";
    

    ///
    /// Price Format
    /// -----------------
    /// Need to change according to your format that you need
    /// E.g.
    /// "#,##0.00"   => 2,555.00
    /// "##0.00"    => 2555.00
    /// "#.00"       => 2555.00
    /// "#,###."      => 2,555
    /// "#,##0.0"    => 2555.0
    /// "###"        => 255
    static  priceFormat : string = '#,##0.0';


    ///
    /// Profile Setting for Item Grid
    /// You can hide/show user profile at item grid
    /// show == show user profile
    /// hide == hide user profile
    ///
    static showUserProfile : string = 'hide';


    ///
    /// Map Filter Setting
    ///
    static  noFilterWithLocationOnMap : Boolean= false;

    ///
    /// Promotion Date Pre-define Set
    ///
    /// Type 1 == Fixed Date, Type 2 == Custom Date with user input
    static promotionDays = [
        {
            id:"1", days:7, type:1
        },
        {
            id:"2", days:14, type:1
        },
        {
            id:"3", days:30, type:1
        },
        {
            id:"4", days:60, type:1
        },
        {
            id:"5", days:1, type:2
        }
    ];

    ///
    /// Default Mile for Nearest Search
    ///
    static mile = "8";

    
    

    ///
    /// For default language change, please check
    /// LanguageFragment for language code and country code
    /// ..............................................................
    /// Language             | Language Code     | Country Code
    /// ..............................................................
    /// "English"            | "en"              | "US"
    /// "Arabic"             | "ar"              | "DZ"
    /// "India (Hindi)"      | "hi"              | "IN"
    /// "German"             | "de"              | "DE"
    /// "Spainish"           | "es"              | "ES"
    /// "French"             | "fr"              | "FR"
    /// "Indonesian"         | "id"              | "ID"
    /// "Italian"            | "it"              | "IT"
    /// "Japanese"           | "ja"              | "JP"
    /// "Korean"             | "ko"              | "KR"
    /// "Malay"              | "ms"              | "MY"
    /// "Portuguese"         | "pt"              | "PT"
    /// "Russian"            | "ru"              | "RU"
    /// "Thai"               | "th"              | "TH"
    /// "Turkish"            | "tr"              | "TR"
    /// "Chinese"            | "zh"              | "CN"
    /// ..............................................................
    ///
    static defaultLanguage = {
        languageCode : 'en',
        countryCode : 'US',
        name : 'English US',
        flag :  require('@/assets/flags/usflag.png')
    };
    static supportedLanguages = [
        { languageCode : 'en', countryCode : 'US', name : 'English US', flag: require('@/assets/flags/usflag.png')},
        { languageCode : 'ar', countryCode : 'DZ', name : 'Arabic', flag: require('@/assets/flags/dzFlag.png')},
        { languageCode : 'hi', countryCode : 'IN', name : 'Hindi', flag: require('@/assets/flags/inFlag.jpeg')},
        { languageCode : 'de', countryCode : 'DE', name : 'German', flag: require('@/assets/flags/germanFlag.jpg')},
        { languageCode : 'es', countryCode : 'ES', name : 'Spainish', flag: require('@/assets/flags/spainFlag.jpg')},
        { languageCode : 'fr', countryCode : 'FR', name : 'French', flag: require('@/assets/flags/frenchFlag.jpg')},
        { languageCode : 'id', countryCode : 'ID', name : 'Indonesian', flag: require('@/assets/flags/indonesiaFlag.jpg')},
        { languageCode : 'it', countryCode : 'IT', name : 'Italian', flag: require('@/assets/flags/italyFlag.jpg')},
        { languageCode : 'ja', countryCode : 'JP', name : 'Japanese', flag: require('@/assets/flags/japanFlag.jpg')},
        { languageCode : 'ko', countryCode : 'KR', name : 'Korean', flag: require('@/assets/flags/southkoreaFlag.jpg')},
        { languageCode : 'ms', countryCode : 'MY', name : 'Malay', flag: require('@/assets/flags/malaysiaFlag.jpg')},
        { languageCode : 'pt', countryCode : 'PT', name : 'Potuguese', flag: require('@/assets/flags/potugueseFlag.jpg')},
        { languageCode : 'ru', countryCode : 'RU', name : 'Russian', flag: require('@/assets/flags/russiaFlag.jpg')},
        { languageCode : 'th', countryCode : 'TH', name : 'Thai', flag: require('@/assets/flags/thaiFlag.jpg')},
        { languageCode : 'tr', countryCode : 'TR', name : 'Turkish', flag: require('@/assets/flags/turkishFlag.jpg')},
        { languageCode : 'zh', countryCode : 'CN', name : 'Chinese', flag: require('@/assets/flags/chinaFlag.jpg')}
    ];
        

    /// 
    /// Debug Mode
    ///
    static isDebugMode : Boolean = false;

    /// 
    /// Video Setting
    ///
    static isEnableVideoSetting : Boolean = true;
    
    ///
    /// Notification Setting
    ///
    static enableNotification = 'true';

    static fcmServerKey : string = 'AAAAdas8rOs:APA91bEhLizx8g2RQpdxf6eWfZitLrriVUiAYUIzN6DKKSmXsfyXk6Oq79iMFDZADnEHsIdu-67rue1sss0QmFzKWnIvQi54eWvtvsJLQAlLS0ow4pO_3aQN9RUSiqsvPKSPcuKH_05d';
    
    static firebaseWebPushKeyPair : string = 'BB25q3Hfb46baQzaD2geWF7_W529dt8Cz9VVbcti1vmO6C0-W3qKWVDHrvW3mCy8A6XSdZKOM8hZW7S7FOFqKuQ';
 
    ///
    /// Adsense Setting
    ///
    static adClient = "ca-pub-0000000000000000";
    static adSlot = "0000000000";
    
}
