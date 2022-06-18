import "../scss/homecards.css"
//dog images
import affenpinscher_img from "../homepage-dog-images/affenpinscher.png" 
import afghan_hound_img from "../homepage-dog-images/afghan-hound.png" 
import airedale_terrier_img from "../homepage-dog-images/airedale-terrier.png" 
import akbash_img from "../homepage-dog-images/akbash.png" 
import akita_img from "../homepage-dog-images/akita.png" 
import alaskan_klee_kai_img from "../homepage-dog-images/Alaskan-Klee-Kai.png" 
import alaskan_malamute_img from "../homepage-dog-images/alaskan-malamute.png" 
import american_bulldog_img from "../homepage-dog-images/American-bulldog.png" 
import american_bully_img from "../homepage-dog-images/American-Bully.png" 
import Belgian_Shepherd_img from "../homepage-dog-images/Belgian-Shepherd.png"

//cat images
import abyssinian_img from "../homepage-cat-images/abyssinian.png" 
import american_bobtail_img from "../homepage-cat-images/american-bobtail.png" 
import american_curl_img from "../homepage-cat-images/american-curl.png" 
import american_shorthair__img from "../homepage-cat-images/american-shorthair.png" 
import american_wirehair_img from "../homepage-cat-images/american-wirehair.png" 
import balinese_img from "../homepage-cat-images/balinese.png" 
import bengal_img from "../homepage-cat-images/bengal.png" 
import birman_img from "../homepage-cat-images/birman.png" 
import bombay_img from "../homepage-cat-images/bombay.png" 
import burmese_img from "../homepage-cat-images/burmese.png" 
import { useNavigate } from "react-router-dom"
import { HomeHero } from "./HomeHero"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"


export const HomePageCards = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <HomeHero />
    <h1 className="text-center display-4 fw-bold pt-3 dogs-title" 
    style={{borderBottom: "0.1px solid black", paddingBottom: "20px", borderColor: "#28678b"}}>
      Dogs... &#128054;
    </h1>
      
      <div className="row row-cols-1 row-cols-sm-2 g-4 homecards">
  <div className="col">
    <div className="card">
      <img src={affenpinscher_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Affenpinscher</h5>
        <p className="card-text">
             The breed is German in origin and dates back to the seventeenth century. 
             The name is derived from the German Affe (ape, monkey)...
        </p>
      <button onClick={() => navigate("/homepage/affenpinscher")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={afghan_hound_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Afghan Hound</h5>
        <p className="card-text">
        The Afghan Hound is a hound that is distinguished by its thick, fine, silky coat and its 
        tail with a ring curl at the end Afghan hound...
        </p>
        <button onClick={() => navigate("/homepage/afghanhound")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={airedale_terrier_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Airedale Terrier</h5>
        <p className="card-text">
        The Airedale Terrier (often shortened to "Airedale"), 
        also called Bingley Terrier and Waterside 
        Terrier is a dog breed of the terrier type that originated...
        </p>
        <button onClick={() => navigate("/homepage/airedaleterrier")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={akbash_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Akbash</h5>
        <p className="card-text">
        The Akbash, Turkish: Akbash, is a traditional Turkish breed 
        or type of flock guardian dog from western Anatolia. The word 'Akbash' means...
        </p>
        <button onClick={() => navigate("/homepage/akbash")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={akita_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Akita</h5>
        <p className="card-text">
           The Akita  is a historic dog breed of large size originating from 
           the mountains of northern Japan. The two separate varieties of Akita...
        </p>
        <button onClick={() => navigate("/homepage/akita")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={alaskan_klee_kai_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Alaskan Kai</h5>
        <p className="card-text">
        The Alaskan Kai is a spitz-type breed of dog, developed in the 
        late 20th century as a companion-sized dog resembling the larger...
        </p>
        <button onClick={() => navigate("/homepage/alaskankai")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={alaskan_malamute_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Alaskan Malamute</h5>
        <p className="card-text">
          The Alaskan Malamute is a large breed of dog that was originally bred for their 
          strength and endurance to haul heavy freight as a sled dog and hound...
        </p>
        <button onClick={() => navigate("/homepage/alaskanmalamute")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_bulldog_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Bulldog</h5>
         <p className="card-text">
           The American Bulldog is a large, muscular breed of working dog that were used as stock 
           dogs, catch dogs, and guardians on farms and ranches...
         </p>
        <button onClick={() => navigate("/homepage/americanbulldog")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_bully_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Bully</h5>
        <p className="card-text">
           The American Bully is a modern breed of dog that was developed as a companion dog, 
           and originally standardized and recognized as a breed in...
        </p>
        <button onClick={() => navigate("/homepage/americanbully")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Belgian_Shepherd_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Belgian Shepherd</h5>
        <p className="card-text">
          The Belgian Shepherd (also known as the Belgian Sheepdog or the Chien de Berger Belge) 
          is a breed of medium-sized herding dog from Belgium...   
        </p>
        <button onClick={() => navigate("/homepage/belgianshepherd")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
</div>


 <h1 className="text-center display-4 fw-bold pt-1 pb-3 cats-title"
 style={{borderBottom: "0.1px solid black", paddingBottom: "20px", borderColor: "#28678b"}}>
  Cats... &#128049;
 </h1>


<div className="row row-cols-1 row-cols-sm-2 g-4 pt-3">
  <div className="col">
    <div className="card">
      <img src={abyssinian_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Abyssinian</h5>
        <p className="card-text">
          The Abyssinian is a breed of domestic short-haired cat with a distinctive "ticked" 
          tabby coat, in which individual hairs are banded with different colors...
        </p>
        <button onClick={() => navigate("/homepage/abyssinian")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_bobtail_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Bobtail</h5>
        <p className="card-text">
          The American Bobtail is an uncommon breed of domestic cat which was developed 
          in the late 1960s. It is most notable for its stubby...
        </p>
        <button onClick={() => navigate("/homepage/americanbobtail")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_curl_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Curl</h5>
        <p className="card-text">
          The American Curl is a breed of cat characterized by its unusual ears, 
          which curl back from the face toward the center of the back of the skull...
        </p>
        <button onClick={() => navigate("/homepage/americancurl")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_shorthair__img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Shorthair</h5>
        <p className="card-text">
         The American Shorthair (ASH) is a breed of domestic cat believed to be descended from European cats brought to North America by early 
          settlers to protect valuable...
        </p>
        <button onClick={() => navigate("/homepage/americanshorthair")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={american_wirehair_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>American Wirehair</h5>
        <p className="card-text">
           The American Wirehair is a breed of domestic cat originating in upstate New York. 
           As of 2017, though the breed is well-known...
         </p>
        <button onClick={() => navigate("/homepage/americanwirehair")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={balinese_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Balinese</h5>
        <p className="card-text">
          The Balinese is a long-haired breed of domestic cat with Siamese-style 
          point coloration and sapphire-blue eyes The Balinese is also known as...
        </p>
        <button onClick={() => navigate("/homepage/balinese")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bengal_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Bengal</h5>
        <p className="card-text">
          The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, 
          especially the spotted Egyptian Mau, with the Asian leopard cat...
        </p>
        <button onClick={() => navigate("/homepage/bengal")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={birman_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Birman</h5>
        <p className="card-text">
         The Birman, also called the "Sacred Cat of Burma", is a domestic cat breed. 
         The Birman is a long-haired, colour-pointed cat distinguished by...
        </p>
        <button onClick={() => navigate("/homepage/birman")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={bombay_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px", borderColor: "#28678b"}}>Bombay</h5>
        <p className="card-text">
          The Bombay cat is a type of short-haired cat developed by breeding sable Burmese 
          and black American Shorthair cats, to produce...
        </p>
        <button onClick={() => navigate("/homepage/bombay")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={burmese_img} style={{boxShadow: "0px 4px 5px #acacac"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{borderBottom: "1px solid black", paddingBottom: "6px" ,borderColor: "#28678b"}}>Burmese</h5>
        <p className="card-text">
          The Burmese cat s a breed of domestic cat, originating in Burma, believed to 
          have its roots near the Thai-Burma border...
        </p>
        <button onClick={() => navigate("/homepage/burmese")} style={{boxShadow: "0px 4px 5px #acacac"}} className="btn btn-primary">See more...</button>
      </div>
    </div>
  </div>
</div>
  <Footer />
    </>
  )
}

