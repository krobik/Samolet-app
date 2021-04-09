import { Spin } from 'antd'
import './Loader.css'

const Loader: React.FC = () => {
    return (
        <div className="loader-wrap">
            <Spin size="large" />
        </div>
    )
}

export default Loader