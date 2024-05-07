/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import {HiOutlineMail} from 'react-icons/hi'
import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoPhonePortrait} from 'react-icons/io5'
import {MdDateRange} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {TiArrowSortedDown} from 'react-icons/ti'

import ReactContext from '../../context/ReactContext'

import './index.css'

const Profile = () => (
  <ReactContext.Consumer>
    {value => {
      const {isContact, onContact} = value
      const Element = (
        <div className="dsp1">
          <hr className="hr1" />
          <ul className="ul-12">
            <li className="li-1">
              <p className="icon1">
                <HiOutlineMail />
              </p>
              <div className="pf-dt">
                <h1 className="h9">EMAIL</h1>
                <a href="mailto:vinaysairam1233@gmail.com">
                  <p className="p9">sairam28380@g...</p>
                </a>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <IoPhonePortrait />
              </p>
              <div className="pf-dt">
                <h1>PHONE</h1>
                <a href="tel:+91 6304274299">
                  <p>+916304274299</p>
                </a>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <MdDateRange />
              </p>
              <div className="pf-dt">
                <h1>BIRTHDAY</h1>
                <p>JUNE 06, 2003</p>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <ImLocation2 />
              </p>
              <div className="pf-dt">
                <h1>LOCATION</h1>
                <p>TANUKU</p>
              </div>
            </li>
          </ul>
          <hr className="hr1" />
          <ul className="lnks">
            <li>
              <a
                href="https://www.instagram.com/vinay_sairam/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sairamkottu/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/vinaysairam" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      )
      const onContact1 = () => {
        onContact()
      }
      return (
        <div className="profile">
          <div className="btn1">
            {isContact === true ? (
              <button type="button" className="btn-con1" onClick={onContact1}>
                <TiArrowSortedDown />
              </button>
            ) : (
              <button type="button" className="btn-con" onClick={onContact1}>
                <TiArrowSortedDown />
              </button>
            )}
          </div>
          <div className="btn">
            {isContact === true ? (
              <button type="button" className="btn-con1" onClick={onContact1}>
                Show Contacts
              </button>
            ) : (
              <button type="button" className="btn-con" onClick={onContact1}>
                Show Contacts
              </button>
            )}
          </div>
          <div className="f-11">
            <div className="pf-container">
              <img
                src="https://res.cloudinary.com/djbivakqj/image/upload/v1681483104/iivbs44gr5eb7nnfedui.jpg"
                alt="vinay"
                className="pf-logo"
              />
              <div className="pf-c">
                <h1 className="pf-heading">Sai Ram Kottu</h1>
                <p className="fstack-para">FULL STACK WEB DEVELOPER</p>
                <button type="button" className="resume-btn">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1mzioad7uIKsWqbSDTXYZ8tGvRMPR75wE/view"
                    download
                  >
                    Download
                  </a>
                </button>
              </div>
            </div>
            {isContact === true && Element}
            <div className="dsp">
              <hr className="hr1" />
              <ul>
                <li className="li-1">
                  <p className="icon1">
                    <HiOutlineMail />
                  </p>
                  <div className="pf-dt">
                    <h1>EMAIL</h1>
                    <a href="mailto:vinaysairam1233@gmail.com">
                      <p>sairam28380@g...</p>
                    </a>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <IoPhonePortrait />
                  </p>
                  <div className="pf-dt">
                    <h1>PHONE</h1>
                    <a href="tel:+91 6304274299">
                      <p>+916304274299</p>
                    </a>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <MdDateRange />
                  </p>
                  <div className="pf-dt">
                    <h1>BIRTHDAY</h1>
                    <p>JUNE 06, 2003</p>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <ImLocation2 />
                  </p>
                  <div className="pf-dt">
                    <h1>LOCATION</h1>
                    <p>TADIPARRU</p>
                  </div>
                </li>
              </ul>
              <hr className="hr1" />
              <ul className="lnks">
                <li>
                  <a
                    href="https://www.instagram.com/vinay_sairam/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sairamkottu/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vinaysairam" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Profile
