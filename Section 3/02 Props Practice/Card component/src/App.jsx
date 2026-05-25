import React from "react";
import "./index.css";

//Given Data:
const cardData = [
  {
    title: "Мокка",
    description: "Развиваем финтех-продукт для международного рынка",
    date: "24 апреля 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#финтех", "#международный", "#рынок"],
    archived: false,
  },
  {
    title: "Деньги Вперед",
    description: "Фронтенд и бэкенд для сервиса выплат зарплат по запросу",
    date: "16 января 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#финансы", "#сервис", "#выплаты"],
    archived: false,
  },
  {
    title: "ResolHR",
    description: "Помогли HR-tech-стартапу с кастомизацией для VIP-клиентов",
    date: "10 октября 2023",
    imageUrl: "/img-3.jpeg",
    tags: ["#HR", "#кастомизация", "#VIP"],
    archived: true,
  },
  {
    title: "ActivePlatform",
    description: "Интеграция Adobe и развитие платформы комплексной подписки",
    date: "10 ноября 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#интеграция", "#платформа", "#подписка"],
    archived: false,
  },
  {
    title: "START",
    description: "Разработали платформу A/B тестов для стримингового сервиса",
    date: "22 сентября 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B тесты", "#стриминг", "#платформа"],
    archived: false,
  },
  {
    title: "Mindbox",
    description:
      "Поддерживаем редизайн платформы автоматизированного маркетинга",
    date: "21 сентября 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#маркетинг", "#редизайн", "#автоматизация"],
    archived: false,
  },
];

function App() {
  return <CardContainer />;
}

function Card(props) {
  return (
    <div className="card">
      <figure className="card__image">
        <img className="card__image-content" src={props.img} alt="card-image" />
      </figure>
      <div className="card__title">{props.title}</div>
      <div className="card__subtitle">{props.subtitle}</div>
      <div className="card__time">{props.time}</div>
      <CardTag tags={props.tags} />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map((card) => {
        return (
          <Card
            key={card.title}
            img={card.imageUrl}
            title={card.title}
            subtitle={card.description}
            time={card.date}
            tags={card.tags}
          />
        );
      })}
    </div>
  );
}

function CardTag(props) {
  return (
    <div className="card__tags">
      {props.tags.map((tag) => {
        return (
          <p key={tag} className="card__tags-item">
            {tag}
          </p>
        );
      })}
    </div>
  );
}

export default App;
