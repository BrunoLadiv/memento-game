export default function Card({image,selected,onClick}) {
  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img src={image} alt="" className="card-face" />
        <img src={'/public/assets/fireship.png'} alt="" className="card-back" />
      </div>

    </div>
  )
}