import "./Card.css";
export default Card;

function Card() {
  return (
    <li className="card-list__item">
      <section className="card">
        <p className="card__question">
          What property flips the axes in flexbox?
        </p>
        <button className="card__button-answer" data-js="button-answer">
          Show Answer
        </button>
        <p className="card__answer card__answer--off" data-js="answer">
          flex-direction Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis, quam nisi sequi aliquid vitae sit temporibus mollitia
          ipsum fugit eum illum sint quas iste tenetur, accusamus alias.
          Deleniti, natus sequi.
        </p>
        <ul className="card__tag-list">
          <li className="card__tag-list-item">#html</li>
          <li className="card__tag-list-item">#flexbox</li>
          <li className="card__tag-list-item">#css</li>
        </ul>
        <div className="card__button-bookmark">
          <button className="bookmark" data-js="bookmark-button">
            <svg
              className="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
              width="48"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </section>
    </li>
  );
}
