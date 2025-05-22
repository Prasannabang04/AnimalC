import React from 'react'


function E_training() {

    return (
        <>
            <div className="mt-28 py-12 max-w-screen-2xl container mx-auto md:px-25 px-4 my-10">
                <h1 className=" cursor-pointer text-4xl text-center font-serif font-bold">E-Training</h1>
                <p className="text-xl font-serif font-medium py-4 m-2 text-justify">
                    Welcome to Snuggle Sancutary E-Training is a comprehensive online training program designed to equip you with the skills and knowledge needed
                    to train your pet animal dosen't matter if it is Dog or cat or its from nice breed or not this E-training session will
                    Improve your skills to handle your pet animals and teach them a manner.
                </p>
            </div>
            <div className="flex flex-content space-x-36 py-28 mt-20 max-w-screen-2xl container mx-auto md:px-25 px-4 my-10 bg-[url('https://t3.ftcdn.net/jpg/06/32/62/94/360_F_632629473_WZquUncJWMJHCaTyxcTVTgajcPA53s7M.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="card glass w-96">
                    <figure>
                        <img className="rounded-md"
                            src="Orgban.gif"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">E-training Dog</h2>
                        <p className="text-black">Learn All The basic you can teach them.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="/etd">Let's Go</a></button>
                        </div>
                    </div>
                </div>

                <div className="px-4 space-x-2 card glass w-96">
                    <figure>
                        <img className="rounded-md"
                            src="Orgban.gif"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">E-training Cat</h2>
                        <p className="text-black">Learn All The basic you can teach them.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="/etc">Let's Go</a></button>
                        </div>
                    </div>
                </div>

                <div className="px-4 space-x-2 card glass w-96">
                    <figure>
                        <img className="rounded-md"
                            src="Orgban.gif"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">E-training Horse</h2>
                        <p className="text-black">Learn All The basic you can teach them.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Let's Go</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default
    E_training