import { Descriptions } from 'antd'

interface Props {
    data: { [x: string]: string | number }[]
}

const Description: React.FC<Props> = ({ data }) => {
    console.log('data', data)
    return (
        <Descriptions size="small" column={3}>
            { data.map((el) => {
                return (
                    <Descriptions.Item label={el.name} key={el.name}>
                        {el.value}
                    </Descriptions.Item>
                )
            })}
        </Descriptions>
    )
}

export default Description