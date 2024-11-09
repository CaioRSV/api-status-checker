
const onlyAccept = [[200,299]] as const // Read only - strict type
const allowClientErrors = [[200,299], [400,499]] as const // Read only - strict type

export type ApiItem = {
    label: string,
    url: string,
    checkInterval: number, // ms
    toleranceType: typeof onlyAccept | typeof allowClientErrors,
    allowRedirect: boolean, 
};