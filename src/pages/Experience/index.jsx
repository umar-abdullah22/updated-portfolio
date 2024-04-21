import React from 'react'
import { ExperienceStyle } from './style.js'
import { EducationContent } from './constant.js'
import { ExperienceContent } from './constant.js'

const Experience = () => {
    return (
        <>
            <ExperienceStyle>
                <div className="container">
                    <main className="row">
                        <section className="col">
                            <header className="title">
                                <h2>EDUCATION</h2>
                            </header>
                            <div className="contentBox">
                                {EducationContent.map(item => (
                                    <div key={item.key} className="box">
                                        <h4>{item.year}</h4>
                                        <h3>{item.institute}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="col">
                            <header className="title">
                                <h2>EXPERIENCE</h2>
                            </header>
                            <div className="contentBox">
                                {ExperienceContent.map(item => (
                                    <div key={item.key} className="box">
                                        <h4>{item.year}</h4>
                                        <h3>{item.institute}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </ExperienceStyle>
        </>
    )
}

export default Experience