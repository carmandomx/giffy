const GifItem = ({ title, imgUrl }) => (
  <div>
    <h6>{title}</h6>
    <img src={imgUrl} alt={title} width={250} height={250} />
  </div>
)

export default GifItem
