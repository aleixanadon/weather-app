import { CloudSunFill, LocationIcon } from "../assets/icons"

const WeatherApp = () => {
  return (
    <main className="d-flex flex-column">

      <section className="d-flex align-items-center gap-3">
        <LocationIcon />
        <div className="fs-2">Barcelona</div>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div className="fw-bold" style={{fontSize: "4em"}}>19º</div>
        <div>
          <div className="fw-semibold">Feels like 19º</div>
          <div className="">Fair</div>
        </div>
          <CloudSunFill size={64} />
      </section>
      
      <section className="container text-center">
        <div className="row">
          
        </div>
      </section>

    </main>
  )
}

export default WeatherApp