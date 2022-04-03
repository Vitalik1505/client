import {$authHost, $host } from "./index";

export const createService = async (service) => {
    const {data} = await $authHost.post('api/service', service)
    return data
}

export const fetchServices = async () => {
    const {data} = await $host.get('api/service')
    return data
}

export const fetchOneService = async (id) => {
    const {data} = await $host.get('api/service/' + id)
    return data
}

export const createInter = async (inter) => {
    const {data} = await $authHost.post('api/inter', inter)
    return data
}

export const fetchInter = async () => {
    const {data} = await $host.get('api/inter')
    return data
}

export const fetchOneInter = async () => {
    const {data} = await $host.delete('api/inter')
    return data
}
 
 