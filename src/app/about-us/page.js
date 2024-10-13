"use client"
import React from 'react'
import Hero from './Hero'
import IdeasAndInivation from '../components/IdeasAndInivation'
import MissionVisoin from './MissionVisoin'
import WhoWeAre from './WhoWeAre'
import ProjDelivered from '../components/ProjDelivered'
import FeedBack from '../components/FeedBack'

function About() {
  return (
    <div>
      <Hero/>
      <IdeasAndInivation showAboutUsBtn={false}/>
      <MissionVisoin/>
      <WhoWeAre/>
      <ProjDelivered/>
      {/* <FeedBack/> */}
    </div>
  )
}

export default About
