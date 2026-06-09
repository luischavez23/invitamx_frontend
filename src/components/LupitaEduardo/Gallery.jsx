import lupitaEduardo1 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_5.png";
import lupitaEduardo2 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_6.png";
import lupitaEduardo3 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_7.png";
import lupitaEduardo4 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_8.png";
import lupitaEduardo5 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_9.png";
import lupitaEduardo6 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_10.png";
import lupitaEduardo7 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_11.png";
import lupitaEduardo8 from "../../assets/img/lupitaEduardo/lupita_y_eduardo_4.png";


const galleryImages = [
  {
    id: 1,
    src: lupitaEduardo1,    
    alt: "Galería 1",
    rotate: "rotate-[-2deg]",
  },
  {
    id: 2,
    src: lupitaEduardo2,
    alt: "Galería 2",
    rotate: "rotate-[2deg]",
  },
  {
    id: 3,
    src: lupitaEduardo3,
    alt: "Galería 3",
    rotate: "rotate-[-1deg]",
  },
  {
    id: 4,
    src: lupitaEduardo4,
    alt: "Galería 4",
    rotate: "rotate-[1deg]",
  },
  {
    id: 5,
    src: lupitaEduardo5,
    alt: "Galería 5",
    rotate: "rotate-[-2deg]",
  },
  {
    id: 6,
    src: lupitaEduardo6,
    alt: "Galería 6",
    rotate: "rotate-[2deg]",
  },
  {
    id: 7,
    src: lupitaEduardo7,
    alt: "Galería 7",
    rotate: "rotate-[2deg]",
  },
  {
    id: 8,
    src: lupitaEduardo8,
    alt: "Galería 8",
    rotate: "rotate-[2deg]",
  },
];

const Gallery = () => {
  return (
    <section
      className="py-24 bg-dark-primary text-white px-4 text-center"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl mb-6 italic text-gold">
          Galería
        </h2>

        <p className="font-light opacity-80 mb-16 tracking-wide leading-relaxed px-6 italic serif text-lg">
          Algunos momentos que forman parte de nuestra historia
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group transform transition duration-700 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className={`
                  bg-white
                  p-3
                  shadow-2xl
                  ${image.rotate}
                  hover:rotate-0
                  transition
                  duration-700
                `}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;