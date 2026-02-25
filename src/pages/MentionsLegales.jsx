import banner from "../assets/img/banner.jpg";

export default function MentionsLegales() {
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
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-normal">MENTIONS LÉGALES</h1>
            <div
              className="mx-auto mt-3"
              style={{
                width: "280px",
                height: "4px",
                backgroundColor: "#0d6efd",
              }}
            />
          </div>

          <div className="accordion shadow-sm" id="legalAccordion">
            {/* ÉDITEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editor"
                >
                  Éditeur du site
                </button>
              </h2>

              <div
                id="editor"
                className="accordion-collapse collapse show"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <h3 className="h4">John Doe</h3>
                  <p className="mb-1">40 Rue Laure Diebold</p>
                  <p className="mb-1">69009 Lyon, France</p>
                  <p className="mb-1">06 20 30 40 50</p>
                  <p className="mb-0">john.doe@gmail.com</p>
                </div>
              </div>
            </div>

            {/* HÉBERGEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#host"
                >
                  Hébergeur
                </button>
              </h2>

              <div
                id="host"
                className="accordion-collapse collapse"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <h3 className="h4">Always Data</h3>
                  <p className="mb-1">
                    91 rue du Faubourg Saint Honoré
                  </p>
                  <p className="mb-1">75008 Paris</p>
                  <p className="mb-0">www.alwaysdata.com</p>
                </div>
              </div>
            </div>

            {/* CRÉDITS */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>

              <div
                id="credits"
                className="accordion-collapse collapse"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <h3 className="h4">Crédits</h3>
                  <p>
                    Site développé par John Doe, étudiant du CEF.
                  </p>
                  <p className="mb-0">
                    Les images libres de droit sont issues du site Pixabay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}