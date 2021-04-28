
import React, { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import * as singleSpa from 'single-spa';
import App from '../layouts/App'
import { v4 as uuid } from 'uuid'

const AngularChild = () => {
    return(
    <App>
      <Parcel 
        mountParcel={singleSpa.mountRootParcel}  
        config = {() => System.import("@lc/app-child-angular")}>
      </Parcel>
    </App>
  )
}

export default AngularChild


