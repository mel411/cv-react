import freshFoodImg from "../assets/img/portfolio/fresh-food.jpg";
import restaurantImg from "../assets/img/portfolio/restaurant-akira.jpg";
import espaceImg from "../assets/img/portfolio/espace-bien-etre.jpg";
import portfolioBg from "../assets/img/banner.jpg";

export default function Realisations() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          height: "220px",
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Bannière portfolio"
      />

      {/* CONTENT */}
      <section className="bg-light py-5">
        <div className="container">
          <header className="text-center mb-5">
            <h1 className="display-4">PORTFOLIO</h1>
            <p className="lead mb-3">Voici quelques-unes de mes réalisations.</p>
            <div
              style={{
                width: "260px",
                height: "4px",
                margin: "0 auto",
                backgroundColor: "#0d6efd",
              }}
            />
          </header>

          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm">
                <img
                  src={freshFoodImg}
                  className="card-img-top"
                  alt="Fresh food"
                />
                <div className="card-body text-center">
                  <h2 className="card-title h3">Fresh food</h2>
                  <p className="card-text mb-3">
                    Réalisation d&apos;un site avec commande en ligne.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer text-center">
                  <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                </div>
              </article>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm">
                <img
                  src={restaurantImg}
                  className="card-img-top"
                  alt="Restaurant Akira"
                />
                <div className="card-body text-center">
                  <h2 className="card-title h3">Restaurant Akira</h2>
                  <p className="card-text mb-3">
                    Réalisation d&apos;un site vitrine.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer text-center">
                  <small className="text-muted">Site réalisé avec WordPress</small>
                </div>
              </article>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm">
                <img
                  src={espaceImg}
                  className="card-img-top"
                  alt="Espace bien-être"
                />
                <div className="card-body text-center">
                  <h2 className="card-title h3">Espace bien-être</h2>
                  <p className="card-text mb-3">
                    Réalisation d&apos;un site vitrine pour un praticien de bien-être.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer text-center">
                  <small className="text-muted">Site réalisé en HTML/CSS</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}