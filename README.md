# EIGEL-Mgmt-Consulting-Website

EIGEL is a team of professionals, esteemed in their own respective diverse fields of specialization and expertise.

It aims to empower and be the strategic partner of people, organizations, companies, and communities in reaching their goals and targets through active collaboration, hard work, and commitment.

# Index Page

## How to change the slideshow images and it's description?
1. Go to the Slideshow Section in the index.html file.
2. Edit, Add, or Remove the slideshow blocks to preference.

## How to change the about section?
1. Go to the About Section in the index.html file.
2. Change the necessary information guided by the comments depending on the status of the Firm.

## How to change the services and the following description?
1. Go to Services Section in the index.html file.
2. Follow the guidelines in the comments and adjust as necessary.

## How to add more logos for the customers?
1. Go to the Customer Logo Container found in the index.html file
2. Copy the following code block:
```
<div class="logo-item">
    <img class="img-fluid testimonial-logo-image"  src="img/logos/dilg-logo.png" alt="Department of the Interior and Local Government">
</div>
```
3. Edit the code block as necessary. Change the image of the logo and the alt text.
4. Insert into the Customer Logo Container

## How to add or remove testimonials?
1. Go to the Testimonials section in the index.html file.
2. Copy the following code block:
```
<div class="col-lg-4 review-card">
    <div class="card border-radius-0 bg-color-light border-0 box-shadow-1 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="300">
        <div class="card-body py-3 px-2">
            <div class="testimonial testimonial-style-4 border-0 box-shadow-none m-0 p-0">
                <div class="testimonial-author pb-3">
                    <div class="testimonial-author-thumbnail">
                        <!-- Reviewer Image - change the src path to preferred image. -->
                        <img src="img/homepage-images/testimonial-1.jpg" class="img-fluid rounded-circle" alt="">
                    </div>
                    <!-- Name and Role of Reviewer - Change if necessary. -->
                    <p><strong class="font-weight-bold">Mark Matatquin</strong><span>Logistics Planner</span></p>
                </div>
                <div class="px-4 mx-2 pt-2 pb-3">
                    <!-- Header of the Review -->
                    <h4 class="font-weight-semi-bold">5 STARS!</h4>
                    <!-- The Review itself - Change if necessary -->
                    <p>They were able to quickly grasp my situation and devise a strong plan to solve my problem. I would highly recommend them to anyone looking for consulting services.</p>
                    <!-- Add as many stars as necessary. -->
                    <p class="mb-0">
                        <i class="fas fa-star text-color-primary text-2"></i>
                        <i class="fas fa-star text-color-primary text-2"></i>
                        <i class="fas fa-star text-color-primary text-2"></i>
                        <i class="fas fa-star text-color-primary text-2"></i>
                        <i class="fas fa-star text-color-primary text-2"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```
3. Edit the code block as necessary. Change the name, image, role, review, and number of stars.
4. Insert the edited code block to the Testimonials section

# About Us Page

## How to change the contents of the Who We Are Section
1. Go to the Who We Are Section in the about-us.html
2. To change the images in the carousel, simply replace the src attribute to the appropriate image source.
3. To change the description of the Firm, simply replace the text in in the Company Description block.

## How to add a member on the EIGEL Team
1. Go to the EIGEL Team Container found in the about-us.html
2. Copy the HTML block below
```
<div class="col-sm-6 col-lg-4 isotope-item leadership" style="position: absolute; left: 0px; top: 0px;">
    <span class="thumb-info thumb-info-hide-wrapper-bg mb-4 employee-card">
        <span class="thumb-info-wrapper">
            <a href="#">
                <img src="img/team/team-1" class="img-fluid" alt="Image of the Member">
                <span class="thumb-info-title">
                    <span class="thumb-info-inner">Enter the name of the member here</span>
                    <span class="thumb-info-type">Enter the role of the member here</span>
                </span>
            </a>
        </span>
        <span class="thumb-info-caption">
            <span class="thumb-info-caption-text employee-description">Enter the description of the member here.</span>
        </span>
    </span>
</div>
```
3. Change the name, description, image, and role appropriate to the new member of the Firm.
4. Insert the edited HTML Code block to the EIGEL Team Container.

# Clients and Projects Project Page

## How to add a clients/projects within the website
1. Go to the "Body" section of the clients-and-projects.html
2. Under the "Body" tag check for <div role="main" class="main"> then <main class="container py-2 articles-main">. This is where the codes for the article are located.
3. Copy the template code down below and add it under the main tag.
```
<div class="item blog">
    <div class="content">
		<div class="grid-item grid-item-2 card card-border card-border-bottom card-border-hover bg-color-light box-shadow-6 box-shadow-hover anim-hover-translate-top-10px transition-3ms appear-animation animated appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300">
			<div class="card-body">
				<article class="post post-large">
                    <!-- Indicates the month and year to when the project was finished -->
                    <div class="post-date">
                        <span class="month">Oct (Change Oct to the appropriate month)</span>
                        <span class="year">21 (Change Oct to the appropriate year)</span>
                    </div>

                    <!-- Name of the project and short description -->
                    <div class="post-content">
                        <h4><a href="./article-pages/nia-r2.html" class="text-decoration-none">NIA R2 (Change Oct to the appropriate project title)</a></h4>
                        <p class="mb-1">Formulation of Irrigation Water Resources Management Plan (Change Oct to the appropriate project description)</p>

                        <!-- Redirects to a new page. For more instructions go to README.md to check the documentation. -->
                        <a href="./article-pages/nia-r2.html" class="read-more text-color-dark font-weight-bold text-2">read more <i class="fas fa-chevron-right text-1 ms-1"></i></a>
                    </div>
				</article>
			</div>
		</div>
	</div>
</div>
```
## How to add a article page
1. This part is optional and the anchor tag can be removed. However, if the developer wishes to add an article here's how. Create a new HTML file under article-pages directory.
2. Copy the template code down below add it under the newly created HTML file under article-pages directory.
```
<!-- BODY -->
<div role="main" class="main">

    <!-- CURRENT DIRECTORY -->
    <section class="page-header page-header-classic page-header-sm bg-secondary" style="margin-top:30px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6 order-2 order-md-1 align-self-center p-static">
                    <span class="page-header-title-border visible" style="width: 89.2812px;"></span><h1 data-title-border="">Client & Projects</h1>
                </div>
                <div class="col-md-6 order-1 order-md-2 align-self-center">
                    <ul class="breadcrumb d-block text-md-end">
                        <li><a href="../index.html" class="text-color-light font-weight-semibold">Home</a></li>
                        <li><a href="../client-and-projects.html" class="text-color-light font-weight-semibold">Clients & Projects</a></li>
                        <li class="text-color-light">JDVC Resources Corporation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="row">
            <div class="col-lg-4 order-lg-2">
                <!-- SIDEBAR -->
                <aside class="sidebar">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/hQe5Ssews5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h5 class="font-weight-semi-bold pt-4">Visit their Website</h5>
                    <div data-href="http://www.jdvcresources.com/jdvcresources/" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="http://www.jdvcresources.com/jdvcresources/" class="fb-xfbml-parse-ignore"><a href="http://www.jdvcresources.com/jdvcresources/">JDVC Resources Corporation</a></blockquote></div>
                </aside>
            </div>
            <div class="col-lg-8 order-lg-1">
                <div class="blog-posts">

                    <div class="row">
                        <div class="col">

                            <!-- PROJECT DESCRIPTION -->
                            <article class="border-bottom-0 pb-0 mb-5 pt-4">

                                <p>JDVC is a domestic corporation duly registered with the Securities and Exchange Commission for the business purpose of offshore large scale high grade magnetite mining. The presence of tall and highly mineralized mountains have been the consistent, reliable and endless source of magnetite iron and other mineral deposits that experts say have been deposited offshore for the last 50 million years.</p>

                                <h4>Project Profile</h4>

                                <p>EIGEL Management Consulting worked with JDVC Resource Corporation as the main consultant for projects such as maintenance of Environmental Manage Systems, Occupational Health and Safety System, and Quality Management System. Their consulting service involves the integration of ISOs and OHSAS to the maintenance of these systems – ISO 14001:2015 for EMS, OHSAS 18001:2008 for OH&S, and ISO 9001:2015 for QMS. In the present, EIGEL Management Consulting continues to provide a consultancy service with JDVC, be it in online mode or face-to-face.</p>
                                
                                <div>

                                    <h4>Project Objectives</h4>

                                    <ul>
                                        <li>
                                            <h5>Context of the Organization Seminar and Workshop</h5>
                                            <ul>
                                                <li>To provide COTO Seminar and Workshop in order to evaluate the organization and its internal and external factors which plays an important role in ensuring the effectiveness of the QMS.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>ISO Integrated Management System Awareness Training and Workshop</h5>
                                            <ul>
                                                <li>To conduct ISO Awareness Training and Workshop in order to provide familiarity with the concepts and requirements needed to establish, integrate, implement Environmental Management Systems under ISO 14001:15, Occupational Health and Safety System under OHSAS 18001:2007, and Quality Management System (QMS) under ISO 9001:2015</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>External Audit for ISO Integrated Management System </h5>
                                            <ul>
                                                <li>To maintain Environmental Management Systems in compliance with ISO 14001:15, Occupational Health and Safety System under OHSAS 18001:2008, and Quality Management System (QMS) in line with SO 9001:2015.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <h5>Context of the Organization Seminar and Workshop</h5>
                                            <ul>
                                                <li>To provide COTO Seminar and Workshop in order to evaluate the organization and its internal and external factors which plays an important role in ensuring the effectiveness of the QMS.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                
                                <!-- GALLERY -->
                                <h4>Gallery</h4>

                                <div class="thumb-gallery-wrapper" data-thumbs-items="4" data-thumbs-center="true">
                                    <div class="thumb-gallery-detail owl-carousel owl-theme manual nav-inside nav-style-1 nav-dark mb-3 owl-loaded owl-drag">

                                        <div class="owl-stage-outer owl-height" style="height: 295.969px;"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0.25s ease 0s; width: 2142px;">
                                            <div class="owl-item active" style="width: 295.984px; margin-right: 10px;">
                                                <!-- CHANGE THE IMAGES BY CHANGING THE SOURCE OR SRC -->
                                                <!-- COPY AND PASTE THE DIV ABOVE AND CHANGE THE IMAGES BY THE SOURCE OR SRC -->
                                                <div>
                                                    <img src="../img/article-images/JDVC/36088139_274010436480609_7152311714069872640_n.jpg" class="img-fluid" alt="Presentation">
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="owl-nav">
                                        <button type="button" role="presentation" class="owl-prev disabled"></button>
                                        <button type="button" role="presentation" class="owl-next"></button>
                                    </div>

                                    <div class="owl-dots disabled"></div>
                                    </div>
                                    <div class="thumb-gallery-thumbs owl-carousel owl-theme manual thumb-gallery-thumbs owl-loaded owl-drag">

                                        <div class="owl-stage-outer">
                                            <div class="owl-stage" style="transition: all 0.3s ease 0s; width: 545px; transform: translate3d(117px, 0px, 0px);">

                                                <div class="owl-item active center selected" style="width: 62.746px; margin-right: 15px;">
                                                    <div>
                                                        <!-- CHANGE THE IMAGES BY CHANGING THE SOURCE OR SRC -->
                                                        <!-- COPY AND PASTE THE DIV ABOVE AND CHANGE THE IMAGES BY THE SOURCE OR SRC -->
                                                        <span class="d-block cur-pointer">
                                                            <img src="../img/article-images/JDVC/36088139_274010436480609_7152311714069872640_n.jpg" class="img-fluid" alt="Presentation">
                                                        </span>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div>
                                    </div>
                                </div>

                                <div class="read-more-article-page">
                                    <a href="http://www.jdvcresources.com/jdvcresources/our-organization/#overview" class="btn btn-secondary btn-with-arrow mb-2">Read More<span><i class="fas fa-chevron-right"></i></span></a>
                                </div>

                            </article>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

</div>
```
3. Be sure to read the template given above and do the appropriate change by editing the sidebar, project description, reference links, and pictures.

# Services Page

## How to add or change services
1. Copy and paste the template code below
```
<section id="Quality-Management-Systems" class="section bg-color-white p-0 border-0 my-0">
    <div class="container container-xl-custom">
        <div class="row align-items-center">
            <div class="col-lg-6 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-duration="1s">
                <div class="pe-5">
                    <!-- SERVICE NAME -->
                    <h2 class="font-weight-extra-bold text-color-dark negative-ls-3 line-height-1 text-7 mb-3"><em>QUALITY MANAGEMENT & SYSTEMS</em></h2>									
                    <!-- PROJECT DESCRIPTION -->
                    <p class="lead mb-4 pb-2">We will assist you in achieving quality, safe, and efficient systems by guiding the internal and external processes of your organization through ISO standards.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list list-icons list-style-none text-4 ps-none mb-2 pb-2 pe-3">
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Quality Management Systems (ISO 9001-2015)</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Environmental Management Systems (ISO 14001:2015)</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Occupational Health and Safety Management (ISO 45001:2018)</li>
                                <li class="text-1 text-color-primary mb-0 mb-md-3"><i class="fa fa-check text-primary text-4 me-1"></i> Risk Identification, Documentation and Control (ISO 31000:2018)</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list list-icons list-style-none text-4 ps-none mb-2 pb-2 pe-3">
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Internal Audit (ISO 1901:2018)</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Patent and Industrial Design Registration</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Foods and Drugs Registration</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Corporate Strategic Panning cum Team Building</li>
                                <li class="text-1 text-color-primary mb-3"><i class="fa fa-check text-primary text-4 me-1"></i> Power Generation and Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CHANGE PICTURE ON THIS PART OF THE CODE BY CHANGING THE SOURCE OR SRC OF THE IMAGE -->
            <div class="col-lg-6 fluid-col-lg-6 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-duration="1s" style="min-height: 33vw;">
                <div class="fluid-col">
                    <img src="img/service-image/service1.jpg" class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
```
2. Be sure to read the template code and do the necessary changes within the services.html

# Contact Us Page

## How to change contact information?
1. Go to the contact-us.html file and replace the needed information.