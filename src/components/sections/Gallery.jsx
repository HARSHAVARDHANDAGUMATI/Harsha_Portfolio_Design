const galleryItems = [
  { id: 'img1', seed: 'portrait', height: 400 },
  { id: 'img2', seed: 'poster1', height: 550 },
  { id: 'img3', seed: 'poster2', height: 600 },
  { id: 'img4', seed: 'poster3', height: 480 },
  { id: 'img5', seed: 'poster4', height: 350 },
  { id: 'img6', seed: 'neon', height: 500 },
  { id: 'img7', seed: 'sketch', height: 420 },
  { id: 'img8', seed: 'ronald', height: 450 },
  { id: 'img9', seed: 'setup', height: 320 },
  { id: 'img10', seed: 'minimal', height: 380 },
  { id: 'img11', seed: 'batman', height: 410 },
  { id: 'img12', seed: 'darkness', height: 530 },
  { id: 'img13', seed: 'hero', height: 470 },
  { id: 'img14', seed: 'raven', height: 400 },
  { id: 'img15', seed: 'white', height: 360 },
  { id: 'img16', seed: 'black', height: 510 },
  { id: 'img17', seed: 'cartoon', height: 390 },
  { id: 'img18', seed: 'jersey3', height: 440 },
  { id: 'img19', seed: 'jersey4', height: 480 },
  { id: 'img20', seed: 'jersey5', height: 520 },
  { id: 'img21', seed: 'jersey6', height: 460 },
]

function Gallery() {
  return (
    <section className="gallery-grid">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-image-wrapper">
          <img 
            src={`https://picsum.photos/seed/${item.seed}/400/${item.height}`} 
            alt="Gallery item" 
            className="gallery-image" 
            loading="lazy"
          />
        </div>
      ))}
    </section>
  )
}

export default Gallery
