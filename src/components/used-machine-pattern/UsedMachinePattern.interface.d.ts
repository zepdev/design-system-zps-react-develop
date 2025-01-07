import { UsedMachineCardProps } from './used-machine-card';
import { UsedMachineFiltersProps } from './used-machine-filters';
import { Dispatch, SetStateAction } from 'react';

export interface UsedMachinePatternProps extends UsedMachineFiltersProps {
    cards: UsedMachineCardProps[];
    total: number;
    currentTotal: number;
    setCurrentTotal: Dispatch<SetStateAction<number>>;
}
//# sourceMappingURL=UsedMachinePattern.interface.d.ts.map