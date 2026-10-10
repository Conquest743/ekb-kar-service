import { baseUrl, Reveal, YandexMap, YandexReviews } from "./blocks";

const mapHref = "https://yandex.com/maps/org/kar_servis/19601414055/";
const phone = "+7 (953) 008-08-08";
const coords = "60.734683,56.759187";

export default function App() {
  return <div className="site site-kar" id="top">
    <div className="concept-note"><span>Проект страницы для обсуждения</span><span>Не официальный сайт организации</span></div>
    <header className="masthead">
      <a className="wordmark" href="#top">Кар сервис</a>
      <nav aria-label="Навигация"><a href="#scope">Специализация</a><a href="#reviews">Отзывы</a><a href="#location">Контакты</a></nav>
      <a className="call-button" href="tel:+79530080808">Позвонить</a>
    </header>
    <main>
      <section className="hero">
        <div className="hero-head">
          <div className="hero-copy">
            <p className="category">Автосервис · Екатеринбург</p>
            <h1>Кар сервис</h1>
            <p className="lead">Диагностика и ремонт Land Rover, Jaguar и европейских автомобилей.</p>
            <a className="primary-action" href="tel:+79530080808">Обсудить автомобиль по телефону</a>
          </div>
          <div className="hero-data"><span>Land Rover</span><span>Jaguar</span><span>European</span></div>
        </div>
        <figure className="hero-image"><img src={baseUrl + "hero.webp"} alt="Сгенерированный концепт фасада автосервиса по открытым фото Яндекс Карт; не фактическая фотография" fetchPriority="high" /><figcaption>Сначала понять причину. Затем согласовать работу.</figcaption></figure>
      </section>
      <section className="marque-line" id="scope"><p>Марки из карточки</p><h2>Land Rover <span>·</span> Jaguar <span>·</span> европейские авто</h2></section>
      <Reveal><section className="work-ledger">
        <div><p className="eyebrow">Что указано в Яндекс Картах</p><h2>От диагностики до узла, который требует внимания.</h2><p>Состав и возможность работ уточняйте у мастера по телефону.</p></div>
        <ul><li>Диагностика автомобиля</li><li>Двигатель и ходовая часть</li><li>Тормоза и автоэлектрика</li><li>Замена масла и ГРМ</li></ul>
      </section></Reveal>
      <Reveal><section className="review-section" id="reviews">
        <div className="review-heading"><p className="eyebrow">Яндекс Карты · отзывы клиентов</p><h2>Внимание к объяснению и результату.</h2><p>Виджет показывает оригинальные отзывы, авторов и оценки непосредственно из Яндекс Карт.</p></div>
        <YandexReviews placeId="19601414055" title="Кар сервис" mapHref={mapHref} />
      </section></Reveal>
      <section className="location-section" id="location">
        <div className="location-copy"><p className="eyebrow">Автосервис в Екатеринбурге</p><h2>Адрес, часы и звонок</h2><address>ул. Альпинистов, 77Ж</address><dl><div><dt>Время</dt><dd>Яндекс Карты показывают открытие до 20:00; недельный график в карточке не раскрыт.</dd></div><div><dt>Телефон</dt><dd><a href="tel:+79530080808">{phone}</a></dd></div><div><dt>Категория</dt><dd>Автосервис, автотехцентр</dd></div></dl></div>
        <YandexMap coords={coords} title="Кар сервис, ул. Альпинистов, 77Ж" mapHref={mapHref} zoom={16} />
      </section>
      <section className="closing"><p>Позвоните, чтобы уточнить нужную работу и время.</p><a className="primary-action" href="tel:+79530080808">{phone}</a></section>
    </main>
    <footer><span>Демонстрационный макет · проверка источников 10.10.2026</span><span>Сгенерированное изображение; оригинальные фотографии и логотипы не использованы.</span></footer>
  </div>;
}