import fetch from '@/utils/fetch'

export function fetchList(query) {
    return fetch({
        url: '/api/allJobs',
        method: 'get',
        params: query 
    })
}  