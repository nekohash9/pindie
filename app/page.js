import Image from 'next/image';
import styles from './page.module.css';

import { Banner } from './components/Banner/Banner';
import { CardsList } from './components/CardsList/CardsList';
import { PopularCardsFragment } from './components/CardsList/PopularCardsFragment';
import { NewCardsFragment } from './components/CardsList/NewCardsFragment';
import { Promo } from './components/Promo/Promo';

export default function Home(props) {
  return (
    <main className="main">
      <Banner />
      <CardsList title={props.id === 'popular' ? 'Популярные' : 'Новинки'}>
        {props.id === 'popular' ? <PopularCardsFragment /> : <NewCardsFragment />}
      </CardsList>
      <CardsList title={props.id === 'new' ? 'Новинки' : 'Популярные'}>
        {props.id === 'new' ? <NewCardsFragment /> : <PopularCardsFragment />}
      </CardsList>
      <Promo />
    </main>
  );
}