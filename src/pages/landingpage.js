import NavBar from "../components/navbar"

import CloseUpCatImage from "../images/closeup-cat.png"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <section className="h-96 relative">

        <div className="absolute w-full sm:w-1/2 h-full bg-white opacity-20"></div>
        <div className="absolute w-full sm:w-1/2 h-full p-4 flex flex-col justify-between">
          <div className="text-md">
            <p className="font-bold tracking-wide text-xl">Brug for hjælp?</p>
            <span>Hos Roskilde dyreklinik kan vi hjælpe dig og dit kæledyr</span>
            <span>med mange behandlinger for rimelige priser.</span>
          </div>

          <a className="self-end font-bold text-xl" href="book-appointment">
            Book aftale
          </a>
        </div>
       
       <img className="object-cover h-full w-full" src={CloseUpCatImage} alt=""/>
      </section>
    </div>
  );
}
