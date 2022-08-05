import style from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar from "../components/Navbar";
import  ChartPrice from "../components/ChartPrice";
import  ChartPresence from "../components/ChartPresence";
import  ChartTemperature from "../components/ChartTemperature";
import { BiHelpCircle } from 'react-icons/bi';
export default function Home() {
  return(
    <div className={style.containerGeral}>
      <Navbar />
      <div className="d-flex mt-2">
        <section style={{width:'30%'}}>
          <div className={style.item}>
          </div>
          <div className={style.analise_percentual}>
            <main>
              <section  className={style.header_analise_percentual}>
                <label>Off <BiHelpCircle /> </label>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <div className="me-4">
                    <label className={style.label}>Date</label>
                    <div>
                      <input type={"date"} className={style.button_style} />
                    </div>
                  </div>
                  <div>
                    <label className={style.label}>Price</label>
                    <div>
                      <button className={style.button_style}>Mode</button>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Marcketplace</th>
                      <th scope="col">Presence</th>
                      <th scope="col">SP(R$)</th>
                      <th scope="col">%RRP</th>
                      <th scope="col">IP(R$)</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </main>

          </div>
        </section>

        {/* segundo container */}
        <section style={{width:'70%', marginLeft:10}}>
          <header className={style.header_button}> 
            <div>
              <label className={style.label}>Period</label>
              <div>
                <button className={style.button_style} style={{borderTopRightRadius:0, borderBottomRightRadius:0}}>Hours</button>
                <button className={style.button_style} style={{borderRadius:0}}>Day</button>
                <button className={style.button_style} style={{borderTopLeftRadius:0, borderBottomLeftRadius:0}}>Week</button>
              </div>
            </div>
            <div>
              <label className={style.label}>Date</label>
              <div>
                <button className={style.button_style}>2022-01-06</button>
              </div>
            </div>
            <div>
              <label className={style.label}>Form of payment</label>
              <div>
                <button className={style.button_style} style={{borderTopRightRadius:0, borderBottomRightRadius:0}}>Spot Price</button>
                <button className={style.button_style} style={{borderTopLeftRadius:0, borderBottomLeftRadius:0}}>Installment Price</button>
              </div>
            </div>
            <div>
              <label className={style.label}>Marcketplaces</label>
              <div>
                <button className={style.button_style}>All Marcketplaces</button>
              </div>
            </div>
          </header>
          <main>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}><ChartPrice /></div>
              <div className={style.charts}><ChartPrice /></div>
            </section>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}><ChartTemperature /></div>
              <div className={style.charts}><ChartTemperature /></div>
            </section>
            {/* charts  */}
            <section className="d-flex">
              <div className={style.charts}><ChartPresence /></div>
              <div className={style.charts}><ChartPresence /></div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}