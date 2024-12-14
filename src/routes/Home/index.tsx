import { Outlet } from 'react-router-dom'
import './styles.css'
import Header from '../../components/Header'

export default function Home() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}