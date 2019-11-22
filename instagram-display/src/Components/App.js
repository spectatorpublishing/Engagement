import React from "react";
import Display from "./Display";
import './App.css';

var articlejson = [
{"link": "https://www.columbiaspectator.com/news/2019/11/11/university-senate-launches-childcare-affordability-initiative-to-support-student-parents/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/C6UR3YSF3BBSXBN65VW5TMUVAA.jpg"},
{"link": "https://www.columbiaspectator.com/news/2019/10/28/morningside-heights-smoke-shops-say-new-york-states-e-cigarette-bill-could-devastate-their-businesses/",	"imageurl": "//arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FMY3H6ANI5AYBM23GY5VI4QLUY.jpg"},
{"link": "https//www.columbiaspectator.com/sports/2019/10/19/football-defeats-penn-44-6-in-largest-homecoming-victory-in-programs-149-year-history/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JV3NGZQ75ZADBLVIA6PW65WIRU.jpg"},
{"link": "https://www.columbiaspectator.com/sports/2019/10/14/camacho-ferral-claims-first-place-as-columbia-women-test-younger-runners-at-metropolitan-xc-championships/", "imageurl":"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VZQE577BRJA2NEEZSDD2WBEOMM.jpg"},
{"link": "https://www.columbiaspectator.com/arts-and-entertainment/2019/10/10/more-than-a-market-columbias-greenmarket-sellers-discuss-the-cultural-impact-of-farmers-markets/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/Y5ZQFHXBEFG5NACRMFZF2MYZEE.jpg"},
{"link": "https://www.columbiaspectator.com/news/2019/10/09/former-assistant-provost-at-the-new-school-appointed-associate-dean-of-core-curriculum/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QTZKPHJUPZH2XLGIW53OK54WTE.jpg"},
{"link": "https://www.columbiaspectator.com/news/2019/10/09/former-assistant-provost-at-the-new-school-appointed-associate-dean-of-core-curriculum/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QTZKPHJUPZH2XLGIW53OK54WTE.jpg"},
{"link": "https//www.columbiaspectator.com/news/2019/10/03/qa-inaugural-vp-of-student-affairs-joseph-greenwell-shares-personal-history-talks-most-pressing-campus-issues/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KXJHQTUCTNCRZPI33JCVGOFIRA.jpg"}
];

function App() {
  return (
    <div className="App">
			<Display articles = {articlejson}/>
    </div>
  );
}

export default App;
