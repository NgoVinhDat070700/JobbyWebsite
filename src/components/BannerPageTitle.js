import React from "react"

function BannerPageTitle({pageName}){
    return(
        <section className="banner__page__title">
        <div className="banner__page__content">
          <div className="banner__left">{pageName} </div>
          <div className="banner__right">Home / {pageName} </div>
        </div>
      </section>
    )
}
export default BannerPageTitle