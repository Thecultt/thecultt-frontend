interface CabinetSellOptionBrand {
    name: string;
    models: { name: string }[];
}

export interface CabinetSellOption {
    name: string;
    brands: CabinetSellOptionBrand[];
    defects: { name: string }[];
    conditions: { name: string }[];
    kits: { name: string }[];
    sizes: { name: string }[];
}

export interface CabinetSellAutoDetectedModel {
    brand: string;
    model: string;
    image: string;
}
