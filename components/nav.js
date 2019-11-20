import React from 'react'
import Link from 'next/link'

const links = [
  {label: 'accueil', dataId: 'home', icon: 'icon-menu fas fa-home', href: '/'},
  {label: 'compétences', dataId: 'skill', icon: 'icon-menu fas fa-wrench', href: 'skill'},
  {label: 'Projets', dataId: 'project', icon: 'icon-menu fas fa-code-branch', href: 'project'},
  {label: 'Demo', dataId: 'demo', icon: 'icon-menu fas fa-laptop-code', href: 'demo'},
  {label: 'contact', dataId: 'contact', icon: 'icon-menu fas fa-at', href: 'contact'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <menu>
    {links.map(({ key, dataId, icon, href, label }) => (
      <a className={"panel-button text-center"}
          href={href}
          id={dataId}
          key={dataId}>
            <div>
              <i className={icon}></i>
            </div>
            <div className="font-small">{label}</div>
        </a>
    ))}

    <style jsx>{`
      menu{
        background-color: #293133;
        margin:0;
        padding:0;
        color: #fff;
        position: fixed;
        z-index: 2;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
        height: 60px;
        flex-direction: row;
      }
      @media screen and (min-width: 768px) {
        menu {
            width: 90px;
            left: 0;
            height: 100%;
            flex-direction: column;
        }
      }
      a, .panel-button{
        color:#fff;
      }
      .panel-button.active{
        color: gray;
      }
      /** menu **/
      .icon-menu{
        font-size: 20px;
        margin-bottom: 10px;
      }
    `}</style>
  </menu>
)

export default Nav
