import { useEffect, useState } from 'react'
import './styles.css'
import { ServiceDTO } from '../../../models/servico'
import ServiceCard from '../../../components/ServiceCard'
import { tempFilterService } from '../../../utils/temp_filter'
import SearchBar from '../../../components/SearchBar'

type QueryParams = {
    name: string
}

export default function Service() {

    const [services, setServices] = useState<ServiceDTO[]>([])

    const [queryParams, setQueryParam] = useState<QueryParams>({
        name: ''
    });

    useEffect(() => {
        setServices(tempFilterService(queryParams.name));
    }, [queryParams]);

    function handleSearch(searchText: string) {
        setServices([]);
        setQueryParam({ ...queryParams, name: searchText });
    }

    return (
        <main>
            <section id='service-section'>
                <div className='mhg-section-container'>
                    <h1 className='mhg-section-title'>SERVIÇOS</h1>
                    {
                        <SearchBar onSearch={handleSearch} />
                    }
                    {
                        services &&
                        services.map(service =>
                            <ServiceCard key={service.idServico} service={service} />
                        )
                    }
                </div>
            </section>
        </main>
    )
}