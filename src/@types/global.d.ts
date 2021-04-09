interface RootState {
    data: RootStateWithOutArr[]
}

interface RootStateWithOutArr {
    address: string,
    buildings_disrepair: number,
    buildings_management: number,
    buildings_repair: number,
    computers: number,
    copies: number,
    copies_electronic: number,
    copies_issued: number,
    copies_issued_children: number,
    digital_catalogs: number,
    dropped_copies: number,
    electronic_catalogue_volume: number,
    employees: number,
    employees_staff: number,
    formname: string,
    fullname: string,
    funds: number,
    funds_acquisition: number,
    funds_budget: number,
    funds_entrepreneurial: number,
    funds_main_activity: number,
    funds_staff: number,
    funds_used: number,
    individual_subscribers: number,
    internet: number,
    internet_catalogs: number,
    internet_catalogue_volume: number,
    issued_electronic: number,
    kopuk: string,
    libraries: number,
    libraries_computers: number,
    number_of_personal_computers_in_libraries: number,
    order: number,
    out_of_instances: number,
    period: string,
    received_copies: number,
    received_electronic: number,
    site: number,
    staff_higheeducated: number,
    staff_vocational: number,
    subscribers: number,
    territory: string,
    users: number,
    users_children: number,
    visits: number,
    visits_sites: number,
}


interface MatchParams {
    id: string,
}


interface StateTable {
    searchText: string,
    searchedColumn?: string
}

interface dataSourceInterface {
    order: number,
    name: string,
    territory: string,
    libraries: number,
}

interface filterDropdownInterface {
    setSelectedKeys: any,
    selectedKeys: string[]
    confirm: any,
    clearFilters: any
}