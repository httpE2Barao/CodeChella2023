import './shows.css'
import Dias from './dias'

const Shows = () => {
    return (
        <section className='shows'>
            <h1>/Line-Up/</h1>
            <Dias 
                titulo= 'SÁDADO &lt;11/03&gt;'
                linha1 = 'System of a DOM'
                linha2 = 'Python Maiden, &nbsp; Apollo Client 2001, &nbsp; Bon Java, &nbsp; NickCallback'
                linha3 = 'Linkin Promises, &nbsp; Fullstack Fighters, &nbsp; Papa React, &nbsp; Angular in Chains'
                linha4 = 'Agnostic Front-end, &nbsp; SlipkNode, &nbsp; Pink Flutter, &nbsp; Kiss'
            />
            <Dias 
                titulo='DOMINGO &lt;12/03&gt;'
                linha1 = 'Lana Del Ploy'
                linha2 = 'Dua Lib, &nbsp; The Backnd, &nbsp; Dj Query, &nbsp; ArrayAna Grande'
                linha3 = 'Miley Cypress, &nbsp; The Bootstrap Boys, &nbsp; Json Derulo, &nbsp; CloudPlay'
                linha4 = 'Kylie MiLOG, &nbsp; Jenkins Brothers, &nbsp; Rubycat Dolls, &nbsp; Dev Lovato'
            />
        </section>
    )
}
export default Shows