export interface Patient {
    name: string,
    patientId: string,
    since: string, //ISO String
    estimated: string, //ISO String
    estimatedDurationMinutes: number,
    condition: string
}