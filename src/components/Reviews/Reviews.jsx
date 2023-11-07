import Quote from "../../assets/icons/quote.svg";

const ReviewsView = () => {
    return (
        <section class="reviews width-12 grid-12">
        <h2>Отзывы</h2>
        <div class="reviews-gallery width-12 grid-12">
            <div class="reviews-gallery-item">
                <img class="reviews-gallery-item-icon" src={Quote}></img>
                <span class="reviews-gallery-item-name text-large bold">Игорь Антонов</span>
                <p class="reviews-gallery-item-text">Обратилась к Aveji по рекомендации. Команда сразу поняла, какой
                    дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог
                    понравился, все на высшем уровне.</p>
            </div>
            <div class="reviews-gallery-item">
                <img class="reviews-gallery-item-icon" src={Quote}></img>
                <span class="reviews-gallery-item-name text-large bold">Ольга Иванова</span>
                <p class="reviews-gallery-item-text">После пары заказов у компании Aveji убедилась, что за мебелью
                    теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
            </div>
            <div class="reviews-gallery-item">
                <img class="reviews-gallery-item-icon" src="assets/icons/quote.svg" src={Quote}></img>
                <span class="reviews-gallery-item-name text-large bold">Аркадий Макаров</span>
                <p class="reviews-gallery-item-text">Aveji — настоящие профессионалы своего дела. Быстро поняли мою
                    задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали
                    на месте. Большое спасибо!</p>
            </div>
        </div>
    </section>
    );
};

export default ReviewsView;