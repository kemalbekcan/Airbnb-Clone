import { Icon } from '../icons';
function Home() {
  return (
    <div className="wrapper">
      <div className="bg-black">
        <header className="header container">
          <h3>COVID-19 çerçevesinde aldığımız önlemler hakkındaki en güncel bilgileri öğrenin</h3>
          <div className="flex justify-content-between align-items-center">
            <div>
              <Icon name="airbnb" size={30} />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Konaklama yerleri</a>
                  <a href="#">Deneyimler</a>
                  <a href="#">Çevrim içi deneyimler</a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </header>
      </div>
      <article className="advertisement">asd</article>
      <article className="journey">sadsa</article>
      <article className="experience">expr</article>
      <article className="ask">ask</article>
      <footer>footer</footer>
    </div>
  );
}

export default Home;
