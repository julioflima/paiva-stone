'use client'
import { ConfrontationPayload } from '@/app/api/confrontation/route';
import Game from '@/app/dashboard/fifa/_components/Game';
import HeaderFifaPage from '@/components/HeaderConfrontation';
import { useState } from 'react';
import AverageGoalsChart from './_components/AverageGoalsChart';
import Confrontation from './_components/Confrontation';
import ConfrontationStatsChart from './_components/ConfrontationStatsChart';
import PlayerStats from './_components/PlayStats';
import PlayerComparisonTable from './_components/PlayerComparisonTable copy';
import PlayerPointsChart from './_components/PlayerPointsChart';
import PlayerStatsTeam from './_components/PlayerStatsTeams';
import TeamStatsChart from './_components/TeamStatsChart';
import Typing from './_components/Typing';
import './styles.scss';

const DashboardFifaPage = async () => {
    const [response, setResponse] = useState<ConfrontationPayload>({} as ConfrontationPayload)

    // const onLoad = async () => {
    //     const res = await fetch(getURL() + 'api/confrontation/', {
    //         next: { revalidate: 30 },
    //     })

    //     const data = ((await res.json()) ?? {} as ConfrontationPayload) as ConfrontationPayload
    //     setResponse(data)
    // }

    // useEffect(() => { onLoad() }, [])

    return (
        <>
            <HeaderFifaPage>
                <div className='relative'>
                    <div className='absolute opacity-15'>
                        <Typing text={JSON.stringify(response)} />
                    </div>

                    <h1 className="display-md-4 display-xl-3 fw-600 lh-2 pt-12 mb-7 mb-lg-8">
                        <span className="d-block">
                            Confronto FIFA23
                        </span>
                    </h1>
                    <h1 className="display-md-4 display-xl-3 fw-600 lh-2 pt-12 mb-7 mb-lg-8">
                        <span className="d-block">
                            <b className='text-green-500'>A</b>
                            {' vs '}
                            <b className='text-pink-500'>B</b>
                        </span>
                    </h1>
                    <span className="d-block fw-500 lead-md-1 o-70 mb-7 mb-lg-8">
                        Pronto para apostar?
                        <b className='text-green-500'>{' '}realize acordado</b>
                    </span>
                    <Game {...response.game} />
                </div>
            </HeaderFifaPage>
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
                                <div className="container mx-auto p-4">
                                    <div className="flex justify-center">
                                        <div className='flex justify-center flex-wrap gap-8 mb-8'>
                                            <Confrontation confrontationData={response.confrontation} />
                                        </div>
                                    </div>
                                    <ConfrontationStatsChart confrontationData={response.confrontation} />
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
                <section id="features" className="content-section text-center">
                    <div className="container">
                        <div className="row mb-6 mb-lg-9">
                            <div className="col-12">
                                <div className="container mx-auto p-4">
                                    <div className="flex justify-center">
                                        <div className='flex justify-center flex-wrap gap-8 mb-8'>
                                            <PlayerComparisonTable playerA={response.playerA} playerB={response.playerB} />
                                        </div>
                                    </div>
                                    <PlayerPointsChart playerA={response.playerA} playerB={response.playerB} />
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
                <section id="features" className="content-section text-center">
                    <div className="container">
                        <div className="row mb-6 mb-lg-9">
                            <div className="col-12">
                                <div className="container mx-auto p-4">
                                    <div className="flex justify-center">
                                        <div className='flex justify-center flex-wrap gap-8 mb-8'>
                                            <PlayerStats stats={response.playerStatsA} />
                                            <PlayerStats stats={response.playerStatsB} color="text-pink-500" />
                                        </div>
                                    </div>
                                    <AverageGoalsChart playerStats={[response.playerStatsA, response.playerStatsB]} />
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
                <section id="features" className="content-section text-center">
                    <div className="container">
                        <div className="row mb-6 mb-lg-9">
                            <div className="col-12">
                                <div className="container mx-auto p-4">
                                    <div className="flex justify-center">
                                        <div className='flex justify-center flex-wrap gap-8 mb-8'>
                                            <PlayerStatsTeam stats={response.playerStatsTeamsA} />
                                            <PlayerStatsTeam stats={response.playerStatsTeamsB} color="text-pink-500" />
                                        </div>
                                    </div>
                                    <TeamStatsChart playerStats={[response.playerStatsTeamsA, response.playerStatsTeamsB]} />
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
