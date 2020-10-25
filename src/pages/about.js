import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>My name is Tim, I am a front end developer. <Link to="/contact">Contact</Link></p>
        </Layout>     
    )
}

export default About;