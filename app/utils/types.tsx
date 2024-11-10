
// url pattern: labels=[...],urls=[...],tolerance=[...],redirect=[...]

const onlyAccept = [[200,299]] as const // Read only - strict type
const allowClientErrors = [[200,299], [400,499]] as const // Read only - strict type

export type ToleranceType = "onlyAccept" | "allowClientErrors";

export const ToleranceTypeValues = {
    onlyAccept, allowClientErrors
}

export type ApiItem = {
    label: string,
    url: string,
    checkInterval: number, // ms
    toleranceType: ToleranceType,
    allowRedirect: boolean, 
};

export const separator = ",|"