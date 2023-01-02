import styles from './footer.module.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow nav-opacity">
      <div className="container">
        <a className="navbar-brand" href="#">Text Effects</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

