import React from 'react'
import   './profile.style.css'

import Bio from './bio'
import Skills from './skills'
import Links from './links'

class Profile extends React.Component {


    me = {
        name: 'HM Nayeem',
        title: 'Fullstack JavaScript Developer',
        skillA: 'Java',
        skillB: 'JavaScript',
        skillC: 'Python',
        socialA: 'facebook',
        socialB: 'Twitter',
        socialC: 'gitHub',
        socialD: 'Youtube'
    }
     
    render() {
        return(
            <div className="container">
                <Bio name={this.me.name} title={this.me.title}/> 
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}/>    
                <Links socialA={this.me.socialA} socialB={this.me.socialB} socialC={this.me.socialC} socialD={this.me.socialD}/>
            </div>     
        );
    }
}

export default Profile