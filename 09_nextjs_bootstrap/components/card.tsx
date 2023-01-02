import styles from './card.module.css';

export default function Card() {
  return (
    <div className="justify-content-center col-sm-6 col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card card-styling">
        <img src="images/bouncytext_resize.png" className="card-img-top" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Bouncy-Zoom</h5>
          <p className="card-text mb-4">A nice little zoom bounce in and fade out example</p>
          <a href="bouncy-zoom.html" className="btn btn-outline-primary w-100 mt-auto align-self-start">Show</a>
        </div>
      </div>
    </div>
  );
}

