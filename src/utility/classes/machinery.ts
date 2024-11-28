export interface Machinery {
    id: string
    plant_id: string
    name: string
    type: string
    status: string
    specification: Record<string, string>
}

export interface MachineryOut {
    plant_id: string
    name: string
    type: string
    status: string
    specification: Record<string, string>
}

export interface MachineryIn {
    plant_id: string
    name: string
    type: string
    specification: Record<string, any>
}