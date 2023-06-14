import React, { useEffect } from 'react'

function Home() {
    useEffect(() => {
        var main = new Splide('#main-slider', {
          type: 'fade',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        });
      
        var thumbnails = new Splide('#thumbnail-slider', {
          rewind: true,
          fixedWidth: 104,
          fixedHeight: 58,
          isNavigation: true,
          gap: 10,
          focus: 'center',
          pagination: false,
          cover: true,
          dragMinThreshold: {
            mouse: 4,
            touch: 10,
          },
          breakpoints: {
            640: {
              fixedWidth: 66,
              fixedHeight: 38,
            },
          },
        });
      
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
      }, []);

  return (
    <>
        <div className="container mt-2">
            <section>
                <div className="row mt-5">
                    <div className="first py-5 col-6 ">
                        <p className='digital'>Digital Content For <span style={{color:'rgba(252,176,66,255)'}}>Dog Lover`s</span></p>
                        <p>As a dog lover, there is a wealth of digital content available that can cater to your interests. One option is to explore dog-related blogs and websites, where you can find informative articles on dog care, training tips, breed profiles, health advice, and inspiring stories about dogs.</p>
                        <div className='py-5'>
                            <button className='btn btn-warning'>Get In Touch</button>
                            <button id="expandButton" className='btn btn-outline-warning ms-4'>Read More</button>
                        </div>
                    </div>
                    <div className="dogsPictureBox  align-items-center" >
                        <img id='dogsPicture' src="Images/dogWebsite.png" alt="Dogs" srcset="" />
                    </div>
                </div>
            </section>
        </div>

        <div><img src='/Images/school-divider.png' alt="" id='imagelogo'/></div>

        <div className="container">
            <section>
                <div className="Interesting py-5">
                    <p> What`s Interesting About <span style={{color:'rgba(252,176,66,255)'}}>Dogs?</span></p>
                </div>
                <div className="row">
                   
                   
                    <div className='col-4'>
                        <div className="target">
                            <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/big.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                            </div>
                        </div>
                        <span className='trivia py-4'><label style={{color:'rgba(252,176,66,255)'}}>Biggest &nbsp;</label> Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    
                    <div className='col-4'>
                    <div className="target">
                        <div className="interestingIconsBox pt-5">
                                <img src='Images/DogIcons/faster.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Fastest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/many.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>  
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Many &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                   </div>

                   <div className="row">
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/moral.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div> 
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Moral &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/small.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Smallest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                            <img src='Images/DogIcons/strong.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Strongest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                </div>
            </section>
        

 

        <div className="splide my-5" id="main-slider">
			<div className="splide__track">
				<ul className="splide__list">
					<li className="splide__slide">
						<img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" className="img-fluid"/>
					<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>	
					</li>

					<li className="splide__slide">
							<img src="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg" className="img-fluid"/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						</li>

					<li className="splide__slide">
							<img src="https://tnt.abante.com.ph/wp-content/uploads/2021/07/AJ-Raval.jpg" className="img-fluid"/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						</li>

				</ul>
			</div>
		</div>

		<div className="splide my-5" id="thumbnail-slider">
			<div className="splide__track">
				<ul className="splide__list">
					<li className="splide__slide hvr-grow-shadow">
						<img src="https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg 
                            " className="img-fluid"/>
						
					</li>

					<li className="splide__slide hvr-grow-shadow">
							<img src="https://media.tenor.com/dqH6ZBgOvMUAAAAj/dog-dance.gif" className="img-fluid"/>
						
						</li>

					<li className="splide__slide hvr-grow-shadow">
							<img src="https://media.tenor.com/ijffyjt8WKYAAAAj/dog-twerk.gif    " class="img-fluid"/>
						
						</li>

				</ul>
			</div>
		</div>

        </div>
 




    </>
  )
}

export default Home