import React from 'react';

import ImageSelector from '../ImageSelector/ImageSelector';
import ImageViewer from '../ImageViewer/ImageViewer';
import "./Dashboard.css";


const Dashboard = () => {
  return (
    <div>
    <ImageViewer/>
    <ImageSelector/>
    </div>
  )
}

export default Dashboard;