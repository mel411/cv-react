import banner from "../assets/img/banner.jpg";
import ProfileInfo from "../components/ProfileInfo";

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          height: "220px",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section className="bg-light py-5">
        <div className="container bg-white shadow rounded p-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-normal">ME CONTACTER</h1>
            <p className="text-muted">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div
              className="mx-auto mt-3"
              style={{
                width: "280px",
                height: "4px",
                backgroundColor: "#0d6efd",
              }}
            />
          </div>

          <div className="row">
            {/* FORMULAIRE */}
            <div className="col-lg-6">
              <h2 className="h4 mb-4 border-bottom pb-2">
                Formulaire de contact
              </h2>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                  />
                </div>

                <button type="submit" className="btn btn-primary px-4">
                  Envoyer
                </button>
              </form>
            </div>

            {/* COORDONNÉES */}
            <div className="col-lg-6">
              <h2 className="h4 mb-4 border-bottom pb-2">
                Mes coordonnées
              </h2>

              {/* Profile information from Context */}
              <ProfileInfo />

              <div className="mt-4">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}