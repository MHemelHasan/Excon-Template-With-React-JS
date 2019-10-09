import React from 'react';
import Banner from './component/homebanner';
import Aboutpart from './component/about-part';
import OurProject from './component/ourproject';
import Ourmembers from './component/members';
import Ourservice from './component/services';
import Experiance from './component/experiances';
import Feedback from './component/feedback';




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
        </div>
    );
}
    
 


export default Homepage;