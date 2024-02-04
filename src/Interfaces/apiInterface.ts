export interface ErrorInfo {
    message: string;
  }
export interface Value {
    id:                        string;
    contractualRules?:         ContractualRule[];
    name:                      string;
    url:                       string;
    thumbnailUrl?:             string;
    isFamilyFriendly:          boolean;
    displayUrl:                string;
    snippet:                   string;
    dateLastCrawled:           Date;
    primaryImageOfPage?:       PrimaryImageOfPage;
    cachedPageUrl:             string;
    language:                  string;
    isNavigational:            boolean;
    richFacts?:                RichFact[];
    datePublished?:            Date;
    datePublishedDisplayText?: string;
}

export interface ContractualRule {
    _type:                string;
    targetPropertyName:   string;
    targetPropertyIndex:  number;
    mustBeCloseToContent: boolean;
    license:              License;
    licenseNotice:        string;
}
export interface License {
    name: string;
    url:  string;
}
export interface PrimaryImageOfPage {
    thumbnailUrl: string;
    width:        number;
    height:       number;
    imageId:      string;
}


export interface RichFact {
    label: Hint;
    items: Item[];
    hint:  Hint;
}

export interface Hint {
    text: string;
}

export interface Item {
    _type?: string;
    text:   string;
    url?:   string;
}