import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './pages/RegistrationPage';
import { HomeCardsExtraInfo1 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo2 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo3 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo4 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo5 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo6 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo7 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo8 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo9 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo10 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo11 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo12 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo13 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo14 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo15 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo16 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo17 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo18 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo19 } from './pages/HomeCardsExtraInfo';
import { HomeCardsExtraInfo20 } from './pages/HomeCardsExtraInfo';
import { HomePageCards } from './pages/HomePageCards';
import { DogCarePage } from './pages/DogCarePage';
import { CatCarePage } from './pages/CatCarePage';
import { FeaturesPage } from './pages/FeaturesPage';


const App: React.FC  = () => {
  return (
<BrowserRouter>
  <div className="App">
      <main id="main">
        <Routes>
          <Route path="/*" element={<RegistrationPage />} />
          <Route path="/homepage" element={<HomePageCards />}/>
          <Route path="/homepage/affenpinscher" element={<HomeCardsExtraInfo1 />}/>
          <Route path="/homepage/afghanhound" element={<HomeCardsExtraInfo2 />}/>
          <Route path="/homepage/airedaleterrier" element={<HomeCardsExtraInfo3 />}/>
          <Route path="/homepage/akbash" element={<HomeCardsExtraInfo4 />}/>
          <Route path="/homepage/akita" element={<HomeCardsExtraInfo5 />}/>
          <Route path="/homepage/alaskankai" element={<HomeCardsExtraInfo6 />}/>
          <Route path="/homepage/alaskanmalamute" element={<HomeCardsExtraInfo7 />}/>
          <Route path="/homepage/americanbulldog" element={<HomeCardsExtraInfo8 />}/>
          <Route path="/homepage/americanbully" element={<HomeCardsExtraInfo9 />}/>
          <Route path="/homepage/belgianshepherd" element={<HomeCardsExtraInfo10 />}/>
          <Route path="/homepage/abyssinian" element={<HomeCardsExtraInfo11 />}/>
          <Route path="/homepage/americanbobtail" element={<HomeCardsExtraInfo12 />}/>
          <Route path="/homepage/americancurl" element={<HomeCardsExtraInfo13 />}/>
          <Route path="/homepage/americanshorthair" element={<HomeCardsExtraInfo14 />}/>
          <Route path="/homepage/americanwirehair" element={<HomeCardsExtraInfo15 />}/>
          <Route path="/homepage/balinese" element={<HomeCardsExtraInfo16 />}/>
          <Route path="/homepage/bengal" element={<HomeCardsExtraInfo17 />}/>
          <Route path="/homepage/birman" element={<HomeCardsExtraInfo18 />}/>
          <Route path="/homepage/bombay" element={<HomeCardsExtraInfo19 />}/>
          <Route path="/homepage/burmese" element={<HomeCardsExtraInfo20 />}/>
          
          <Route path="/dogcare" element={<DogCarePage />}/>
          <Route path="/catcare" element={<CatCarePage />}/>
          <Route path="/features" element={<FeaturesPage />}/>
          <Route path="*" element={<HomePageCards />}/>
        </Routes>
      </main>
  </div>
</BrowserRouter>
  );
}

export default App;



