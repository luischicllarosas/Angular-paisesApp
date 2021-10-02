export interface Region {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         RegionEnum;
    continent:      Continent;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area?:          number;
    gini?:          number;
    timezones:      string[];
    borders?:       string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flags:          string[];
    regionalBlocs?: RegionalBloc[];
    cioc?:          string;
    independent:    boolean;
}

export enum Continent {
    Europe = "Europe",
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Language {
    iso639_1?:   string;
    iso639_2:    string;
    name:        string;
    nativeName?: string;
}

export enum RegionEnum {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}

export interface RegionalBloc {
    acronym:        Acronym;
    name:           Name;
    otherAcronyms?: string[];
}

export enum Acronym {
    Cefta = "CEFTA",
    Eeu = "EEU",
    Efta = "EFTA",
    Eu = "EU",
}

export enum Name {
    CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
    EurasianEconomicUnion = "Eurasian Economic Union",
    EuropeanFreeTradeAssociation = "European Free Trade Association",
    EuropeanUnion = "European Union",
}

export interface Translations {
    br:  string;
    pt:  string;
    nl?: string;
    hr:  string;
    fa?: string;
    de?: string;
    es:  string;
    fr:  string;
    ja?: string;
    it?: string;
    hu:  string;
}
