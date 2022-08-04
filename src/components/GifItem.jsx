

const GifItem = ({ title, url, category }) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p> Bailando {category} </p>

    </div>
  )
}

export default GifItem