import React from "react";
import heroBg from "../assets/img/hero-bg.jpg";
import aboutImg from "../assets/img/john-doe-about.jpg";

export default function Home() {
  const scrollToAPropos = () => {
    const section = document.getElementById("apropos");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "80vh",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        />

        <div className="container position-relative h-100">
          <div className="row justify-content-center align-items-center text-center h-100 py-5">
            <div className="col-lg-10">
              <h1 className="text-white fw-bold display-3 mb-3">
                Bonjour, je suis John Doe
              </h1>
              <h2 className="text-white h3 mb-4">Développeur web full stack</h2>

              <button type="button" className="btn btn-primary px-4" onClick={scrollToAPropos}>
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS (CARD) */}
      <section id="apropos" className="py-5" style={{ background: "#f5f5f5" }}>
        <div className="container">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              <div className="row g-4">
                {/* Left column */}
                <div className="col-lg-6">
                  <h3 className="fw-bold mb-2">À propos</h3>
                  <div
                    style={{
                      height: "3px",
                      width: "100%",
                      backgroundColor: "#0d6efd",
                      borderRadius: "2px",
                      marginBottom: "1.5rem",
                    }}
                  />

                  <p>
                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une
                    formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de
                    cette formation, j'ai pu acquérir des bases solides pour travailler dans le
                    domaine du <strong>développement web</strong>.
                  </p>

                  <p>
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence
                    digitale pour consolider ma formation de{" "}
                    <strong>développeur web full stack</strong>.
                  </p>

                  <p className="mb-0">
                    J'accorde une attention particulière à la qualité du code que j'écris et je
                    respecte les bonnes pratiques du web.
                  </p>
                </div>

                {/* Right column */}
                <div className="col-lg-6">
                  <img
                    src={aboutImg}
                    alt="John Doe"
                    className="img-fluid rounded"
                    style={{ width: "100%", objectFit: "cover" }}
                  />

                  <h3 className="fw-bold mt-4 mb-3">Mes compétences</h3>

                  {/* Skill item helper structure */}
                  <div className="mb-3">
                    <div className="small mb-1">HTML5 90%</div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-danger" style={{ width: "90%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="small mb-1">CSS3 80%</div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-info" style={{ width: "80%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="small mb-1">JAVASCRIPT 70%</div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-warning" style={{ width: "70%" }} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="small mb-1">PHP 60%</div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-success" style={{ width: "60%" }} />
                    </div>
                  </div>

                  <div className="mb-0">
                    <div className="small mb-1">REACT 50%</div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div className="progress-bar bg-primary" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}