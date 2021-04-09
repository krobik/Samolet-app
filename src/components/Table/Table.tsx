import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words'
import { Table as TableAnt, Space, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Table = () => {
    const data = useSelector((store: RootState) => store.data)
    let searchInput: any = null

    const [state, setState] = useState<StateTable>({
        searchText: '',
        searchedColumn: '',
    })

    const getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: filterDropdownInterface) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => { searchInput = node }}
                    placeholder='Поиск по региону'
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Поиск
                    </Button>

                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}>
                        Сбросить
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: any) => {
            console.log('value', value)
            return record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ''
        },
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100)
            }
        },
        render: (text: string) =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    })

    const handleSearch = (selectedKeys: string[], confirm: any, dataIndex: string) => {
        confirm()
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        })
    }

    const handleReset = (clearFilters: any) => {
        clearFilters()
        setState({ searchText: '' })
    }

    const columns = [
        {
            title: 'Регион',
            dataIndex: 'territory',
            key: 'territory',
            width: '25%',
            ...getColumnSearchProps('territory'),
        },
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            width: '25%',
        },
        {
            title: 'Количество библиотек',
            dataIndex: 'libraries',
            key: 'libraries',
            width: '20%',
            sorter: (a: dataSourceInterface, b: dataSourceInterface) => a.libraries - b.libraries,
        },
        {
            title: 'Действия',
            width: '5%',
            key: 'actions',
            render: ({ order }: dataSourceInterface) => {
                return (
                    <Space size="middle" >
                        <Link to={`/library/${order}`}>Подробнее</Link>
                    </Space >
                )
            },
        },
    ]

    const generateDataSource = () => {
        return data.map((el) => {
            return {
                key: el.order,
                order: el.order,
                name: el.fullname,
                territory: el.territory,
                libraries: el.libraries,
            }
        })
    }

    return (
        <TableAnt columns={columns} dataSource={generateDataSource()} />
    )
}


export default Table