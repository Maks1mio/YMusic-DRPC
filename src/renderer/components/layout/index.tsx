import styles from './layout.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import ButtonNav from '../button_nav'
import Discord from './../../../../static/assets/icons/discord.svg'
import {
    MdColorLens,
    MdConnectWithoutContact,
    MdDownload,
    MdEngineering,
    MdSettings,
    MdWarning,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import userContext from '../../api/context/user.context'
import trackInitials from '../../api/interfaces/track.initials'
import SettingsInterface from '../../api/interfaces/settings.interface'

interface p {
    title: string
    children: any
    goBack?: boolean
}

const Layout: React.FC<p> = ({ title, children, goBack }) => {
    const { settings, setSettings } = useContext(userContext)
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.desktopEvents?.on('update-available', (event, data) => {
                console.log(data)
                setUpdate(true)
            })
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>{title + ' - PulseSync'}</title>
            </Helmet>
            <div className={styles.children}>
                <Header goBack={goBack} />
                <div className={styles.main_window}>
                    <div className={styles.navigation_bar}>
                        <div className={styles.navigation_buttons}>
                            <NavLink
                                to="/trackinfo"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? 'pending'
                                        : isActive
                                          ? 'active'
                                          : ''
                                }
                            >
                                <ButtonNav>
                                    <Discord height={24} width={24} />
                                </ButtonNav>
                            </NavLink>
                            {/* <NavLink to="/theme" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}> */}
                            <ButtonNav disabled>
                                <MdColorLens size={24} />
                            </ButtonNav>
                            {/* </NavLink> */}
                            {/* <NavLink to="/joint" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}> */}
                            <ButtonNav disabled>
                                <MdConnectWithoutContact size={24} />
                            </ButtonNav>
                            {/* </NavLink> */}
                            <NavLink
                                to="/other"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? 'pending'
                                        : isActive
                                          ? 'active'
                                          : ''
                                }
                            >
                                <ButtonNav>
                                    <MdSettings size={24} />
                                </ButtonNav>
                            </NavLink>
                        </div>
                        {update && (
                            <button
                                onClick={() => {
                                    setUpdate(false)
                                    window.desktopEvents?.send('update-install')
                                }}
                                className={styles.update_download}
                            >
                                <MdDownload size={24} />
                            </button>
                        )}
                    </div>

                    {!settings.patched && (
                        <div className={styles.alert_patch}>
                            <div>
                                <div>
                                    <div className={styles.container_warn}>
                                        <MdWarning size={38} />
                                        <div>
                                            У Яндекс Музыки отсутствует патч!
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            window.electron.patcher.patch()
                                            setSettings(
                                                (
                                                    prevSettings: SettingsInterface,
                                                ) => ({
                                                    ...prevSettings,
                                                    patched: true,
                                                }),
                                            )
                                        }}
                                    >
                                        <MdEngineering size={22} /> Запатчить
                                    </button>
                                </div>
                                <img
                                    src="static\assets\images\O^O.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
