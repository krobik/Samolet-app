export default class openDataDB {
    _apiBase = 'https://rocky-ravine-54634.herokuapp.com/'

    getData = async () => {
        const api_call = await fetch(`${this._apiBase}https://data.gov.ru/sites/default/files/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json`)
        const response = await api_call.json()
        return response
    }
}