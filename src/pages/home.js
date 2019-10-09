import React from 'react';
import Banner from './component/homebanner';
import Aboutpart from './component/about-part';
import OurProject from './component/ourproject';
import Ourmembers from './component/members';
import Ourservice from './component/services';
import Experiance from './component/experiances';
import Feedback from './component/feedback';
import Reacent from './component/reacentnews';



function Homepage () {
    return(
        <div>
            <Banner />
            <Aboutpart />
            <Ourservice />
            <Experiance />
            <OurProject />
            <Ourmembers />
            <Feedback />
            <Reacent />
        </div>
    );
}
    
 


export default Homepage;