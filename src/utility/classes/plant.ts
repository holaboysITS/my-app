import { MachineryOut } from "./machinery"

export interface Plant {
    id: string
    name: string
    location: string
    description: string
    machineries: string[]
}

export interface PlantOut {
    id: string
    name: string
    location: string
    description: string
    machineries: MachineryOut[]
}

export interface PlantIn {
    name: string
    location: string
    description: string
}