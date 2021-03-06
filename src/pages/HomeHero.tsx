import "../scss/homehero.css"

const arrowDownLogo = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>

export const HomeHero = () => {

  return (
  <>
    <div className="home__hero">
       <h1 className="fw-bold text-white text-center home-title">
          Find your best <br /> friend  today...
       </h1>
       <h1 className="display-1 text-white mt-1" id="arrow-logo">
         {arrowDownLogo}
       </h1>
    </div>
  </>
  )
}

