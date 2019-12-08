import React, { Component } from "react";
import Display from "./Display";
import './App.css';
import Tabletop from 'tabletop';
import styled from 'styled-components';



// const sheet_id = '1hUaNrgCxDC5N1hQ528fp-yuxSBCztLU4X6ZR6a1HEbk';

// const API_KEY = '';
// const CLIENT_ID = '1024054171811-m9856es33vp4ogcsl81tnh4v0khar2oe.apps.googleusercontent.com';
// var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
// var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var articlejson = [
{"link": "https://www.columbiaspectator.com/news/2019/11/11/university-senate-launches-childcare-affordability-initiative-to-support-student-parents/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/C6UR3YSF3BBSXBN65VW5TMUVAA.jpg"},
{"link": "https://www.columbiaspectator.com/news/2019/10/28/morningside-heights-smoke-shops-say-new-york-states-e-cigarette-bill-could-devastate-their-businesses/",	"imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FMY3H6ANI5AYBM23GY5VI4QLUY.jpg"},
{"link": "https//www.columbiaspectator.com/sports/2019/10/19/football-defeats-penn-44-6-in-largest-homecoming-victory-in-programs-149-year-history/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JV3NGZQ75ZADBLVIA6PW65WIRU.jpg"},
{"link": "https://www.columbiaspectator.com/sports/2019/10/14/camacho-ferral-claims-first-place-as-columbia-women-test-younger-runners-at-metropolitan-xc-championships/", "imageurl":"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VZQE577BRJA2NEEZSDD2WBEOMM.jpg"},
{"link": "https://www.columbiaspectator.com/arts-and-entertainment/2019/10/10/more-than-a-market-columbias-greenmarket-sellers-discuss-the-cultural-impact-of-farmers-markets/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/Y5ZQFHXBEFG5NACRMFZF2MYZEE.jpg"},
{"link": "https://www.columbiaspectator.com/news/2019/10/09/former-assistant-provost-at-the-new-school-appointed-associate-dean-of-core-curriculum/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QTZKPHJUPZH2XLGIW53OK54WTE.jpg"},
{"link": "https//www.columbiaspectator.com/news/2019/10/03/qa-inaugural-vp-of-student-affairs-joseph-greenwell-shares-personal-history-talks-most-pressing-campus-issues/", "imageurl": "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KXJHQTUCTNCRZPI33JCVGOFIRA.jpg"}
];

var mykey = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwLERMtTIHzDSF29sZqDsIjkVwOTyIJKMaU-OQsUOOOEX4OSfgPm4tSHhHIvqAxwvBBK_Bdrr-6Dru/pubhtml';

const KEY_1 = '1iQjvIWgwD4OWgXZ1X3OdDBtJHpr-ku6ajFp8LrxQWkA';
const KEY_2 = '1hUaNrgCxDC5N1hQ528fp-yuxSBCztLU4X6ZR6a1HEbk';

var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

const ArticlesWrapper = styled.div`
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
`

class App extends Component {
    constructor() {
      super();
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      // 1. Load the JavaScript client library.

      // window.gapi.load("client", this.initClient);
      Tabletop.init({
        key: KEY_1,
        callback: googleData => {
          console.log('google sheet data --->', googleData)
          this.setState({
            data: googleData
          })
        },
        simpleSheet: true
      })
    }

  render() {
    console.log('updated state --->', this.state);
    const { data } = this.state
    
    return (
      <div className="App">
        <ArticlesWrapper>
          <Display articles = {this.state && this.state.data}/>
        </ArticlesWrapper>
        
      </div>
    );
  }
}

export default App;
