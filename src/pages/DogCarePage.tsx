import {useState, useEffect} from "react";
import "../scss/dogcarepage.css"
import dogWithOwnerImg from "../dog-care-page-images/dogwithowner.png"
import { Footer } from "./Footer"
import nutrition1 from "../dog-care-page-images/nutrition1.png"
import nutrition2 from "../dog-care-page-images/nutrition2.png"
import nutrition3 from "../dog-care-page-images/nutrition3.png"
import nutrition4 from "../dog-care-page-images/nutrition4.png"

import { HillsScienceDetail } from "../dog-care-page-details/HillsScienceDetail"
import { PedigreeDetail } from "../dog-care-page-details/PedigreeDetail"
import { PurinaProPlanDetail } from "../dog-care-page-details/PurinaProPlanDetail"
import { RoyalCaninDetail } from "../dog-care-page-details/RoyalCaninDetail"
import { Navbar } from "./Navbar";


export const DogCarePage = () => {

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
      <h1>Dog Care &#128054;</h1>
        <div className="doc-care-paragraph">
          <p>
           Being a responsible dog owner is not just about feeding your dog
           properly and taking them to the vet if they are sick or injured. 
           It’s about providing your dog with everything they need to live 
           a happy and healthy life. Here are the golden rules to providing 
           the best care for your dog.
         </p>
        </div>
      <img src={dogWithOwnerImg} alt="..." className="dog-with-owner-img mt-1" />
   </div>
   <div className="dog-care-basics mt-3 px-2 pt-1">
      <p>DOG CARE BASICS</p>
   </div>
   <ul>
     <li>Exercise regularly. Usually twice a day, in all weathers.</li>
     <li>Housetrain your dog using reward based training.</li>
     <li>Provide extra water when feeding dried food.</li>
     <li>Provide a comfy bed in a quiet, draught-free place out of direct sunlight.</li>
     <li>Groom regularly to keep coats clean and healthy (this is essential for long-haired pets).</li>
     <li>Always supervise interactions with children to ensure children do not tease or overexcite a dog.</li>
     <li>Clean up after your dog and dispose of it in a designated bin – if you don’t, you could end up with a hefty fine.</li>
   </ul>
   <div className="nutrition-div">
       <p className="nutrition-title">Dog Nutrition</p>
   </div>



   <div className="row row-cols-1 row-cols-sm-2 g-4">
    <div className="col">
      <div className="card">
        <img src={nutrition1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Royal Canin</h5>
          <p className="card-text">Royal Canin is a French manufacturer of cat and dog food. A subsidiary of Mars, Incorporated, the company also undertakes research...</p>
        </div>
        <button onClick={() => setShowDetail1(!showDetail1)} className="btn btn-primary" style={{backgroundColor: buttonColor1}}>{buttonText1}</button>
        {showDetail1 ? <RoyalCaninDetail /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Purina Pro Plan</h5>
          <p className="card-text">Nestlé Purina Petcare, or simply Purina, is an American subsidiary of Nestlé, based in St. Louis, Missouri. It produces...</p>
        </div>
        <button onClick={() => setShowDetail2(!showDetail2)} className="btn btn-primary" style={{backgroundColor: buttonColor2}}>{buttonText2}</button>
      {showDetail2 ? <PurinaProPlanDetail /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pedigree</h5>
          <p className="card-text">In the United States, The Pedigree Foundation is a philanthropic organization dedicated to helping shelter...</p>
        </div>
        <button onClick={() => setShowDetail3(!showDetail3)} className="btn btn-primary" style={{backgroundColor: buttonColor3}}>{buttonText3}</button>
        {showDetail3 ? <PedigreeDetail /> : null}
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={nutrition4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hill's Science</h5>
          <p className="card-text">Science Diet was developed in the 1960s by Mark L. Morris, Jr. PhD DVM (February 3, 1934 – January 14, 2007). Dr...</p>
        </div>
        <button onClick={() => setShowDetail4(!showDetail4)} className="btn btn-primary" style={{backgroundColor: buttonColor4}}>{buttonText4}</button>
       {showDetail4 ? <HillsScienceDetail /> : null}
      </div>
    </div>
  </div>
 <Footer />
 </div>
</>
  )
}
