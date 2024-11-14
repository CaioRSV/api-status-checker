
// url pattern: labels=[...],urls=[...],interval=[...],tolerance=[...],redirect=[...]

// Ex:
// http://localhost:3000/?labels=testLabel&urls=123url&intervals=5&tolerance=onlyAccept&redirect=true
// http://localhost:3000/?labels=testLabel,|dois2&urls=123url,|321url&intervals=5,|10&tolerance=onlyAccept,|onlyAccept&redirect=true,|false

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