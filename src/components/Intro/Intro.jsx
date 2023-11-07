import Sofa from "../../assets/images/sofa.jpg";
import Chair from "../../assets/images/chair.jpg";
const IntroView = () => {
  return (
    <>
      <section class="intro width-12 grid-12 ">
        <div class="width-12 intro-top">
          <h1>
            Эксклюзивная
            <br />
            и нестандартная
            <br />
            мебель для дома
          </h1>
          <a class="text-large order-button" href="#">
            Заказать проект
          </a>
        </div>
        <div class="width-12 grid-12 intro-images">
          <div class="width-6 grid-6 intro-images-left">
            <div class="width-6">
              <p class="text-main">
                Мы можем произвести любую мебель для
                <br />
                вашего проекта и найти производственное
                <br />
                решение любой задумки.
              </p>
            </div>
            <div class="width-3">
              <img src={Sofa} />
            </div>
          </div>
          <div class="width-6">
            <img src={Chair} />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroView;
