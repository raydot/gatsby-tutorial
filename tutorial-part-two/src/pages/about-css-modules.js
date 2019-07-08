import React from 'react'

import Container from '../components/container'
import styles from './about-css-modules.module.css'

// inline component
/*
    Generally, if you use a component in multipe places on a site it should be in its own module file in the components directory.  But if it's only used in one place then create it inline.
*/
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>Dave rules CSS Modules!</p>
        <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    </Container>
)


