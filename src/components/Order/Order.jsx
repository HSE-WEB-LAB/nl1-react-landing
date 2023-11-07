import TV from "../../assets/images/tv.jpg";
import appStoreFirst from "../../assets/brands/appstore.png";
import appStoreSecond from "../../assets/brands/googleplay.png";
const OrderView = () => {
    return (
        <section className="order-form width-12 grid-12">
        <div className="width-5">
            <img src={TV} alt="TV"></img>
        </div>
        <div className="width-1"></div>
        <div className="width-6">
            <h2 className="form-title">Хотите заказать проект?</h2>
            <span>Оставьте заявку, и мы вам перезвоним</span>

            <form className="form" action="#" method="POST">
                <input className="form-text-field" type="text" name="name" placeholder="Имя" required />
                <input className="form-text-field" type="text" name="email" placeholder="E-mail" required />
                <input className="form-text-field" type="text" name="phone" placeholder="Телефон" required />
                <input className="form-text-button" type="submit" value="Отправить заявку" />
            </form>

            <div className="mobile-app-links">
                <a href="#"><img src={appStoreFirst} alt="App Store" /></a>
                <a href="#"><img src={appStoreSecond} alt="Google Play" /></a>
            </div>
        </div>
    </section>
    );
};

export default OrderView;
