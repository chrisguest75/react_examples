import styles from './card.module.css';
import Link from 'next/link';

export default function Card( {src, title, description, effect} ) {
  return (
    <div className="justify-content-center col-sm-6 col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card card-styling">
        <img src={src} className="card-img-top" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-4">{description}</p>
          <Link href={`/effects/${effect}`} className="btn btn-outline-primary w-100 mt-auto align-self-start">Show</Link>
        </div>
      </div>
    </div>
  );
}

