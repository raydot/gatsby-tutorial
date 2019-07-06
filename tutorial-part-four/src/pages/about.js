import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <h1>About { data.site.siteMetadata.title }</h1>
            <p>
                This is a site that will blow your mind with all of its Panda pandamonium.  You won't believe your eyes, step right this way, prepare to be amazed!
            </p>
    </Layout>
) 

/*
    Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components.
*/

export const query = graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`