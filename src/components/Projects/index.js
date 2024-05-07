/* eslint-disable react/jsx-no-target-blank */
import {Link} from 'react-router-dom'
import '../Home'
import './index.css'
import ReactContext from '../../context/ReactContext'
import Profile from '../Profile'

const Projects = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveTab, onChangeActiveTab} = value
      const activeTab = isActiveTab === 'Projects' ? 'll1' : 'l'
      const activeTab1 = isActiveTab === 'Projects' ? 'l11' : 'l1'
      const onAbout = () => {
        onChangeActiveTab('About')
      }
      const onSkills = () => {
        onChangeActiveTab('Skills')
      }
      const onProjects = () => {
        onChangeActiveTab('Projects')
      }
      const onContact = () => {
        onChangeActiveTab('contact')
      }
      console.log(isActiveTab)
      return (
        <div className="bg-main">
          <Profile className="pf-block" />
          <div className="main-section1">
            <div className="main1">
              <div className="footer1">
                <Link to="/" className="lnk11">
                  <p className="li" onClick={onAbout}>
                    About
                  </p>
                </Link>
                <Link to="/skills" className="lnk11">
                  <p className="li" onClick={onSkills}>
                    Skills
                  </p>
                </Link>
                <Link to="/Projects">
                  <li className={`${activeTab1}`} onClick={onProjects}>
                    Projects
                  </li>
                </Link>
                <Link to="/contact">
                  <p className="li" onClick={onContact}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className="fl-11">
                <div className="header">
                  <h1>
                    <span className="sp">P</span>rojects
                  </h1>
                  <ul className="ul">
                    <Link to="/">
                      <li className="l" onClick={onAbout}>
                        About
                      </li>
                    </Link>
                    <Link to="/skills">
                      <li className="l" onClick={onSkills}>
                        Skills
                      </li>
                    </Link>
                    <Link to="/Projects">
                      <li className={`${activeTab}`} onClick={onProjects}>
                        Projects
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="l" onClick={onContact}>
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
                <ul className="projects-container">
                  <li className="project-card">
                    <a
                      href="https://vinaynxtwatch00.ccbp.tech/login"
                      target="_blank"
                    >
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714662108/capture_20240502202932512_sefq6k.bmp"
                          alt="nxtWatch"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Nxt Watch
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          You Tube Clone, Login page, Saved video details
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://vinayjob00.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714665380/capture_20240502212551632_sfylbc.bmp"
                          alt="nxtJob"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Jobby App
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Job Search, Login page, View job details
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a
                      href="https://vinaynxtjob.ccbp.tech/login"
                      target="_blank"
                    >
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714665963/capture_20240502213414050_pdsaqt.bmp"
                          alt="nxt Trendz"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Nxt Trendz
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Ecommerce clone, Login page, cart page, products
                          section, product details
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://emojigame000.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714699289/capture_20240503065055672_yvj6j1.bmp"
                          alt="Emoji game"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Emoji Game
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Game, Score board, timer, Top score
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://keerthana00.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714699486/capture_20240503065416577_b3op2p.bmp"
                          alt="Emoji game"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Smart Wedding Invitation
                          <span className="sp2">Static</span>
                        </h1>
                        <p className="pr-discription">
                          Smart invitation, bride details, Location details,
                          Gallery section
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://vinaygallery.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714700340/capture_20240503070836402_u8vpm8.bmp"
                          alt="Emoji game"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Gallery App
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Selected image, list of images
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://sairamptf.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714700625/capture_20240503071300563_cxv7h2.bmp"
                          alt="Portfolio"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Personal Portfolio
                          <span className="sp2">Responsive</span>
                        </h1>
                        <p className="pr-discription">
                          About section, skills and Education, Projects
                          showcase.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://cointoss00.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714700948/capture_20240503071818462_pjvldr.bmp"
                          alt="Toss game"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Coin Toss Game
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Heads and Tails score board
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://saimoneymn.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714701518/capture_20240503072812314_mw1san.bmp"
                          alt="money manager"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Money Manager
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Your balance, Your income, Your expenses, History, add
                          your transaction
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://vinaypsmanager.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714701958/capture_20240503073539815_ek0hyn.bmp"
                          alt="password manager"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Password Manager
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Add new password, show your password, Pc version,
                          Search your passwords
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://vinayprojects0.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714702431/capture_20240503074330750_lhg3na.bmp"
                          alt="projects"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Projects Timeline
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          List of Projects, using React Chrono package
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="project-card">
                    <a href="https://saigradients.ccbp.tech/" target="_blank">
                      <div className="img-card">
                        <img
                          src="https://res.cloudinary.com/djbivakqj/image/upload/v1714702889/capture_20240503075037437_mewerr.bmp"
                          alt="projects"
                          className="project-img"
                        />
                      </div>
                      <div className="project-ds">
                        <h1 className="pr-title">
                          Gradient Generator
                          <span className="sp2">Dynamic</span>
                        </h1>
                        <p className="pr-discription">
                          Choose direction , Pick the colors, Generate the
                          gradient
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Projects
