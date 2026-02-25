import banner from "../assets/img/banner.jpg";

import coder from "../assets/img/blog/coder.jpg";
import croissance from "../assets/img/blog/croissance.jpg";
import google from "../assets/img/blog/google.jpg";
import screens from "../assets/img/blog/screens.jpg";
import seo from "../assets/img/blog/seo.jpg";
import technos from "../assets/img/blog/technos.png";

export default function Blog() {
  const posts = [
    {
      title: "Coder son site en HTML/CSS",
      img: coder,
      date: "22 août 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Vendre ses produits sur le web",
      img: croissance,
      date: "20 août 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Se positionner sur Google",
      img: google,
      date: "1 août 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Coder en responsive design",
      img: screens,
      date: "31 juillet 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Techniques de référencement",
      img: seo,
      date: "30 juillet 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Apprendre à coder",
      img: technos,
      date: "12 juillet 2022",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

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

      {/* TITLE */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-normal">BLOG</h1>
          <p className="text-muted mb-3">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          <div
            className="mx-auto"
            style={{ width: "280px", height: "4px", backgroundColor: "#0d6efd" }}
          />
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-light pb-5">
        <div className="container">
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.title}>
                <article className="card h-100 shadow-sm">
                  <img
                    src={post.img}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h2 className="h4 card-title">{post.title}</h2>
                    <p className="card-text text-muted">{post.text}</p>

                    <button type="button" className="btn btn-primary">
                      Lire la suite
                    </button>
                  </div>

                  <div className="card-footer bg-white">
                    <small className="text-muted">
                      Publié le {post.date}
                    </small>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}