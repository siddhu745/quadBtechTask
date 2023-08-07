import './show.css'

export default function Show({ value }) {
  return (
    <div className="show">
      <div className="show-image">
        <img src={value[0]?.show?.image?.original} alt="movie" />
      </div>
      <div className="show-info">
        <p className="show-name">{value[0].show.name}</p>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: value[0].show.summary }}
        />
      </div>
    </div>
  );
}
