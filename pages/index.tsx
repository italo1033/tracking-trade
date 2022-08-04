import style from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar from "../components/Navbar";
export default function Home() {
  return(
    <div>
      <Navbar />
      <div className="d-flex">
        <section>
          <div className={style.item}>

          </div>
          <div className={style.analise_percentual}>

          </div>
        </section>

        {/* segundo container */}
        <section className="w-100">
          <header className={style.header_button}> 
          ks
          </header>
          <main>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}></div>
              <div className={style.charts}></div>
            </section>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}></div>
              <div className={style.charts}></div>
            </section>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}></div>
              <div className={style.charts}></div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}