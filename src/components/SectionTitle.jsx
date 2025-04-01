import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div className='section-title'>
        <div className='row justify-content-center'>
            <div className="col-md-10">
                <h4 className='text-center text-primary-color'><span>{title}</span></h4>  
                <h3 className="text-text-color text-center font-bold">{description}</h3>
            </div>
        </div>
    </div>
  )
}

export default SectionTitle
