import Icon from "../../assets/images/logo.svg";
const HeaderView = () => {
  return (
    <>
    <header class="header width-12 grid-12">
            <div class="width-8">
                <img src={Icon} />
            </div>

            <div class="navigation-contacts width-4">
                <nav class="navigation">
                    <ul>
                        <li><a class="text-large" href="#about">О нас</a></li>
                        <li><a class="text-large" href="#projects">Проекты</a></li>
                        <li><a class="text-large" href="#how-we-work">Материалы</a></li>
                        <li><a class="text-large" href="#reviews">Отзывы</a></li>
                    </ul>
                </nav>
                <span class="text-large">+7 999 999 99 99</span>
            </div>
        </header>
    </>
  );
};

export default HeaderView;