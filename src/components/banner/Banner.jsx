import './Banner.css'
import banner from "../../assets/image/BannerPic.jpg"

export const Banner = () => {
    return (
        
    <div className="main-banner">
    <figure className="banner-img-container">
        <picture>
            <source className="banner-img" srcSet={banner}
                media="(max-width: 768px)"/>
            <img className="banner-img" src={banner} alt="banner main"/>
        </picture>
    </figure>

    <div className="banner-info">
        <h1 className="banner-title">PetShop <br/>
            <p>by Tabu y Odin</p>
        </h1>
        <p className="banner-text">
            Como representantes cuadrupedos de esta familia, nos vemos obligados a ofrecerte solamente lo mejor.
            Todos nuestros productos gozan de una aprobación de 5 de 5 patitas.
        </p>
    </div>
</div>
    )
}


export default Banner
