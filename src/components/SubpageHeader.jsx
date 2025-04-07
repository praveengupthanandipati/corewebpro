import React from 'react'

const SubpageHeader = ({subTitle, mainTitle}) => {
  return (
    <div>
        <div className="subpageHeader">
            <div className="blurFilter"></div>
            <div className='container'>
                 <div className="row">
                     <div className="col-md-8">
                        <h6 className='text-label-color'>{subTitle}</h6>
                         <h1 className='text-text-color font-semibold'>{mainTitle}</h1>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default SubpageHeader
