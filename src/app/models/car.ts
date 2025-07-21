export type Veiculo = {
Codigos: string
    
    id:number
    vehicle: string
    volumetotal: number
    connected: number
    softwareUpdates: number
    vin: string
    img: string
}
export type VinInfos = {
    CarrinhosAbandonados: any
    NivelDeSatisfação: any

    id:number
    odometro: number
    nivelCombustivel: number
    status: string
    lat: number
    long: number
}