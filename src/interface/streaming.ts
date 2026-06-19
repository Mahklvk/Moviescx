export interface Provider {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface CountryProvider {
  link: string;
  flatrate?: Provider[];
  rent?: Provider[];
  buy?: Provider[];
}

export interface WatchProvider {
  id: number;
  results: {
    [countryCode: string]: CountryProvider;
  };
}