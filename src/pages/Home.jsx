import Header from "../components/header/Header";
import { icons } from "../helpers/icons";
import { skilsList } from "../helpers/skilsList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            {skilsList.map(({ category, items }, index) => (
              <li key={index} className="content-list__item">
                <h2 className="title-2">{category}</h2>
                {items.map((skillGroup, groupIndex) => (
                  <ul
                    key={groupIndex}
                    className={`social ${
                      groupIndex === items.length - 1 ? "social--centered" : ""
                    }`}
                  >
                    {skillGroup.map(({ icon, label, className }) => (
                      <li
                        key={icon}
                        className={`social__item ${className || ""}`}
                      >
                        <img src={icons[icon]} alt={label} />
                        <p>{label}</p>
                      </li>
                    ))}
                  </ul>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
