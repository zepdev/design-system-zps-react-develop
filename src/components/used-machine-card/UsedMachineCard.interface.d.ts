import { LocaleVariants } from '../../interfaces/global-variants';

export declare enum MachineRating {
    STAND_BY = "standby",
    CONTINUOUS = "continuous",
    PRIME = "prime"
}
export declare enum MachineCategory {
    GEN_SET = "genset",
    ENGINE = "engine",
    ACCESSORY = "accessory"
}
export declare enum MachineFuel {
    DIESEL = "diesel",
    GAS = "gas",
    DUAL_FUEL = "dual fuel"
}
export declare enum MachineGenSetType {
    STATIONARY = "stationary",
    MOBILE = "mobile"
}
export interface UsedMachineCardProps {
    imageSrc: string;
    category: MachineCategory;
    name: string;
    power?: number;
    rating?: MachineRating;
    year: number;
    operatingHours?: number;
    location: {
        city: string;
        country: string;
    };
    fuel?: MachineFuel;
    type?: MachineGenSetType;
    price: string;
    isMarine?: boolean;
    locale: LocaleVariants;
}
//# sourceMappingURL=UsedMachineCard.interface.d.ts.map