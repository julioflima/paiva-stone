'use client'

import HeaderFifaPage from '@/components/HeaderConfrontation';
import { getURL } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import './styles.scss';

const DashboardFifaPage = () => {
    const [data, setData] = useState()


    const onLoad = async () => {
        const res = await fetch(getURL() + 'api/confrontation/', {
            next: { revalidate: 30 },
        })

        const response = await res.json()
        setData(response)
    }

    useEffect(() => { onLoad() }, [])

    return (
        <>
            <HeaderFifaPage title='EM BREVE' subTitle='Believe?' minorTitle='keep dreaming' />
            {JSON.stringify(data)}
            <main id="content-main" className="content-main">
                {/* new */}
                <div className="p-relative pe-n">
                    <div className="overlay fadeIn ad-100ms zi-0">
                        <img
                            src="/images/landing_page/bg-c-01.png"
                            className="ovry-2 p-absolute l--6"
                            alt="fx"
                        />
                    </div>
                </div>
                <section id="features" className="content-section text-center">
                    <div className="container">
                        <div className="row mb-6 mb-lg-9">
                            <div className="col-12">
                                <div>
                                    <h5 className="text-secondary lead-lg-4">
                                        Transformamos dados em decisões assertivas
                                    </h5>
                                    <h2 className="display-lg-4 mb-5 mb-md-6 mb-lg-7">
                                        Nossa base de dados estatísticos é alimentada diariamente.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                <img
                                    src="/images/landing_page/app-1.png"
                                    alt="App"
                                    className="mb-2 hidden"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default DashboardFifaPage;
