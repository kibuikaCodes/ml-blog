import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"

class IndexPage extends React.Component {
  render() {

    // change the title here
    // const siteTitle = "CC Blog"

    return (
      <Layout location={this.props.location} >
        {/* <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        /> */}
        {/* change the image here */}
        <img style={{ margin: 0 }} src="./mara.jpg" alt="The mara" />
        <h1>
          Machine Learning saving one ecosystem at a time{" "}
          <span role="img" aria-label="wave emoji">
          </span>
        </h1>
        <p>
        Machine Learning involves the use of data by computer sysytems to make 
        inferences based on the provided data while the environment is all
        what surrounds a person, animal or plant. This brings up questions like
        why and how should this seamingly unrelated fields be used together?
        </p>
        <p>
          Let us start with the question of why?
        </p>
        <p>
         On February 8 2020 Antarctica recorded their highest temperatures yet 
         as verified by the UN Meteorological Organization, in an article published by Douglas 
         Main on February 6 2020 bumblebees are going extinct in a time of climate chaos, fireflies
         going extinct and thwaites, the biggest glacier, is melting at an alarming rate.
         With the recent global events it is evident that the environment is like a house of cards
         where if we keep on taking pieces out shall come crumbling down. But there is hope for the world,
         human beings have come a long way in being able to collect data, structure and model it using
         machine systems to make predictions creating early warning systems that help us to be better
         prepared and take evasive measures where possible.
        </p>
        <p>
        The applications of machine learning in the environment are endless. Let us take an example of
        The Mara Elephant Project, where the kenyan wildlife rangers have collaborated with Social Good of
        Intel and The Resolve NGO to develop trail guard, which is an early warning system to help arrest
        poachers. The algorithm takes the pictures captured from a mount camera and using shape recognition
        and other feautures that form the feature parameters is able to send out an alarm in the case where
        a human being passes in close proximity informing the rangers in advance of an eminent poaching activity.
        The Mara Elephant Project is one of success story among several others which provides hope.
        </p>
        <p>
        Intel and The Resolve NGO to develop trail guard, which is an early warning sysytem to help arrest
        poachers. The Mara Elephant Project is one of success story among several others which provides hope.
        </p>
        

        <p>
        Another example is NotCo, an organization based in Santiago Chile, which is using Giuseppe AI to 
        mimick the perception of people on their taste of animal based food and replace them with plant
        based food which tastes the same if not better. The algorithm looks at the molecular constitution of animal
        based foods and creates a list of ingredients from the most basic building blocks and using machine learning
        and a database recombines select elements from plant based foods to recreate the taste and texture of the 
        original animal based food. Basically saving the planet by reducing meat consumption.
        This is bacause animals reared especially for consumption account for most of the ethane emitted to the 
        atmosphere which leads to increased global warming. These are just some of the examples, with machine 
        learning there are endless possibilities on how to better coexist with the environment.
        </p>
        <p>
        With that knowledge, my proposed solution is helping to end world hunger using machine learning. Using the
        available data on soils, weather patterns and ideal conditions for the growth of diffent food crops as 
        the features to train a machine learning model that gives the ideal food crop to be grown in a particular region.
        Take the example of the upper North Eastern Kenya region, it is mostly dry with high temperatures and sandy soils
        and with those conditions it may not be able to support the growth of maize but can offer an alternative like portulaca
        which is more resistant to the harsh conditions and offers food security to the residents.
        Think about it.
        </p>
        <p>
        by Francis Macharia.
        </p>
         {/* href to the blog  */}
        <a href='https://www.youtube.com/watch?v=ZYnS2tUBwGU&feature=youtu.be' target="_blank">
          Here is the link to a related vlog
        </a>
      </Layout>
    )
  }
}

export default IndexPage
