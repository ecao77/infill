import React, {useState, useEffect} from 'react';
import '../App/App.css';
import Navbar from '../Navbar/Navbar';
import Rectangles from '../Rectangles/Rectangles'
import Links from '../Links/Links'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import arrow from '../../arrow.png'
import task from '../../task.png'

export default function About() {

  return (
    <div>
        <Navbar />
        <Rectangles />

        <div className = "left-align even cali header" style = {{paddingTop: 120, paddingBottom: 60, "width": "34%"}}>
          A word on the tip of your tongue? We got you covered.
        </div>

        <div className = "left-align even cali body" style = {{paddingBottom: 100, "width": "50%"}}>
          abcdefghijklmnopqrstuvwxyz. abcdefghijklmnopqrstuvwxyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor elit sit amet magna bibendum, sed pellentesque neque faucibus. Nam ut sapien tortor. Etiam ac tincidunt ipsum. Maecenas ultrices dapibus ex, sit amet placerat augue placerat non. Nullam nec diam ornare nibh tempor congue et at quam. Quisque vel molestie enim. Duis accumsan ornare est vulputate facilisis. Duis bibendum mattis massa, vitae scelerisque urna pellentesque in.
        </div>

        <AnimationOnScroll animateOnce = "true" animateIn = "animate__flip">
          <div className = "even">
            <img src = {arrow} style = {{height: 30, width: 55.6}}/>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn = "animate__fadeIn">
          <div className = "right-align even cali header" style = {{paddingTop: 120, paddingBottom: 60, "width": "40%"}}>
            Find expressions that are just right using language models
          </div>
        </AnimationOnScroll>

        <div className = "left-align even cali body" style = {{paddingBottom: 100, "width": "50%"}}>
          abcdefghijklmnopqrstuvwxyz. abcdefghijklmnopqrstuvwxyz. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor elit sit amet magna bibendum, sed pellentesque neque faucibus. Nam ut sapien tortor. Etiam ac tincidunt ipsum. Maecenas ultrices dapibus ex, sit amet placerat augue placerat non. Nullam nec diam ornare nibh tempor congue et at quam. Quisque vel molestie enim. Duis accumsan ornare est vulputate facilisis. Duis bibendum mattis massa, vitae scelerisque urna pellentesque in.
        </div>

        <div className = "even">
            <img src = {task} style = {{height: 300, width: 454.85}}/>
        </div>

        <AnimationOnScroll animateIn = "animate__fadeIn">
          <div className = "even cali header" style = {{paddingTop: 120, paddingBottom: 60, marginRight: "15%"}}>
            References and Links
          </div>
        </AnimationOnScroll>  
        <Links />

    </div>
  );  
}