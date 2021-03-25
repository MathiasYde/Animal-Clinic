import NavBar from "../components/navbar"

import CloseUpCatImage from "../images/closeup-cat.png"

export default function LandingPage() {
  return (
    <div className="flex flex-col flex-1">
      <NavBar></NavBar>
      <section className="relative h-96">

        <div className="absolute w-full h-full bg-white sm:w-1/2 opacity-20"></div>
        <div className="absolute flex flex-col justify-between w-full h-full p-4 sm:w-1/2">
          <div className="text-md">
            <p className="text-xl font-bold tracking-wide">Brug for hjælp?</p>
            <span>Hos Roskilde dyreklinik kan vi hjælpe dig og dit kæledyr</span>
            <span>med mange behandlinger for rimelige priser.</span>
          </div>

          <a className="self-end text-xl font-bold" href="book-appointment">
            Book aftale
          </a>
        </div>
       
       <img className="object-cover w-full h-full" src={CloseUpCatImage} alt=""/>
      </section>
    </div>
  );
}
