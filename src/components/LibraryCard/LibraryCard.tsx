import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { PageHeader } from 'antd'

import Description from '../Description'

interface LooseObject {
    [key: string]: string | number
}

const LibraryCard: React.FC = () => {
    const { params: { id } } = useRouteMatch<MatchParams>()

    const data = useSelector((store: RootState) => store.data)
    const [LibraryCardData] = data.filter((el: RootStateWithOutArr) => el.order === Number(id))

    const DetailSubjectMap = new Map<string, LooseObject>()

    DetailSubjectMap.set("users", { name: 'Пользователей' })
    DetailSubjectMap.set("visits", { name: 'Посетителей' })
    DetailSubjectMap.set("visits_sites", { name: 'Посетителей сайтов' })
    DetailSubjectMap.set("computers", { name: 'Компьютеров' })
    DetailSubjectMap.set("subscribers", { name: 'Подписчиков' })
    DetailSubjectMap.set("libraries", { name: 'Библиотек' })
    DetailSubjectMap.set("libraries_computers", { name: 'Библиотечных компьютеров' })
    DetailSubjectMap.set("employees", { name: 'Сотрудников' })
    DetailSubjectMap.set("internet_catalogs", { name: 'Интернет каталогов' })

    for (let prop in LibraryCardData) {
        if (DetailSubjectMap.has(prop)) {
            DetailSubjectMap.set(prop, { ...DetailSubjectMap.get(prop), value: LibraryCardData[prop as keyof typeof LibraryCardData] })
        }
    }

    const generatedDataArr = [...DetailSubjectMap].map(([, value]) => ({ ...value }))

    return (
        <>
            <PageHeader
                onBack={() => window.history.back()}
                title={LibraryCardData.fullname}
                subTitle={LibraryCardData.address}
            >
                <Description data={generatedDataArr} />
            </PageHeader>
        </>
    )
}

export default LibraryCard