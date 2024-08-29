import '../Styles/Home.css'

import Contact from './Contact'
import Membership from './Membership'

export default function Home() {
        return (
                <>
                     <div className="Home">
                        <div className="Intro">
                                <div className="IntroSection">
                                        <p id='intro'>Welcome to the Wisconsin Engineering Student Society of The University of Wisconsin - Madison!</p>
                                </div>
                        </div>
                        <a name='contact'>
                                <Contact />
                        </a>
                        <a name='membership'>
                                <Membership />
                        </a>
                     </div>   
                </>
        );
}               