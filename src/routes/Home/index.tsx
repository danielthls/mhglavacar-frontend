import { Outlet } from 'react-router-dom'
import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { ItemMenuDTO } from '../../models/ItemMenu'
import { TempMenu } from '../../temp-repository/temp_menu'

export default function Home() {

    const [itensMenu, /*setItensMenu*/] = useState<ItemMenuDTO[]>(TempMenu)

    return (
        <>
            <Header menu={itensMenu}/>
            <Outlet />
            <Footer menu={itensMenu}/>
        </>
    )
}