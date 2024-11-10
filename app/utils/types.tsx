
// url pattern: labels=[...],apiUrls=[...],toleranceTypes=[...],allowRedirect=[...]

const onlyAccept = [[200,299]] as const // Read only - strict type
const allowClientErrors = [[200,299], [400,499]] as const // Read only - strict type

export type ToleranceType = typeof onlyAccept | typeof allowClientErrors

export type ApiItem = {
    label: string,
    url: string,
    checkInterval: number, // ms
    toleranceType: ToleranceType,
    allowRedirect: boolean, 
};