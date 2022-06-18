import {useState, useEffect} from "react";
import "../scss/catcare.css"
import ownerwithCatImg from "../cat-care-page-images/ownerwithcat.png"
import { Footer } from "./Footer"
import nutrition1 from "../cat-care-page-images/nutrition1.png"
import nutrition2 from "../cat-care-page-images/nutrition2.png"
import nutrition3 from "../cat-care-page-images/nutrition3.png"
import nutrition4 from "../cat-care-page-images/nutrition4.png"

import { AcanaIndoorEntree } from "../cat-care-page-details/AcanaIndoorEntree";
import { HillsSciencDiet } from "../cat-care-page-details/HillsSciencDiet";
import { IamsProactiveHealth } from "../cat-care-page-details/IamsProactiveHealth";
import { RoyalCaninMother } from "../cat-care-page-details/RoyalCaninMother";
import { Navbar } from "./Navbar";

export const CatCarePage = () => {
    
    const [showDetail1, setShowDetail1] = useState<boolean>(false)
    const [showDetail2, setShowDetail2] = useState<boolean>(false)
    const [showDetail3, setShowDetail3] = useState<boolean>(false)
    const [showDetail4, setShowDetail4] = useState<boolean>(false)

    const [buttonText1, setButtonText1] = useState<string>("See more details...")
    const [buttonText2, setButtonText2] = useState<string>("See more details...")
    const [buttonText3, setButtonText3] = useState<string>("See more details...")
    const [buttonText4, setButtonText4] = useState<string>("See more details...")

    const [buttonColor1, setButtonColor1] = useState<string>("#1877F2")
    const [buttonColor2, setButtonColor2] = useState<string>("#1877F2")
    const [buttonColor3, setButtonColor3] = useState<string>("#1877F2")
    const [buttonColor4, setButtonColor4] = useState<string>("#1877F2")

    useEffect(() => {
        if (showDetail1) {
            setButtonText1("Close...")
            setButtonColor1("#011F5B")
        } else {
            setButtonText1("See more details...")
            setButtonColor1("#1877F2")
        }  if (showDetail2) {
            setButtonText2("Close...")
            setButtonColor2("#011F5B")
        } else {
            setButtonText2("See more details...")
            setButtonColor2("#1877F2")
        } if (showDetail3) {
            setButtonText3("Close...")
            setButtonColor3("#011F5B")
        } else {
            setButtonText3("See more details...")
            setButtonColor3("#1877F2")
        } if (showDetail4) {
            setButtonText4("Close...")
            setButtonColor4("#011F5B")
        } else {
            setButtonText4("See more details...")
            setButtonColor4("#1877F2")
        }

    }, [showDetail1, showDetail2, showDetail3, showDetail4])


  return (
<>
<Navbar />
 <div className="dog-care-page w-100 pt-4">
   <div className="img-div">
      <h1>Cat Care &#128049;</h1>
        <div className="doc-care-paragraph">
          <p>
          Being a responsible cat owner is about providing your cat with 
          everything they need to live a happy and healthy life. Here are
           some tips on what to do to ensure you are a faultless 
           feline friend.
         </p>
        </div>
      <img src={ownerwithCatImg} alt="..." className="dog-with-owner-img mt-1" />
   </div>
   <div className="dog-care-basics mt-3 px-2 pt-1">
      <p>GIVING UP YOUR CAT FOR ADOPTION</p>
   </div>
   <div id="cat-info">
      <p>
      At Battersea, we know that life doesn’t always go to plan. Sometimes, being a loving pet owner means making tough decisions, and deciding to rehome your cat can be one of the toughest.
      No matter your circumstances, we will listen without judgement, and do what we can to make things as simple as possible. We’ve been finding loving new homes for beloved pets for 160 years and our staff are dedicated to caring for every cat. We will help them to settle in, get to know their individual quirks, and do everything we can to find the best possible home for them.
      </p>
   </div>
   <div className="nutrition-div">
       <p className="nutrition-title">Cat Nutrition</p>
   </div>



   <div className="row row-cols-1 row-cols-sm-2 g-4">
    <div className="col">
      <div className="card">
        <img src={nutrition1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Royal Canin</h5>
          <p className="card-text">This cat food from Royal Canin is specifically designed for newborn kittens and pregnant or nursing cats. The easy-to-chew kibble...</p>
        </div>
        <button onClick={() => setShowDetail1(!showDetail1)} className="btn btn-primary" style={{backgroundColor: buttonColor1}}>{buttonText1}</button>
        {showDetail1 ? <RoyalCaninMother /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Purina Pro Plan</h5>
          <p className="card-text">Does your cat have a sensitive stomach, or skin that's prone to irritation? Iams Proactive Health is a great choice that helps maintain strong muscles...</p>
        </div>
        <button onClick={() => setShowDetail2(!showDetail2)} className="btn btn-primary" style={{backgroundColor: buttonColor2}}>{buttonText2}</button>
      {showDetail2 ? <IamsProactiveHealth /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pedigree</h5>
          <p className="card-text">Dr. Nelson recommends Acana because this premium brand thoughtfully crafts food with farm-fresh and protein-rich ingredients to meet...</p>
        </div>
        <button onClick={() => setShowDetail3(!showDetail3)} className="btn btn-primary" style={{backgroundColor: buttonColor3}}>{buttonText3}</button>
        {showDetail3 ? <AcanaIndoorEntree /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hill's Science</h5>
          <p className="card-text">Cats are famous for getting hairballs, which can happen after they swallow too much hair while they're grooming. Over time, it builds up...</p>
        </div>
        <button onClick={() => setShowDetail4(!showDetail4)} className="btn btn-primary" style={{backgroundColor: buttonColor4}}>{buttonText4}</button>
       {showDetail4 ? <HillsSciencDiet /> : null}
      </div>
    </div>
  </div>
 <Footer />
 </div>
</>
  )
}