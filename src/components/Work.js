import React, { PureComponent } from 'react';
import Job from './Job';

export default class Work extends PureComponent {
    state = {
        title: 'Tech Producer',
        company: 'Helios Interactive',
        description: 'Part scrum master and part release manager, I worked with clients, producers, designers, and developers to keep projects on schedule and deliver working apps under strict deadlines.',
        dates: 'July 2016 - Jan 2019'
    }

    handleClick = (e) => {
        this.setState({
            title: e.currentTarget.dataset.title,
            company: e.currentTarget.dataset.company,
            description: e.currentTarget.dataset.description,
            dates: e.currentTarget.dataset.dates
        })
        console.log(this.state);
    }

    render() {
        console.log('render', this.state);
        return (
            <section className="work">
                <h2>My Work Experience:</h2>
                <ul className="experience">
                    <li data-title="Tech Producer" data-company="Helios Interactive" data-description="Part scrum master and part release manager, I worked with clients, producers, designers, and developers to keep projects on schedule and deliver working apps under strict deadlines." data-dates="July 2016 - Jan 2019" onClick={this.handleClick}>Tech Producer - Helios Interactive</li>
                    <li data-title="Digital Director" data-company="Roger That Agency" data-description="As Digital Director at Roger That, I was responsible for sourcing and managing developers for clients’ web projects. I also wrote web copy, tracked site traffic and SEO metrics, and planned and launched PPC campaigns." data-dates="Nov 2014 - June 2016" onClick={this.handleClick}>Digital Director - Roger That Agency</li>
                    <li data-title="Social Media Manager" data-company="Pink Martini/Heinz Records" data-description="As Social Media Manager at Pink Martini, I was responsible for managing the social media accounts for Pink Martini and Heinz Records, including planning and executing digital giveaways, writing and distributing blog content, and making HTML/CSS updates to their websites." data-dates="May 2013 - Sept 2014" onClick={this.handleClick}>Social Media Manager - Pink Martini</li>
                    <li data-title="Founder/Lead SEO" data-company="Foster Digital Marketing" data-description="As a freelance digital marketer and web producer I was responsible for taking clients through the lifecycle of a web development project, from key messaging to UX and design through development, QA, and deployment. I also performed SEO site audits on existing websites to help companies’ sites perform better in search results, implemented and managed social media and PPC campaigns, and wrote blog posts, articles, and website copy." data-dates="Sept 2010 - Oct 2014" onClick={this.handleClick}>Founder - Foster Digital Marketing</li>
                    <li data-title="Copywriter" data-company="Mad Fish Digital" data-description="As a copywriter at Mad Fish, I was responsible for writing and styling posts for a variety of B2C and B2B blogs." data-dates="May 2008 - May 2011"  onClick={this.handleClick} >Copywriter - Mad Fish Digital</li>
                </ul>
                <section className="job-blurb">
                    <Job 
                        title={this.state.title}
                        company={this.state.company}
                        jobDescription={this.state.description}
                        dates={this.state.dates}
                    />
                </section>
            </section>
        )
    }
}
