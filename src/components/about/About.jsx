import React from 'react'
import Card from '../extras/Card'
import goal from "../../assets/symbols/goals.svg"

function About() {
  return (
    <div>
        <Card
         title="Our Goal"
         body ="Our goals and objectives are to provide a more personalized degree of service to our customers, and a higher level of comfort and protection through the preservation of property value."
         src={goal}
        />
    </div>
  )
}

export default About