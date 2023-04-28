import './banner.css';

interface BannerProps {
    titulo?: string
    src: string
    alt: string
}

const Banner = (props:BannerProps) => {
    return (
        <div className='banner'>
            <aside>
                <h1>{props.titulo}</h1>
            </aside>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Banner