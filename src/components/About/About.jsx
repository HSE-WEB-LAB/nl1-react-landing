
const AboutView = () => {
  return (
    <>
      <section class="about width-12 grid-12 ">
            <div class="width-6">
                <h2>Более 5 лет создаем<br />мебель для вашего<br />комфорта</h2>
            </div>
            <div class="width-6 about-text">
                <p>Мы — команда профессионалов, которые могут произвести любую мебель для<br />вашего проекта, а также
                    найти
                    производственное<br />решение любой задумки.</p>
                <p>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
                <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную
                    смолу.</p>
                <div class="about-text-points">
                    <div class="about-text-point">
                        <h3 class="about-text-point-heading">1 год</h3>
                        <span class="about-text-point-desc">гарантия на всю продукцию</span>
                    </div>
                    <div class="about-text-point">
                        <h3 class="about-text-point-heading">300+</h3>
                        <span class="about-text-point-desc">выполненных проектов</span>
                    </div>
                    <div class="about-text-point">
                        <h3 class="about-text-point-heading">15 дней</h3>
                        <span class="about-text-point-desc">срок производства</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutView;
