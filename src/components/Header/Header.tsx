import { Link } from 'react-router-dom'
import { Header as HeaderAntd } from 'antd/lib/layout/layout'
import { HomeOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import './Header.css'

const Header: React.FC = () => {
    return (
        <HeaderAntd>
            <Row>
                <Col span={16} offset={4}>
                    <Link to="/">
                        <HomeOutlined style={{ fontSize: '28px', marginRight: "10px" }} />
                    </Link>
                    <span className="header__title">Библиотеки. Статистическая информация</span>
                </Col>
            </Row>
        </HeaderAntd>
    )
}

export default Header