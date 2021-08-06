import React,{Component}  from 'react';
import Profile from './profile/index';

import Skills from './profile/skills'
import MyProps from './props/index'
import Bio from './profile/bio'
import Links from './profile/links'

// const MyComponent = ()=> <h1>My Component</h1>

class App extends Component {

    // render() {

    //     const obj = {
    //         title: 'Test title',
    //         id: 'myh1'
    //     }


    //     const name = "Ashikul islam"

    //     const bio =(<div>
    //         <h3>{name} </h3>
    //         <p>I will Fullstack Developer</p>
    //     </div>);



    //     return (
    //         <div className="App">
    //             <h1{...obj}>What is JSX</h1>
    //             <p>JSX is Awesome and it's Mean JavaScript Extention</p>
    //             <p>{new Date().toISOString()}</p>
    //             <p>My name is {name}</p>
    //             <MyComponent/>
    //             {bio}
    //         </div>
    //     );
    // }

    
    render() {
        return(
            <div className="App">
                <Profile/>
                
                
                 <div style={{marginTop: '30px', marginBottom: '30px'}}>
                    <h3 style={{marginBottom: '30px'}}>List of programmers</h3>
                    
                    <Bio name="Ashikul islam" title="Student"/>
                    <Skills skillA="React" skillB="Angular"  skillC="VUE"/>
                    <Links socialA="Youtube" socialB="Twitter" socialC="Facebook" socialD="Github"/>

                    <p>Mr. y</p>
                    <Skills skillA="Node JS" skillB="Mongobd"  skillC="Express" /> 
                    <Links socialA="Youtube" socialB="Twitter" socialC="Facebook" socialD="Github"/>

                    <MyProps name="HM Nayeem"  title="Developer"/>
                    <MyProps name="Ashikul Islam" title="Student" />
                    <MyProps name="Atikur Rahman" title="Student"/>
                </div> 
            </div>
        );
    }
    
}


export default App