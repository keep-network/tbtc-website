import React from 'react'


const Announcement = ({ children }) => (
    <div className="announcement">
        <div className="container">
            <div className="row justify-content-center no-gutters">
                <div className="col-10 col-sm-12 col-md-12 col-lg-10 content">
                    <p>
                        { children }
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Announcement