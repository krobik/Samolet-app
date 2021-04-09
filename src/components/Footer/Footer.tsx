import { Footer as FooterAntd } from 'antd/lib/layout/layout'
import './Footer.css'

const Footer: React.FC = () => {
    return (
        <FooterAntd className="footer">
            <div className="fooner__inner">
                <span className="footer__desc">Тестовое задание 2021</span>
                <a href="https://github.com/krobik">GitHub</a>
            </div>
        </FooterAntd>
    )
}

export default Footer