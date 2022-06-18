import { useNavigate } from "react-router-dom"
import "../scss/homecardsextrainfo.css"
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
import { Navbar } from "./Navbar"



export const HomeCardsExtraInfo1 = () => {
  const navigate = useNavigate()
  return (
<>   
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Affenpinscher</h1>
      <img src={affenpinscher_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
The breed predates and is ancestral to the Griffon Bruxellois (Brussels Griffon) and Miniature Schnauzer.
Dogs of the Affenpinscher type have been known since about 1600, but these were somewhat larger, about 30 to 33 centimetres (12 to 13 in), and came in colors of gray, fawn, black, tan, and red. White feet and chests were also common. The breed was created to be a ratter, working to remove rodents from kitchens, granaries, and stables.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>  
  )
}


export const HomeCardsExtraInfo2 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Afghan Hound</h1>
      <img src={afghan_hound_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The Afghan Hound is a hound that is distinguished by its thick, fine, silky coat 
      and its tail with a ring curl at the end. The breed is selectively bred for its unique features in the cold mountains of Afghanistan. Its local name is Tāžī Spay
      Other names for this breed are Tāzī, Balkh Hound, Baluchi Hound, Barakzai Hound, Shalgar Hound, Kabul Hound, Galanday Hound or sometimes incorrectly African Hound. They have the ability to run and turn well.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo3 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Airedale Terrier</h1>
      <img src={airedale_terrier_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      the Otterhound and probably some other Terrier breeds, and has contributed to other dog 
      breeds, such as the Yorkshire Terrier. Originally bred to serve as a versatile hunting 
      and all around working farm dog, this breed has also been used as a war dog, guide dog, 
      and police dog in Britain. In the United States, the breed has been used to hunt big game, 
      upland birds, and water fowl, and serve in many other working capacities.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo4 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Akbash</h1>
      <img src={akbash_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The Akbash is a traditional breed of livestock guardian dog, used to protect flocks 
      from predators in the rugged terrain of western Anatolia. It is distributed 
      mainly in the provinces of Afyon, Ankara, Eskişehir and Manisa; some are present in the 
      provinces of Agri, Konya, Sivas and Tunceli.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo5 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Akita</h1>
      <img src={akita_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      Debate exists among fanciers whether these are two separate breeds of Akitas. As of 2020, 
      the American Kennel Club, now considers American and Japanese Akitas to be two separate 
      breeds, no longer allowing free breeding between the two. The United Kennel Club, the 
      Federation Cynologique Internationale, The Kennel Club, the Australian National Kennel Council,
       the New Zealand Kennel Club, and the Japan Kennel Club.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo6 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Alaskan Kai</h1>
      <img src={alaskan_klee_kai_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
        The name Kai comes from the Athabaskan words meaning “little dog”.
         The breed was originally developed in Alaska by Linda Spurlin in the 1970s.
          The breed was created using the Alaskan Husky, a small amount of Siberian Husky, a 
          slightly larger amount of American Eskimo Dog, and some Schipperkes. Spurlin’s 
          “hardcore approach” to breeding might be considered harsh to some, as she “used 
          the best and culled the rest” in order to create the breed.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo7 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Alaskan Malamute</h1>
      <img src={alaskan_malamute_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      Although it is believed that the first dogs arrived in the Americas 12,000 years ago, people
       and their dogs did not settle in the Arctic until the Paleo-Eskimo people 4,500 years
        ago, followed by the Thule people 1,000 years ago, with both originating from Siberia. 
        Malamutes were thought to be bred by the Malimiut Inupiaq people of Alaska's Norton Sound 
        region.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo8 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Bulldog</h1>
      <img src={american_bulldog_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The Old English Bulldog was preserved by working class immigrants who brought their working 
      dogs with them to the American South; these dogs are believed to have first appeared as 
      early as the 17th century. Small farmers and ranchers used this all-around working dog
       for many tasks including farm guardians, stock dogs and catch dogs. 
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


export const HomeCardsExtraInfo9 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Bully</h1>
      <img src={american_bully_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The American Bully, as it is now known, began development in the 1980s with the majority 
      of the final behavioral and aesthetic product being completed in the 1990s. There is 
      consensus that at least five other breeds were used to attain the more "bully" physical 
      traits desired as well as the more diminutive size of some lines.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 

export const HomeCardsExtraInfo10 = () => {
  const navigate = useNavigate()
  return (
<>
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Belgian Shepherd</h1>
      <img src={Belgian_Shepherd_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The breed descends from a common type of shepherd dog found throughout Western Europe 
      that includes such modern breeds as the Bouvier des Ardennes, Dutch Shepherd and 
      German Shepherd. A common sight in the service of Belgian shepherds for centuries, 
      it was not until the end of the 19th century that a breed club was formed and attempts 
      were made to standardise the breed.             
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
</>
  )
} 


















export const HomeCardsExtraInfo11 = () => {
  const navigate = useNavigate()
  return (
 <>   
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Abyssinian</h1>
      <img src={abyssinian_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The breed's distinctive appearance, seeming long, lean, and finely colored compared to 
      other cats, has been analogized to that of human fashion models. Personality-wise, the 
      cats traditionally display active, curious attitudes in which they frequently follow 
      owners around and encourage play.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>
  )
} 


export const HomeCardsExtraInfo12 = () => {
  const navigate = useNavigate()
  return (
 <>
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Bobtail</h1>
      <img src={american_bobtail_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      Urban legend says that Bobtails are the result of a cross breeding between a domestic tabby 
      cat and a wild bobcat. The unusual tail is actually the result of a random spontaneous
       genetic mutation within the domestic cat population, and may be related to the Manx gene, 
       which is also dominant Yodie, a short-tailed brown tabby male, was mated with a 
       seal-point Siamese female to create the American Bobtail's original bloodline.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>   
  )
} 


export const HomeCardsExtraInfo13 = () => {
  const navigate = useNavigate()
  return (
 <> 
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Curl</h1>
      <img src={american_curl_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The first American Curls appeared as strays on the door step of the Rugas in Lakewood, 
      California in June 1981. The black female, named Shulamith, gave birth to a litter of 
      cats with the same curled ears, and so became the ancestor of all American Curls today. 
      In 1986, an American Curl was exhibited at a cat show for the first time, and in 1992,
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>   
  )
} 


export const HomeCardsExtraInfo14 = () => {
  const navigate = useNavigate()
  return (
 <>  
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Shorthair</h1>
      <img src={american_shorthair__img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      When settlers sailed from Europe to North America, they carried cats on board 
      (ships' cats) to protect the stores from mice —for instance, the cats that came 
      over on the Mayflower with the Pilgrims to hunt rats on the ship and in the colony. 
      Many of these cats landed in the New World, interbred, and developed special characteristics
       to help them cope with their new life and climate.         
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>   
  )
} 


export const HomeCardsExtraInfo15 = () => {
  const navigate = useNavigate()
  return (
 <>
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>American Wirehair</h1>
      <img src={american_wirehair_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The American Wirehair is a spontaneous mutation of the American Shorthair.
       It first occurred as a random mutation among a litter of five born to a pair of
        barn cats in 1966 in Vernon, in upstate New York. This single red-and-white male
         had wiry fur. The owner of the cats called a local breeder of Rex cats, Mrs.
          Joan O'Shea, to a look at the kitten.          
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>
  )
} 


export const HomeCardsExtraInfo16 = () => {
  const navigate = useNavigate()
  return (
 <>
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Balinese</h1>
      <img src={balinese_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      As is the case with their short-haired counterparts, a genetic distinction is made 
      between traditional or "old-style" and modern body types. In the American standard, 
      color variants derived from the Colorpoint Shorthair are further considered a separate
       breed, known as the Javanese. 
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>    
  )
} 


export const HomeCardsExtraInfo17 = () => {
  const navigate = useNavigate()
  return (
 <> 
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Bengal</h1>
      <img src={bengal_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      Bengals have a wild appearance; their golden shimmer comes from their leopard cat 
      ancestry, and their coats may show spots, rosettes, arrowhead markings, or marbling.
      They are an energetic breed which needs much exercise and play.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>    
  )
} 


export const HomeCardsExtraInfo18 = () => {
  const navigate = useNavigate()
  return (
<>  
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Birman</h1>
      <img src={birman_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The breed name is derived from Birmanie, the French form of Burma. 
      The Birman breed was first recognized in France by the Cat Club de France 
      in 1925, then in England by the Governing Council of the Cat Fancy in 
      1966 and in United States by the Cat Fanciers' Association in 1967. 
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>    
  )
} 


export const HomeCardsExtraInfo19 = () => {
  const navigate = useNavigate()
  return (
 <>
 <Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Bombay</h1>
      <img src={bombay_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      The breed was developed by Nikki Horner, a breeder from Louisville, Kentucky, who, 
      starting in 1958, attempted to create a breed of cat that resembled a miniature 
      black panther. The first attempt was a failure, but the second, in 1965, was successful.
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>    
  )
} 


export const HomeCardsExtraInfo20 = () => {
  const navigate = useNavigate()
  return (
<>  
<Navbar />
    <div id="extrainfo" style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "absolute", width: "100%"}}>
      <h1 style={{fontSize: "2.5rem", color: "#28678b", borderBottom: "1px solid #28678b", paddingBottom: "8px", textShadow: "0px 6px 5px lightgray", cursor: "pointer"}}>Burmese</h1>
      <img src={burmese_img} style={{width: "500px", maxWidth: "100%", marginTop: "7px", borderRadius: "9px", boxShadow: "0px 6px 5px lightgray"}}/>
<div style={{width: "900px", maxWidth: "100%"}}>
      <p style={{marginTop: "10px", color: "#28678b", fontWeight: "700"}}>
      Most modern Burmese are descendants of one female cat called Wong Mau, which was brought 
      from Burma to America in 1930 and bred with American Siamese. From there, American and 
      British breeders developed distinctly different Burmese breed standards, which is unusual 
      among pedigreed domestic cats.         
      </p>
</div>
<div>
  <button onClick={() => navigate("/homepage")} className="btn btn-primary px-5 py-2 mt-3" style={{boxShadow: "0px 4px 5px #acacac"}}>
    Go back to homepage...
  </button>
  <hr />
</div>
    </div>
    </>    
  )
} 

