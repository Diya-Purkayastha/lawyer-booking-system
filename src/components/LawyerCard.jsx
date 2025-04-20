import React from 'react';

const LawyerCard = ({singleLawyer}) => {
    console.log(singleLawyer);
    return (
        <div className='mt-8'>
            <div className="card card-side bg-base-100 shadow-sm p-5">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default LawyerCard;