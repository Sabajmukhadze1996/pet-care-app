import "../scss/featurespage.css"
import { Footer } from "./Footer"
//dogs
import affenpinscher_img from "../homepage-dog-images/affenpinscher.png" 
import afghan_hound_img from "../homepage-dog-images/afghan-hound.png" 
import airedale_terrier_img from "../homepage-dog-images/airedale-terrier.png" 
import akbash_img from "../homepage-dog-images/akbash.png" 
import akita_img from "../homepage-dog-images/akita.png" 
import alaskan_klee_kai_img from "../homepage-dog-images/Alaskan-Klee-Kai.png" 
import alaskan_malamute_img from "../homepage-dog-images/alaskan-malamute.png" 

//cats
import abyssinian_img from "../homepage-cat-images/abyssinian.png" 
import american_bobtail_img from "../homepage-cat-images/american-bobtail.png" 
import american_curl_img from "../homepage-cat-images/american-curl.png" 
import american_shorthair__img from "../homepage-cat-images/american-shorthair.png" 
import american_wirehair_img from "../homepage-cat-images/american-wirehair.png" 
import balinese_img from "../homepage-cat-images/balinese.png" 
import bengal_img from "../homepage-cat-images/bengal.png" 
import { Navbar } from "./Navbar"






export const FeaturesPage = () => {
  return (
<>
<Navbar />
  <div className="features pt-4">
    <h1>Features &#128054;</h1>

<div className="card mb-3 features-card mt-2">
  <img src={affenpinscher_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Affenpinscher</h5>
    <p className="card-text">
    The Affenpinscher is square-proportioned, compact and sturdy, with medium bone. This breed is a smaller version of a working terrier, and as such is not a delicate dog. This is an active, tough dog that is agile enough to catch and dispatch rodents. The gait is light, sound, and confident. The Affenpinscher has a monkey-like facial expression with long eyebrows and beard, which lends an air of comic seriousness. 
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO DOGS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={afghan_hound_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Afghan Hound</h5>
    <p className="card-text">
    The Afghan is built along greyhound-like lines, enabling this dog to execute a double-suspension gallop and run down fleet game. The comparatively short back and steep pelvis helped the Afghan to leap great heights and to turn almost in place, essential attributes for coursing in rocky mountainous terrain. The large feet provided better foothold and were more resistant to injury on rough ground. The silky coat protected the dog from cold nights at high altitudes. The Afghan appears dignified and aloof, with an exotic expression and proud carriage. 
    </p>
    <ul>
        <li>ENERGY LEVEL - 40%</li>
        <li>PLAYFULLNESS - 60%</li>
        <li>FRIENDLINESS TO DOGS - 45%</li>
        <li>FRIENDLINESS TO STRANGERS - 75%</li>
        <li>EASE OF TRAINING - 35%</li>
        <li>HEAT SENSITIVITY - 43%</li>       
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={airedale_terrier_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Airedale Terrier</h5>
    <p className="card-text">
    The Airedale Terrier is a neat, upstanding, long-legged terrier, not exaggerated in any way. This breed has strong round bone and combines strength and agility. The Airedale has strong jaws and a free gait. The coat is hard, dense, and wiry; it lies straight and close, with some hair crinkling or waving.
    </p>
    <ul>
        <li>ENERGY LEVEL - 76%</li>
        <li>PLAYFULNESS - 58%</li>
        <li>FRIENDLINESS TO DOGS - 90%</li>
        <li>FRIENDLINESS TO STRANGERS - 88%</li>
        <li>EASE OF TRAINING - 67%</li>
        <li>HEAT SENSITIVITY - 47%</li>     
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={akbash_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Akbash</h5>
    <p className="card-text">
    A unique combination of Mastiff and gazehound features, the Akbash Dog’s characteristics enable him to perform as a livestock guardian. This all-white, lean, leggy, muscular dog has an alert, regal appearance conveying power, strength and courage with the speed and agility necessary to challenge and chase predators. His wedge-shaped head is adorned with pendant ears and long tail is curled over his back when moving or excited. Like other gazehounds, the Akbash Dog is characterized by his long legs,
    </p>
    <ul>
        <li>ENERGY LEVEL - 67%</li>
        <li>PLAYFULNESS - 87%</li>
        <li>FRIENDLINESS TO DOGS - 45%</li>
        <li>FRIENDLINESS TO STRANGERS - 64%</li>
        <li>EASE OF TRAINING - 88%</li>
        <li>HEAT SENSITIVITY - 76%</li>      
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={akita_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Akita</h5>
    <p className="card-text">
    This is a large and powerful breed, with much substance and heavy bone, and is slightly longer than tall. The Akita’s build reflects its original job of finding big game in deep snow and rugged terrain. This breed’s double coat consists of a dense undercoat and straight, rough, outer coat standing off from the body, about 2 inches or less in length. Such a combination provides ample insulation from water and weather.
    </p>
    <ul>
        <li>ENERGY LEVEL - 20%</li>
        <li>PLAYFULNESS - 54%</li>
        <li>FRIENDLINESS TO DOGS - 68%</li>
        <li>FRIENDLINESS TO STRANGERS - 56%</li>
        <li>EASE OF TRAINING - 72%</li>
        <li>HEAT SENSITIVITY - 28%</li>    
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={alaskan_klee_kai_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Alaskan Kai</h5>
    <p className="card-text">
    With his wedge-shaped head, striking facial mask, prick ears and full tail that curls over the back, the Alaskan Klee Kai is a true reflection of his Northern roots, his spitz-type resemblance a smaller version of the well-known Alaskan Husky.
    </p>
    <ul>
        <li>ENERGY LEVEL - 45%</li>
        <li>PLAYFULNESS - 26%</li>
        <li>FRIENDLINESS TO DOGS - 77%</li>
        <li>FRIENDLINESS TO STRANGERS - 82%</li>
        <li>EASE OF TRAINING - 72%</li>
        <li>HEAT SENSITIVITY - 59%</li>    
    </ul>
  </div>
</div>

<div className="card mb-3 features-card">
  <img src={alaskan_malamute_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Alaskan Malamute</h5>
    <p className="card-text">
    The Alaskan Malamute is a powerfully built dog of Nordic breed type, developed to haul heavy loads rather than race. This breed is slightly longer than tall, and is heavy boned and compact, designed for strength and endurance. The Malamute’s gait is steady, balanced, and tireless. The coat is thick and double, with a coarse outer coat and dense, wooly, oily undercoat, 
    </p>
    <ul>
        <li>ENERGY LEVEL - 55%</li>
        <li>PLAYFULNESS - 68%</li>
        <li>FRIENDLINESS TO DOGS - 72%</li>
        <li>FRIENDLINESS TO STRANGERS - 46%</li>
        <li>EASE OF TRAINING - 63%</li>
        <li>HEAT SENSITIVITY - 71%</li>     
    </ul>
  </div>
</div>








<div className="card mb-3 features-card mt-2">
  <img src={abyssinian_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Abyssinian</h5>
    <p className="card-text">
    The Abyssinian is often a colorful cat with a distinctly ticked coat, medium in size and regal in appearance; lithe, hard and muscular, showing eager activity and lively interest in their surroundings. They are often well balanced temperamentally and physically.
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>HEAT SENSITIVITY - 42%</li>
        <li>EASE OF TRAINING - 71%</li>
    </ul>
  </div>
</div>

<div className="card mb-3 features-card mt-2">
  <img src={american_bobtail_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">American Bobtail</h5>
    <p className="card-text">
    The American Bobtail is generally medium to large cat, with a naturally occurring bobbed tail. The American Bobtail is athletic and usually well-muscled with a sometimes powerful look. They possess a natural hunting gaze that combined with their body type, give American Bobtail a distinctive wild appearance.
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> <div className="card mb-3 features-card mt-2">
  <img src={american_curl_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">American Curl</h5>
    <p className="card-text">
    The distinctive feature of the American Curl is their attractive, uniquely curled-back ears. Elegant, well balanced, moderately muscled, slender rather than massive in build.  They often appear well proportioned and balanced and can vary in size. 
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> <div className="card mb-3 features-card mt-2">
  <img src={american_shorthair__img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">American Shorthair</h5>
    <p className="card-text">
    The American Shorthair is a true breed of working cat. The general effect is that of a strongly built, well balanced, symmetrical cat with conformation indicating power, endurance, and agility.
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> <div className="card mb-3 features-card mt-2">
  <img src={american_wirehair_img } className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">American Wirehair</h5>
    <p className="card-text">
    The American Wirehair cat resulted as a spontaneous mutation. Their coat, which is not only springy, dense, and resilient, but also coarse and hard to the touch, distinguishes the American Wirehair from all other breeds.
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> <div className="card mb-3 features-card mt-2">
  <img src={balinese_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Balinese</h5>
    <p className="card-text">
    The Balinese is often a svelte cat with long tapering lines, very lithe but strong and muscular. The Balinese is unique with their distinct range of colors and silky coat that hides a supple and athletic body.
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> <div className="card mb-3 features-card mt-2">
  <img src={bengal_img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Bengal</h5>
    <p className="card-text">
    The Bengal is a domestic cat that has physical features distinctive to the small forest-dwelling wildcats, and with the loving, dependable temperament of a family pet. As such, some characteristics in the appearance of the Bengal are distinct from those found in other domestic cat breeds. 
    </p>
    <ul>
        <li>ENERGY LEVEL - 62%</li>
        <li>PLAYFULNESS - 56%</li>
        <li>FRIENDLINESS TO CATS - 67%</li>
        <li>FRIENDLINESS TO STRANGERS - 85%</li>
        <li>EASE OF TRAINING - 71%</li>
        <li>HEAT SENSITIVITY - 42%</li>
    </ul>
  </div>
</div> 

  </div>
  <Footer />
</>
  )
}


