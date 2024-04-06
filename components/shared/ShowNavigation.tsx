'use client'

import React from 'react';

import GetCondition from '@/app/__conditions__/GetCondition'
import Topbar from './Topbar';
import LeftSideBar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Bottombar from './Bottombar';

const ShowNavigation = () => {
  const condition = GetCondition();
  if (condition) {
    return <></>
  }
  return (
    <>
      <Topbar />
      <LeftSideBar />
      <RightSidebar />
      <Bottombar />
    </>
  )
}

export default ShowNavigation