import './highlight.scss'

export default function Highlight() {
    return(
        <article className="highlight">
            <figure className='highlight-image'>
                <img 
                    src="/assets/images/image-web-3-desktop.jpg"
                    className='desktop-image' 
                    alt="" 
                />
                <img 
                    src="/assets/images/image-web-3-mobile.jpg"
                    className='mobile-image' 
                    alt="" 
                />
            </figure>
            <h1 className='title'>
                The Bright Future of Web 3.0?
            </h1>
            <section className='description'>
                <p className='content'>
                    We dive into the next evolution of the web that claims
                    to put the power of the platforms back into the hands
                    of the people. But is it really fulfilling its promise?
                </p>
                <a href="#" className='nav-button'>Read More</a>
            </section>
        </article>
    )
}