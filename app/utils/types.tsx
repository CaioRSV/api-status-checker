
// url pattern: labels=[...],urls=[...],tolerance=[...],redirect=[...]

export const ToleranceTypeValues:Record<"onlyAccept" | "allowClientErrors", readonly [number, number][]> = {
    onlyAccept: [[200,299]] as const,
    allowClientErrors: [[200,299], [400,499]] as const,
} as const;

export type ToleranceType = keyof typeof ToleranceTypeValues

//Custom Typeguard Funtion
export function isToleranceType(value:string): value is ToleranceType{ 
    return Object.keys(ToleranceTypeValues).includes(value);
} 

export type ApiItem = {
    label: string,
    url: string,
    checkInterval: number, // ms
    toleranceType: ToleranceType,
    allowRedirect: boolean, 
};

export const separator = ",|"

const testeApi:ApiItem = {
    label: '1',
    url: '2',
    checkInterval: 1,
    toleranceType: "onlyAccept",
    allowRedirect: false,
}

// console.log(ToleranceTypeValues.onlyAccept);