import { nanoid } from 'nanoid';
import Banner from './components/Banner/Banner.jsx';
import Container from './components/Container/Container.jsx';
import NewsWidget from './components/NewsWidget/NewsWidget.jsx';
import ListItem from './components/ListItem/ListItem.jsx';
import PopularList from './components/PopularList/PopularList.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ServiceTabBar from './components/ServiceTabBar/ServiceTabBar.jsx';
import StocksBar from './components/StocksBar/StocksBar.jsx';
import Weather from './components/Weather/Weather.jsx';
import Widget from './components/Widget/Widget.jsx';
import TvWidget from './components/TvWidget/TvWidget.jsx';
import './App.css';
import logo from './assets/logo.png';
import playIcon from './assets/icon-play.png';
import media1Icon from './assets/icon-media-1.png';
import media2Icon from './assets/icon-media-2.png';
import media3Icon from './assets/icon-media-3.png';
import media4Icon from './assets/icon-media-4.png';
import rulesPic from './assets/image-rules.png';
import bannerKino from './assets/banner-kino.png';

const appData = {
  logo,
  newsTabs: [
    { id: nanoid(), title: 'Сейчас в СМИ', link: '#' },
    { id: nanoid(), title: 'в Германии', link: '#', active: false },
    { id: nanoid(), title: 'Рекомендуем', link: '#', active: false },
  ],
  news: [
    { id: nanoid(), icon: media1Icon, title: 'Суд оштрафовал известного персонажа на 850 тыс. руб.', link: '#' },
    { id: nanoid(), icon: media1Icon, title: 'В одной стране введены санкции против «крупной компании»', link: '#' },
    { id: nanoid(), icon: media2Icon, title: 'Минфин подготовил проект семейной ипотеки на строительство частных домов', link: '#' },
    { id: nanoid(), icon: media3Icon, title: 'Ванга предсказала реакцию пользователей из-за требований WhatsApp', link: '#' },
    { id: nanoid(), icon: media4Icon, title: 'Курочка Ряба снесла яйцо из редкого металла', link: '#' },
  ],
  stockQuotes: [
    { id: nanoid(), title: 'USD', price: 63.52, change: 0.09, link: '#' },
    { id: nanoid(), title: 'EUR', price: 70.86, change: 0.14, link: '#' },
    { id: nanoid(), title: 'Нефть', price: 64.9, change: 1.64, units: '%', link: '#' },
  ],
  services: [
    { id: nanoid(), title: 'Видео', link: '#' },
    { id: nanoid(), title: 'Картинки', link: '#' },
    { id: nanoid(), title: 'Новости', link: '#' },
    { id: nanoid(), title: 'Карты', link: '#' },
    { id: nanoid(), title: 'Маркет', link: '#' },
    { id: nanoid(), title: 'Переводчик', link: '#' },
    { id: nanoid(), title: 'Эфир', link: '#' },
  ],
  weather: {
    now: { type: 'mixed', t: 3 },
    next: { t: 8, title: 'Утром' },
    later: { t: 10, title: 'днем' },
  },
  popular: [
    { id: nanoid(), title: 'Недвижимость', descr: 'о сталинках', link: '#' },
    { id: nanoid(), title: 'Маркет', descr: 'люстры и светильники', link: '#' },
    { id: nanoid(), title: 'Авто.ру', descr: 'привод 4x4 до 500 000', link: '#' },
  ],
  tvProgram: [
    { id: nanoid(), title: '02:00 ТНТ.Best', hint: 'ТНТ International', link: '#' },
    { id: nanoid(), title: '02:12 Джинглики', hint: 'Карусель INT', link: '#' },
    { id: nanoid(), title: '02:25 Наедине со всеми', hint: 'Первый', link: '#' },
  ],
  playlist: [
    { id: nanoid(), icon: playIcon, title: 'Управление как искусство', hint: 'Успех', link: '#' },
    { id: nanoid(), icon: playIcon, title: 'Ночь. Мир в это время', hint: 'earthTV', link: '#' },
    { id: nanoid(), icon: playIcon, title: 'Андрей Вознесенский', hint: 'Совершенно секретно', link: '#' },
  ],
};

function App() {
  return (
    <>
      <Container className="align-end">
        <NewsWidget tabs={appData.newsTabs} news={appData.news}>
          <StocksBar quotes={appData.stockQuotes} />
        </NewsWidget>

        <Widget title="Работа над ошибками" image={rulesPic} link="#">
          <p>Смотрите на <b>Startup</b> и запоминайте</p>
        </Widget>
      </Container>

      <Container className="main-block">
        <ServiceTabBar items={appData.services} />
        <SearchBar logo={appData.logo} />
        <Banner image={bannerKino} link="#" />
      </Container>

      <Container className="bottom-widgets">
        <Widget title="Погода" link="#">
          <Weather {...appData.weather} />
        </Widget>

        <Widget title="Посещаемое" link="#">
          <PopularList items={appData.popular} />
        </Widget>

        <Widget title="Карта Германии" link="#">
          <a href="#">Расписание</a>
        </Widget>

        <TvWidget items={appData.tvProgram} />

        <Widget title="Эфир" link="#">
          {appData.playlist.map((item) => <ListItem key={item.id} {...item} />)}
        </Widget>
      </Container>
    </>
  );
}

export default App;
