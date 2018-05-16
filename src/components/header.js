import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="sans-serif">
  <div className="cover bg-left bg-center-l" style={{backgroundImage: 'url(http://mrmrs.github.io/photos/u/011.jpg)'}}>
    <div className="bg-black-80 pb5 pb6-m pb7-l">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="f4 white no-underline">
            {siteTitle}
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="https://github.com/wavejs" target="_blank">Github</a>  
        </div>
      </nav> 
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Everycode</h1>
        <h2 className="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
      </div>
    </div>
  </div> 
</header>
)

export default Header
