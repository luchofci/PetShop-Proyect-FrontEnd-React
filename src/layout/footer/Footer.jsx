import './Footer.css'

export default function Footer() {
    return (
      <footer className="main-footer">
      <section className="footer-section1">
          <div>Direcciones a Jardín Botánico - Av. Las Heras 4164-4238 (Distrito Federal)
              <p className="telefono"> Tel: 11.1.234.5478 </p>
          </div>
      </section>
      <section className="footer-section2">
          <div>
              <img className="footer-logo" src="/assets/images/logo-no-background.png" alt="Footer Logo"/>
          </div>
      </section>
      <section className="footer-section3">
          <div>
              <a className="footer-link" href="">
                  <img className="logo-IG" src="/assets/images/FOTO IG TRANSPARENTE 2.png" alt="logo-insta"/>
                  @PetShopbyTabuyOdin
              </a>
          </div>
          <div>
              <a className="footer-link" href="">
                  <img className="logo-YT" src="/assets/images/FOTO YT LOGO2.png" alt="logo-youtube"/> @PetShopbyTabuyOdin
              </a>
          </div>
          <div>
              <a className="footer-link" href="">
                  <img className="logo-FB" src="/assets/images/FOTO FB TRANSPARENTE4 .png" alt="logo-fb"/>
                  @PetShopbyTabuyOdin
              </a>
          </div>

      </section>
  </footer>

);
}