import Zero from "../../assets/images/projects/project-1.jpg";
import First from "../../assets/images/projects/project-2.jpg";
import Second from "../../assets/images/projects/project-3.jpg";
import Third from "../../assets/images/projects/project-4.jpg";
import Fourth from "../../assets/images/projects/project-5.jpg";
import Fifth from "../../assets/images/projects/project-6.jpg";
import Arrow from "../../assets/icons/arrow.svg"
const GalleryView = () => {
    return (
      <>
        <section class="projects width-12 grid-12">
            <h2>Проекты</h2>
            <div class="image-gallery width-12 grid-12">
                <div class="image-gallery-item">
                    <img src={Zero}></img>
                    <div class="image-gallery-help-text">
                        Тумба под телевизор
                        <img src={Arrow}></img>
                    </div>
                </div>
                <div class="image-gallery-item"><img src={First}></img>
                </div>
                <div class="image-gallery-item"><img src={Second}></img>
                </div>
                <div class="image-gallery-item"><img src={Third}></img>
                </div>
                <div class="image-gallery-item"><img src={Fourth}></img>
                </div>
                <div class="image-gallery-item"><img src={Fifth}></img>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default GalleryView;
  