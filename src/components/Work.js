import React, { PureComponent } from 'react';
import Job from './Job';

export default class Work extends PureComponent {
    state = {
        job: null,
        show: null
    }

    componentDidMount(){
        this.setState({
            job: '',
            show: false
        })
    }
    //onclick logic that displays project detail info
    handleClick = (e) => {
        this.setState({
            job: e.currentTarget.dataset.id,
            show: true
        })
        console.log(this.state);
    }

    render() {
        console.log('render', this.state);
        return (
            <section className="work">
                <h2>My Work Experience:</h2>
                <ul>
                    <li data-id="madfish" onClick={this.handleClick}>Copywriter - Mad Fish Digital</li>
                    <li data-id="foster" onClick={this.handleClick}>Founder - Foster Digital Marketing</li>
                    <li data-id="pink" onClick={this.handleClick}>Social Media Manager - Pink Martini</li>
                    <li data-id="roger" onClick={this.handleClick}>Digital Director - Roger That Agency</li>
                    <li data-id="helios" onClick={this.handleClick}>Tech Producer - Helios Interactive</li>
                </ul>
                <section className="job-blurb">
                    <Job 
                        title="Copywriter"
                        company="Mad Fish Digital"
                        jobDescription="As a copywriter at Mad Fish, I was responsible for writing and styling posts for a variety of B2C and B2B blogs."
                        dates="May 2008 - May 2011"
                    />
                    <Job 
                        title="Founder/Lead SEO"
                        company="Foster Digital Marketing"
                        jobDescription="As a freelance digital marketer and web producer I was responsible for taking clients through the lifecycle of a web development project, from key messaging to UX and design through development, QA, and deployment. I also performed SEO site audits on existing websites to help companies’ sites perform better in search results, implemented and managed social media and PPC campaigns, and wrote blog posts, articles, and website copy."
                        dates="Sept 2010 - Oct 2014"
                    />
                    <Job 
                        title="Social Media Manager"
                        company="Pink Martini/Heinz Records"
                        jobDescription="As Social Media Manager at Pink Martini, I was responsible for managing the social media accounts for Pink Martini and Heinz Records, including planning and executing digital giveaways, writing and distributing blog content, and making HTML/CSS updates to their websites."
                        dates="May 2013 - Sept 2014"
                    />
                    <Job 
                        title="Digital Director"
                        company="Roger That Agency"
                        jobDescription="As Digital Director at Roger That, I was responsible for sourcing and managing developers for clients’ web projects. I also wrote web copy, tracked site traffic and SEO metrics, and planned and launched PPC campaigns."
                        dates="Nov 2014 - June 2016"
                    />
                    <Job 
                        title="Tech Producer"
                        company="Helios Interactive"
                        jobDescription="Part scrum master and part release manager, I worked with clients, producers, designers, and developers to keep projects on schedule and deliver working apps under strict deadlines."
                        dates="July 2016 - Jan 2019"
                    />
                </section>
            </section>
        )
    }
}
