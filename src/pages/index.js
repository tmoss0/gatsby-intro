import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const Index = () => {
    return(
        <Layout>
            <Head title="Home" />
            <h2>My name is Tim, a web developer.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default Index;