import React from "react";
import banner from "../assets/img/banner.jpg";
import { Monitor, FileCode, Search } from "lucide-react";

export default function Services() {
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

      {/* TITLE SECTION */}
      <section className="py-5" style={{ background: "#f5f5f5" }}>
        <div className="container text-center">
          <h1 className="fw-bold display-5 mb-3">
            MON OFFRE DE SERVICES
          </h1>

          <p className="text-muted mb-4">
            Voici les prestations sur lesquelles je peux intervenir.
          </p>

          <div
            style={{
              height: "3px",
              width: "120px",
              backgroundColor: "#0d6efd",
              margin: "0 auto 50px auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* CARDS */}
        <div className="container">
          <div className="row g-4 justify-content-center">

            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
                <Monitor size={48} className="text-primary mb-3" />
                <h4 className="fw-bold mb-3">UX DESIGN</h4>
                <p className="text-muted mb-0">
                  L'UX Design est une méthode de conception centrée sur
                  l'utilisateur. Son but est d'offrir une expérience de
                  navigation optimale à l'internaute.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
                <FileCode size={48} className="text-primary mb-3" />
                <h4 className="fw-bold mb-3">DÉVELOPPEMENT WEB</h4>
                <p className="text-muted mb-0">
                  Le <strong>développement de sites web</strong> repose sur
                  l'utilisation des langages <u>HTML</u>, <u>CSS</u>,
                  JavaScript et <u>PHP</u>.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
                <Search size={48} className="text-primary mb-3" />
                <h4 className="fw-bold mb-3">RÉFÉRENCEMENT</h4>
                <p className="text-muted mb-0">
                  Le <strong>référencement naturel</strong> d'un site,
                  aussi appelé <u>SEO</u>, consiste à mettre des techniques
                  en oeuvre pour <em>améliorer sa position</em> dans les
                  résultats des moteurs de recherche.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}