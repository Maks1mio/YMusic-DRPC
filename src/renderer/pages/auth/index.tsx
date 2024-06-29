import Header from '../../components/layout/header'
import Container from '../../components/container'
import { useContext, useEffect, useState } from 'react'
import MarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useNavigate } from 'react-router-dom'

import styles from './auth.module.scss'

import CheckboxNav from '../../components/checkbox'

import { MdAdminPanelSettings, MdWarning } from 'react-icons/md'
import Discord from './../../../../static/assets/icons/discordLogin.svg'
import userContext from '../../api/context/user.context'
import config from '../../api/config'

export default function AuthPage() {
    const navigate = useNavigate()
    const [mdText, setMdText] = useState(null)
    const { user, settings } = useContext(userContext)
    useEffect(() => {
        fetch('./static/assets/policy/terms.ru.md')
            .then(response => response.text())
            .then(text => setMdText(text))
    }, [])
    const auth = () => {
        window.open(config.SERVER_URL + 'auth/discord')
        navigate('/auth/callback')
    }
    useEffect(() => {
        if (user.id !== '-1') {
            navigate('/trackinfo')
        }
    }, [user.id])
    return (
        <>
            <Header />
            <div className={styles.main_window}>
                <div className={styles.container}>
                    <div className={styles.policy}>
                        <MarkDown remarkPlugins={[remarkGfm]}>
                            {mdText}
                        </MarkDown>
                        <CheckboxNav checkType="readPolicy">
                            Я соглашаюсь со всеми выше
                            перечисленными условиями.
                        </CheckboxNav>
                    </div>
                    <button
                        className={styles.discordAuth}
                        disabled={!settings.readPolicy}
                        onClick={() => auth()}
                    >
                        <MdAdminPanelSettings size={20} />
                        Авторизация через дискорд
                    </button>
                </div>
            </div>
        </>
    )
}
