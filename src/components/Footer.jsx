import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Footer() {
  const profile = useContext(ProfileContext);

  return (
    <footer className="site-footer mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-3">
            <h5 className="mb-3">{profile.name}</h5>
            <p className="mb-1">{profile.address}</p>
            <p className="mb-1">{profile.city}</p>
            <p className="mb-0">Téléphone : {profile.phone}</p>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/#apropos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Fresh food</a></li>
              <li><a href="#">Restaurant Akira</a></li>
              <li><a href="#">Espace bien-être</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Mes derniers articles</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Coder son site en HTML/CSS</a></li>
              <li><a href="#">Vendre ses produits sur le web</a></li>
              <li><a href="#">Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        © Designed by John Doe
      </div>
    </footer>
  );
}