function copyToClipboard(text, tooltip) {
    navigator.clipboard.writeText(text).then(() => {
        hideTooltip(tooltip); // Hide the tooltip after copying
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function hideTooltip(tooltip) {
    tooltip.style.visibility = 'hidden'; // Hide the tooltip
    tooltip.style.opacity = '0'; // Set opacity to 0 for smooth transition
}

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    const cursorSize = 40; // Size of the cursor (width and height)
    cursor.style.left = (e.pageX - cursorSize / 2) + 'px'; // Center the cursor horizontally
    cursor.style.top = (e.pageY - cursorSize / 2) + 'px'; // Center the cursor vertically
});




let profileCardVisible = false;

function toggleProfileCard() {
    const profileCard = document.getElementById('profile-card');
    profileCardVisible = !profileCardVisible;
    profileCard.classList.toggle('active', profileCardVisible);
}

function showProfileCard() {
    if (!profileCardVisible) {
        document.getElementById('profile-card').classList.add('active');
    }
}

function hideProfileCard() {
    if (!profileCardVisible) {
        document.getElementById('profile-card').classList.remove('active');
    }
}









function showContactForm() {
    const contactFormContainer = document.getElementById('contact-form-container');

    // Check if the contact form is already displayed
    if (contactFormContainer.innerHTML.trim() === '') {
        // If not displayed, show the contact form
        const contactFormHTML = `
        <style>
          

            .container-section {
                max-width: 2000px;
                margin: 60px auto;
            }

            .form-container {
                display: flex;
                flex-wrap: wrap;
                
               

            }

            .content-left {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: white;
                margin-right:50px
                
                
            }
            .text-container-contact {
                max-width: 700px;
                
            }
                

            .text-container-contact h1 {
            
               

                 font-family: 'Playfair Display', 'Garamond', serif; /* Use Playfair Display and Garamond */
                 font-size: 2.5rem; /* Adjust size as needed */
                 margin: 0; /* Remove default margin */
                 background: linear-gradient(to right, #ffffff, #4a4ac4); /* Adjust colors */
                 -webkit-background-clip: text; /* Vendor prefix for Safari */
                 background-clip: text; /* Standard property */
                 color: transparent;
                 text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Soft shadow for 3D look */
            }




            .description {
                color: #b6b6b6;
                line-height: 25px;
            }


             .text-container-contact p {
                font-size: 1.05rem; /* Adjust font size as needed */
                color: #555; /* Change color for better visibility */
                margin-top: 5px; /* Optional: add a small margin for spacing */
               
               
            }

          


            
            .form-right {
                display: flex;
                justify-content: center;
                border: 15px solid #007BFF; /* Light gray border */
                border-radius: 200px; /* Rounded corners */
                 margin-right: 50px;
               
            }

            .form-box {
                background-color: #151617;
                color: white;
                padding: 35px;
                max-width: 506px;
                border: 2px solid #b1a6a6; /* Light gray border */
                border-radius: 70px; /* Rounded corners */
                
            }

            .form-title {
                font-size: 30px;
                margin-bottom: 0px;
            }

            .form-subtitle{
              font-size: 1rem; /* Adjust font size as needed */
              color: #555; /* Change color for better visibility */
              margin-bottom: -10px;

             
            }
           

            .input-fields {
                display: flex;
                flex-wrap: wrap;
                margin-top: 60px;
            }

            .input-wrapper {
                width: 40%;
                margin-bottom: 10px;
                margin-right:50px
                
                
            }

            .input {
                width: 100%;
                height: 50px;
                padding: 0 20px;
                background-color: #212223;
                color: white;
                border: 2px solid #2e2c2c; /* Light gray border */
                border-radius: 70px; /* Rounded corners */
                text-align: center; /* Center the text inside the input */
            }

            .message {
                width: 465px;
                max-width: 465px; /* Set maximum width for the message */
                height: 60px;
                padding: 15px;
                background-color: #212223;
                color: white;
                border: 2px solid #2e2c2c; /* Light gray border */
                border-radius: 20px; /* Rounded corners */
                text-align: center; /* Center the text inside the input */
            }

            .submit-btn {
                width: 90%;
                height: 56px;
                background-color: #146132;
                font-size: 18px;
                font-weight: 600;
                color: white;
                border: 2px solid #2e2c2c; /* Light gray border */
                border-radius: 70px; /* Rounded corners */
                transition: background-color 0.3s, color 0.3s, border 0.3s; /* Smooth transition */
            }
            
        </style>

        
            <div class="container-section">
                <div class="form-container">
                    <div class="content-left">
                        <div class="text-container-contact">
                            <h1 class="main-title">We'd Love to Hear From You!</h1>
                            <p class="description">
                               <p> 𝐖𝐡𝐞𝐭𝐡𝐞𝐫 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧, 𝐟𝐞𝐞𝐝𝐛𝐚𝐜𝐤, 𝐨𝐫 𝐣𝐮𝐬𝐭 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐚𝐲 𝐡𝐞𝐥𝐥𝐨, 𝐰𝐞'𝐫𝐞 𝐡𝐞𝐫𝐞 𝐭𝐨 𝐥𝐢𝐬𝐭𝐞𝐧.</p>
                               <p> 𝐈 𝐚𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐞𝐱𝐜𝐢𝐭𝐞𝐝 𝐭𝐨 𝐜𝐨𝐧𝐧𝐞𝐜𝐭 𝐰𝐢𝐭𝐡 𝐜𝐮𝐫𝐢𝐨𝐮𝐬 𝐦𝐢𝐧𝐝𝐬 𝐚𝐧𝐝 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐰𝐢𝐭𝐡 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠.</p>
                               <p> 𝐅𝐢𝐥𝐥 𝐨𝐮𝐭 𝐭𝐡𝐞 𝐟𝐨𝐫𝐦 𝐛𝐞𝐥𝐨𝐰, 𝐚𝐧𝐝 𝐰𝐞'𝐥𝐥 𝐠𝐞𝐭 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐲𝐨𝐮 𝐚𝐬 𝐬𝐨𝐨𝐧 𝐚𝐬 𝐩𝐨𝐬𝐬𝐢𝐛𝐥𝐞.</p>
                               <p> 𝒀𝒐𝒖𝒓 𝒗𝒐𝒊𝒄𝒆 𝒎𝒂𝒕𝒕𝒆𝒓𝒔, 𝒂𝒏𝒅 𝒘𝒆'𝒓𝒆 𝒋𝒖𝒔𝒕 𝒐𝒏𝒆 𝒄𝒍𝒊𝒄𝒌 𝒂𝒘𝒂𝒚!</p>
                            </p>
                            
                        </div>
                    </div>
                    <div class="form-right">
                        <form class="form-box">
                            <div class="form-details">
                                <p class="form-title">Get A Quote</p>
                                <p class="form-subtitle">𝐄𝐱𝐩𝐞𝐜𝐭 𝐓𝐨 𝐇𝐞𝐚𝐫 𝐅𝐫𝐨𝐦 𝐔𝐬 𝐀𝐒𝐀𝐏.</p>
                                <p class="form-subtitle"> 𝑾𝒆'𝒓𝒆 𝒓𝒆𝒂𝒅𝒚 𝒕𝒐 𝒅𝒊𝒗𝒆 𝒊𝒏𝒕𝒐 𝒚𝒐𝒖𝒓 𝒓𝒆𝒒𝒖𝒆𝒔𝒕 𝒂𝒏𝒅 𝒈𝒆𝒕 𝒃𝒂𝒄𝒌 𝒕𝒐 𝒚𝒐𝒖 𝒃𝒆𝒇𝒐𝒓𝒆 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘 𝒊𝒕!</p>
                                <div class="input-fields">
                                    <div class="input-wrapper"><input class="input" name="FirstName" placeholder="First Name"></div>
                                    <div class="input-wrapper"><input class="input" name="LastName" placeholder="Last Name"></div>
                                    <div class="input-wrapper"><input class="input" name="Email" placeholder="Email"></div>
                                    <div class="input-wrapper"><input class="input" name="PhoneNumber" placeholder="Phone Number"></div>
                                    <div class="input-wrapper"><textarea class="message" placeholder="Type message here"></textarea></div>

            
                                    <div id="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(100px); padding: 20px; border: 2px solid black; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); z-index: 1000;">
                                       <p style="color: #ffffff; font-size: 18px; font-weight: bold;">Submit button clicked!</p>
                                       <button id="close-modal" style="background-color: #007BFF; color: white; border: none; border-radius: 5px; padding: 10px 15px; cursor: pointer;">Close</button>
                                    </div>

                                </div>
                                <button class="submit-btn" type="button">Get quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       
        `;

        contactFormContainer.innerHTML = contactFormHTML;

        // Call the function to apply hover effect after the form is rendered
        handleSubmitButtonHover();
        changeContactButtonColor();
        handleButtonHover();
    } else {
        // If displayed, remove the contact form
        contactFormContainer.innerHTML = '';
    }
}

// Function to handle hover effect on submit button
function handleSubmitButtonHover() {
    const submitButton = document.querySelector('.submit-btn');

    // Check if the button is found
    if (!submitButton) {
        console.error("Submit button not found!");
        return;
    }

    submitButton.addEventListener('mouseenter', () => {
        submitButton.style.backgroundColor = '#0e4d24'; // Darker green background
        submitButton.style.color = '#f0f0f0'; // Lighter text color
        submitButton.style.border = '2px solid #1e7a3d'; // Change border color
        submitButton.style.cursor = 'pointer'; // Change cursor to pointer
    });

    submitButton.addEventListener('mouseleave', () => {
        submitButton.style.backgroundColor = '#146132'; // Original background color
        submitButton.style.color = 'white'; // Original text color
        submitButton.style.border = '2px solid #2e2c2c'; // Original border color
    });

    // Prevent default form submission
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Show modal
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Close modal when the close button is clicked
        document.getElementById('close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
}

// Function to continuously change the background color of the contact button
function changeContactButtonColor() {
    const contactButton = document.getElementById('contact-me-btn');
    const colors = ['#007BFF','#292a2b' ,'#007BFF', '#694d80']; // Array of colors to cycle through
    let currentIndex = 0; // Start with the first color

    // Set the initial color
    contactButton.style.backgroundColor = colors[currentIndex];

    // Change color every 2 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
        contactButton.style.backgroundColor = colors[currentIndex]; // Change the button color
    }, 2000); // Change color every 2000 milliseconds (2 seconds)
}

// Function to handle hover effect on the button
function handleButtonHover() {
    const contactButton = document.getElementById('contact-me-btn');

    contactButton.addEventListener('mouseenter', () => {
        contactButton.style.backgroundColor = '#000000 '; // Change to a specific color on hover (e.g., orange)
    });

    contactButton.addEventListener('mouseleave', () => {
        // Reset to the current cycling color when mouse leaves
        const currentColor = contactButton.style.backgroundColor;
        if (!currentColor || currentColor === 'rgb(255, 69, 0)') { // Check if it's the hover color
            contactButton.style.backgroundColor = ''; // Reset to default color
        }
    });
}


/*
const buttons = document.querySelectorAll('.info-header-container button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});
*/



function showContent(type) {
    const contentContainer = document.querySelector('.Info-Contant-Container');
    
    // Optionally, manage the active state of the buttons
    const buttons = document.querySelectorAll('.info-header-container button');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`${type.charAt(0).toUpperCase() + type.slice(1)}-Button`).classList.add('active');
    
    // Clear existing content
    contentContainer.innerHTML = '';

    // Assign new content based on the button clicked
    let newContent = '';

   // Make sure Start case comes first
   if (type === 'Start') {
       
            newContent = `
            <style>
                /* Wrapper styling */
                .wrapper {
                    position: relative;
                    display: flex;
                    margin-top: 60px;
                    align-items: center;
                    justify-content: center;
                    height: 300px;
                    width: 300px;
                    border-radius: 50%;
                    box-shadow: 
                        0 10px 20px rgba(0, 0, 0, 0.3), /* Outer shadow */
                        inset 0 -5px 10px rgba(255, 255, 255, 0.2), /* Inner shadow */
                        inset 0 5px 10px rgba(0, 0, 0, 0.1); /* Softer inner shadow */
                }

                /* Inner circle styling */
                .wrapper::before {
                    content: "";
                    position: absolute;
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                    box-shadow: 
                        -10px -10px 50px rgba(240, 240, 240, 0.2), /* Stronger outer shadow */
                        10px 10px 15px rgba(0, 0, 0, 0.2); /* Softer outer shadow */
                }

                /* Spinning animation */
                .wrapper span {
                    height: 186px;
                    width: 220px;
                    position: absolute;
                    animation: rotate 5s linear infinite;
                }

                /* Rotation animation keyframes */
                @keyframes rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                /* Spinning circle appearance */
                .wrapper span::before {
                    content: "";
                    position: absolute;
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, rgb(85, 77, 77), rgba(64, 114, 214, 0.8)); /* Color gradient */
                    box-shadow: 0 5px 10px rgba(126, 123, 123, 0.2); /* Soft shadow */
                }
            </style>

            <div class="wrapper">
                <span></span>
            </div>
            `;
           
   }else{
    switch (type) {
    case 'education':
            newContent = `
                <style>
                    .Image-Hover-Animation {
                        height: 500px;
                        display: flex;
                        min-width: 400px;
                        align-items: flex-end;
                        justify-content: center;
                        margin-top: 150px;
                    }
                    .Image-Hover-Animation .icon-image {
                        position: relative;
                        height: 70px;
                        width: 70px;
                        margin: 0 5px;
                        cursor: pointer;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
                        border-radius: 50%;
                        background: #fff;
                    }
                    .Image-Hover-Animation .icon-image .icon img {
                        position: absolute;
                        height: 95%;
                        width: 95%;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        object-fit: cover;
                        border-radius: 50%;
                        border: 3px solid #0396FF;
                    }
                    .Image-Hover-Animation .icon-image::before {
                        content: '';
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        left: 50%;
                        top: -50px;
                        transform: translateX(-50%);
                    }
                    .Image-Hover-Animation .icon-image .hover-image {
                        position: absolute;
                        height: 350px;
                        width: 300px;
                        bottom: 100px;
                        left: 50%;
                        z-index: 0;
                        transform: translateX(-50%);
                        border-radius: 25px;
                        pointer-events: none;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
                        transition: transform 0.5s ease, z-index 0s, left 0.5s ease;
                        transition-delay: 0s, 0.5s, 0.5s;
                    }
                    .Image-Hover-Animation .icon-image:hover .hover-image {
                        left: -200px;
                        z-index: 12;
                        transform: translateX(80px);
                        transition: left 0.5s ease, z-index 0s, transform 0.5s ease;
                        transition-delay: 0s, 0.5s, 0.5s;
                    }
                    .Image-Hover-Animation .hover-image img {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border: 3px solid #fff;
                        border-radius: 25px;
                        
                    }
                    .Image-Hover-Animation .hover-image .content {
                        position: absolute;
                        width: 95%;
                        bottom: -10px;
                        margin-left:10px;
                    }
                    .Image-Hover-Animation .content::before {
                        content: '';
                        position: absolute;
                        height: 20px;
                        width: 20px;
                        background: #fff;
                        left: 50%;
                        bottom: -7px;
                        transform: rotate(45deg) translateX(-50%);
                        z-index: -1;
                    }
                    .Image-Hover-Animation .content .details {
                        position: relative;
                        background: #fff;
                        padding: 10px;
                        border-radius: 12px;
                        text-align: center;
                        opacity: 0;
                        pointer-events: none;
                        transform: translateY(10px);
                    }
                    .Image-Hover-Animation .icon-image:hover .details {
                        transition: all 0.5s ease;
                        transition-delay: 0.9s;
                        opacity: 1;
                        transform: translateY(4px);
                        pointer-events: auto;
                    }
                    .Image-Hover-Animation .details::before {
                        content: '';
                        position: absolute;
                        height: 20px;
                        width: 20px;
                        background: #fff;
                        left: 50%;
                        bottom: -15px;
                        transform: rotate(45deg) translateX(-50%);
                        z-index: -1;
                    }
                    .Image-Hover-Animation .content .details .name {
                        font-size: 20px;
                        font-weight: 500;
                         color: #0396FF;

                    }
                    .Image-Hover-Animation .content .details .job {
                        font-size: 17px;
                        color: #0396FF;
                        margin: -3px 0 5px 0;
                    }
                    .Image-Hover-Animation .content .details a:hover {
                        color: #0396FF;
                    }
                    .Image-Hover-Animation .container .last .hover-image {
                        transition: none;
                    }
                    .Image-Hover-Animation .container .last:hover .hover-image {
                        transition: 0;
                    }
                    .Image-Hover-Animation .last:hover .details {
                        transition-delay: 0s;
                    }
                </style>
                
            <!--<h2>EDUCATION</h2> -->
                
           <div class="O6U-card">

           <div style="display: flex; align-items: center;">
                <!-- First Icon -->
                <span class="O6Uicon top-left">
                    <img src="Images/university.png" alt="University Icon" />
                </span>


                  <!-- Text Section -->
                <div style="text-align: center;">
                   <h1 >OCTOBER 6 UNIVERSITY</h1>
                   <h2>2020-2024</h2>
                </div>

                <span class="O6Uicon top-right">
                    <img src="Images/faculty.svg" alt="Faculty Icon" />
                </span>
              </div>

          
           
            <h3>Faculty of Computer Science & Information Systems</h3>

             <div style="display: flex; margin-top:-60px ; align-items: center;">
                  <h4>Bachelor's degree in Computer Science</h4>
                  <h5>3.17 (Very Good)</h5>
            </div>
            <h6>Graduation Project</h6>

            <div class="Graduation"  style="display: flex ;  margin-top:-90px ;align-items: center;">
                
                <h4>Smart Agriculture Geenhouse System Using IOT</h4>
                <h5>Excellent</h5>
          </div>
            
            <div class="O6U_button">
                <button id="O6U-certificate" onclick="window.open('https://drive.google.com/file/d/1sbCdsnd4IxNaas0YDMRBsnEnjRffod6r/view?usp=sharing', '_blank')">
                    <h4>View Certificate</h4>
                </button>
            </div>            
            
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>
                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>
                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
         </div>
    
                <div class="Image-Hover-Animation">
                    
                   
                   <div class="icon-image">
                        <div class="icon">
                            <img src="Images/gradution/nassar.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/gradution/nassar.JPG" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">Nassar</div>
                                    <div class="job">Designer || Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="icon-image">
                        <div class="icon">
                            <img src="Images/gradution/unv.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/gradution/unv.JPG" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">The Team</div>
                                    <div class="job">Gradution Project</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="icon-image">
                        <div class="icon">
                            <img src="Images/gradution/friend.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/gradution/friend.JPG" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">tgmeعa</div>
                                    <div class="job">The ruin of Egypt</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div class="icon-image">
                        <div class="icon">
                            <img src="Images/gradution/family.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/gradution/family.JPG" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">family</div>
                                    <div class="job">family is the family</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="icon-image">
                        <div class="icon">
                            <img src="Images/gradution/baba.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/gradution/baba.JPG" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">Abo Alyaized Elgohary</div>
                                    <div class="job">Dragon of the Arabic language</div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div class="icon-image last">
                        <div class="icon">
                            <img src="Images/Ahmed3.JPG" alt="" />
                        </div>
                        <div class="hover-image one">
                            <div class="img">
                                <img src="Images/Ahmed2.png" alt="" />
                            </div>
                            <div class="content">
                                <div class="details">
                                    <div class="name">Elgohary</div>
                                    <div class="job">The Big DAY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;




    case 'courses':
            newContent = `
            <style>
            :root {
    --primary: #8b5cf6;
    --primary-light: #a78bfa;
    --secondary: #1f2937;
    --text: #f3f4f6;
    --text-muted: #9ca3af;
    --background: #000000;
    --card-bg: rgba(0, 0, 0, 0.4);
    --card-hover: rgba(0, 0, 0, 0.6);
    --gradient-start: #1f2937;
    --gradient-mid: #000000;
    --gradient-end: #1f2937;
}



body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
    color: var(--text);
    min-height: 100vh;
    padding: 2rem;
}

.course-container {
    width: 90vw;
    padding: 1.5rem;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
           
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

h1 {
    font-size: 2.5rem;
    background: linear-gradient(to right, var(--primary), var(--primary-light));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
}

.sparkle {
    color: var(--primary);
    font-size: 1.5rem;
    animation: pulse 2s infinite;
}



.courses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Exactly three columns */
  gap: 20px;
  padding: 20px;
}

.course-card {
    position: relative;
    background: var(--card-bg);
    border: 0.125rem solid #336;
    border-radius: 1rem;
    overflow: hidden;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
}

.course-card:hover {
    transform: translateY(-5px) scale(1.5);
    background: var(--card-hover);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    border-color: #00f;
}

.glow {
    position: absolute;
    top: -2rem;
    right: -2rem;
    width: 6rem;
    height: 6rem;
    background: var(--primary);
    border-radius: 50%;
    filter: blur(3rem);
    opacity: 0.2;
    transition: all 0.3s ease;
}

.course-card:hover .glow {
    opacity: 0.3;
    transform: scale(1.9);
}

.content {
    position: relative;
    padding: 1.5rem;
}

.course-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.course-header i {
    color: var(--primary);
}

.course-header h3 {
    color: var(--primary);
    font-size: 1.25rem;
}

.location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.875rem;
    margin-top: -0.75rem;
}

p {
    color: var(--text-muted);
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
}

.card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
}

.badge {
    background: rgba(139, 92, 246, 0.1);
    color: var(--primary);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    transition: all 0.3s ease;
}

.badge:hover {
    background: var(--primary);
    color: white;
}

.project-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    text-decoration: none;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.project-btn:hover {
    background: var(--primary);
    color: white;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.6;
    }
}

.course-card:nth-child(1) { animation-delay: 0.1s; }
.course-card:nth-child(2) { animation-delay: 0.3s; }
.course-card:nth-child(3) { animation-delay: 0.5s; }
.course-card:nth-child(4) { animation-delay: 0.7s; }
.course-card:nth-child(5) { animation-delay: 0.9s; }
.course-card:nth-child(6) { animation-delay: 1.1s; }
.course-card:nth-child(7) { animation-delay: 1.3s; }
.course-card:nth-child(8) { animation-delay: 1.5s; }
.course-card:nth-child(9) { animation-delay: 1.7s; }

@media (max-width: 768px) {
    body {
        padding: 1rem;
    }
    
    .courses-grid {
        grid-template-columns: 1fr;
    }
    
    h1 {
        font-size: 2rem;
    }
}
            </style>

    <div class="course-container">
        <header>
            <i class="fas fa-sparkles sparkle"></i>
            <h1>✨ My Learning Journey ✨</h1>
            <i class="fas fa-sparkles sparkle"></i>
        </header>

        <div class="courses-grid">


             <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>🛡️ Jr. Penetration Testing</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>👨‍💻TryHackME</span>
                    </div>
                    <p>
                         🔍 Reconnaissance & Intelligence Gathering
                         🌐 Web Application Vulnerability Testing
                         🔐 Network Security Assessment<br>
                         🧪 Vulnerability Research & Exploitation
                         ⚔️ Post-Exploitation Techniques
                         📊 Security Assessment Reporting<br>
                         🔄 Remediation Verification
                         🛠️ Pentesting Tools Mastery
                     </p>

                    <div class="card-footer">
                       <span class="badge">🗺️ Nmap</span>
                       <span class="badge">🕷️ Burp Suite</span>
                       <span class="badge">🦈 Wireshark</span>
                       <span class="badge">💾 Exploit-DB</span>
                       <span class="badge">🛡️ OWASP ZAP</span>
                        <span class="badge">🛠️ Meterpreter</span>

                        <a href="https://tryhackme.com/certificate/THM-VV8EXH9FPF" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>




            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>🎯 CompTIA PenTest+</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>👨‍💻TryHackME</span>
                    </div>
                    <p>
                        🔏 Engagement Planning & Scoping
                        🧰 Advanced Tool Utilization
                        🔎 Enterprise Reconnaissance<br>
                        ⚡ Multi-vector Exploitation
                        🕸️ Active Directory Penetration
                        🔑 Credential Harvesting<br>
                        🚪 Lateral Movement Techniques
                        📝 Professional Reporting
                     </p>

                    <div class="card-footer">
                       <span class="badge">🐍 Python</span>
                       <span class="badge">🦊 Responder</span>
                       <span class="badge">🦈 🌐 Shodan</span>
                       <span class="badge">💾 📡 Recon-ng</span>
                       <span class="badge">🔑 Hydra</span>
                        <span class="badge">🔨 SQLmap</span>

                        <a href="https://tryhackme.com/certificate/THM-HIMWSGDRUA" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

              <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Fortinet Certified Associate in Cybersecurity(FCA - FortiGate 7.4)</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>👨‍💻Fortinet </span>
                    </div>
                    <p> 
                       🔐 Configuring Interfaces & Routing
                       🛡️ Creating Firewall Policies            <br> 
                       👥 Authenticating Network Users 
                       🔍 Inspecting SSL Traffic                <br> 
                       🦠 Blocking Malware  
                       🌐 Web Filtering & Application Control   <br> 
                       ⚙️ Configuring IPS & VPNs
                       🖥️ System Maintenance & Monitoring
                    </p>

                    <div class="card-footer">
                       <span class="badge">Firewall Configuration</span>
                       <span class="badge">Network User Authentication</span>
                       <span class="badge">SSL Traffic Inspection</span>
                       <span class="badge">Malware Blocking</span>
                       <span class="badge">Web Filtering & Application Control</span>
                        <span class="badge">IPS & VPN Configuration</span>

                        <a href="https://drive.google.com/file/d/10B0_D073QiKqfGhhWlhypgCEqiT9Ls3R/view?usp=sharing" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Cybersecurity Attack and Defense Fundamentals</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>👨‍💻EC-Council (Cousera) </span>
                    </div>
                    <p> 
                      ✺<strong>Ethical Hacking Essentials (EHE):</strong> Learned key ethical hacking techniques like footprinting, scanning, and system hacking.<br> 
                      ✺<strong>Network Defense Essentials (NDE):</strong> Gained skills in designing secure network architectures, configuring firewalls, and using IDS for network defense.<br> 
                      ✺<strong>Digital Forensics Essentials (DFE):</strong> Developed expertise in digital forensics, including evidence acquisition, analysis, and cybercrime investigation techniques.<br> 
                    </p>

                    <div class="card-footer">
                       <span class="badge">Ethical Hacking</span>
                       <span class="badge">Network Defense</span>
                       <span class="badge">Digital Forensics</span>
                       <span class="badge">Incident Response</span>
                        <a href="https://coursera.org/share/00253e4ab5f68885347f52316516ad1f" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>


            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Google Cybersecurity Specialization</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>👨‍💻Google Professional Certification(Cousera) </span>
                    </div>
                    <p> ✺ Identify common cybersecurity risks, threats, and vulnerabilities to enhance organizational security. <br>
                        ✺ Mitigate security risks using techniques learned through hands-on, practice-based assessments. <br>
                        ✺ Utilize beginner-level Python, Linux, and SQL to automate and manage cybersecurity tasks. <br>
                        ✺ Operate SIEM tools and Intrusion Detection Systems (IDS) for threat monitoring. <br>
                        ✺ Respond to security incidents by applying detection and response strategies to protect assets.</p>
                    <div class="card-footer">
                        <span class="badge">Python</span>
                        <span class="badge">Security Information and Event Management (SIEM) </span>
                        <span class="badge">SQL</span>
                        <span class="badge">Linux</span>
                        <span class="badge">IDS</span>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/9V78H5YJXCR7" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Machine Learning Specialization</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Stanford University - DeepLearning.AI (Coursera)</span>
                    </div>
                    <p>The Machine Learning Specialization covered a comprehensive range of modern machine learning concepts and techniques.
                     The courses included supervised learning (linear regression, logistic regression, neural networks, decision trees), 
                     unsupervised learning (clustering, anomaly detection), recommender systems, and reinforcement learning.
                      Participants also learned best practices for building machine learning models and gained practical skills to apply these techniques to real-world challenges.
                       This specialization equips learners with the foundational knowledge and hands-on experience needed to pursue a career in machine learning and AI.</p>
                    <div class="card-footer">
                        <span class="badge">supervised Learning</span>
                        <span class="badge">Unsupervised Learning</span>
                        <span class="badge">Reinforcement Learning </span>
                        <span class="badge">Recommender Systems </span>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/WJVJXJAIDWVP" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            



            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Embedded Systems Diploma</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>AMIT Learning</span>
                    </div>
                    <p>Proficient in Embedded Systems development, including C programming, microcontroller interfacing, real-time operating systems, automotive technologies, AUTOSAR fundamentals, and software testing and validation.</p>
                    <div class="card-footer">
                        <span class="badge">C Programming</span>
                        <span class="badge">Microcontroller Interfacing</span>
                        <span class="badge">Sensors & Actutors</span>
                        <span class="badge">RTOS</span>
                        <span class="badge">Testing and Validation</span>
                        <a href="https://drive.google.com/file/d/12HLR-dEYWHVvvLuzgBh2LohogauDosB9/view?usp=sharing" class="project-btn" target="_blank" rel="noopener noreferrer">
                            View Certificate
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>ALX AiCE - AI Career Essentials</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>🌍 ALX Africa - Online </span>
                    </div>
                    <p>Gain expertise in AI, leverage AI tools for career advancement, and harness AI's power to innovate and drive business success. I've honed my skills in machine learning, deep learning, data science by enabling me to solve real-world problems.</p>
                    <div class="card-footer">
                        <span class="badge">Problem-Solving</span>
                        <span class="badge">Critical Thinking</span>
                        <span class="badge">AI Tools and Frameworks</span>
                        <span class="badge">Machine Learning</span>
                        <span class="badge">Deep Learning</span>
                        <a href="https://drive.google.com/file/d/10oD1qTKtxbUF7GahSXqrMk1f9NXQUBRF/view?usp=drive_link" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Cyber Security BOOTCAMP</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>NTI - Cyberx - MCIT</span>
                    </div>
                    <p>Hackers' arsenal explored: from social engineering and physical attacks to digital threats like deepfakes, phishing, and blockchain vulnerabilities, culminating in hands-on experience with Wi-Fi penetration and red/blue team tactics.</p>
                    <div class="card-footer">
                        <span class="badge">Ethical Hacking</span>
                        <span class="badge">Digital Forensics</span>
                        <span class="badge">Network Security</span>
                        <span class="badge">Cybersecurity Analysis</span>
                        <span class="badge">Incident Response</span>
                        <a href="https://drive.google.com/file/d/118HB6aCuGjopXzoqyF6LKL7D89ORvmEy/view?usp=sharing" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="glow"></div>
                <div class="content">
                    <div class="course-header">
                        <i class="fas fa-star"></i>
                        <h3>Cybersecurity</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Mahara-Tech ITI</span>
                    </div>
                    <p>This comprehensive curriculum covers networking concepts, practical implementation skills, network security strategies, ethical hacking techniques, Linux system administration, virtualization technologies, and cloud computing principles.</p>
                    <div class="card-footer">
                        <span class="badge">Certificate</span>
                        <a href="https://drive.google.com/file/d/12Yk7X9-ijWW3ouFF5Vhvy-q1noSyWZbg/view?usp=sharing" class="project-btn" target="_blank" rel="noopener noreferrer">
                                View Certificate
                                 <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            

           
           
        </div>
    </div>

              
            `;
            break;





    case 'skills':
             newContent = `
  
     <style>
        .header h1{
            text-align: center;
            padding: 3rem;
            z-index: 3; /* Ensure it appears above other content */
            background: linear-gradient(to right, #ffffff, #4a4ac4); /* Adjust colors */
            -webkit-background-clip: text; /* Vendor prefix for Safari */
            background-clip: text; /* Standard property */
            color: transparent;
            border-bottom: 2px solid #0ff;
            font-family: 'Courier New', Courier, monospace;
          

        }

        /* Updated skills container for two-column layout */
        .skills-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            font-family: 'Times New Roman', Times, serif;
        }

        .skill-track {
            flex: 1 1 calc(50% - 1rem); /* Two columns with gap */
            min-width: 300px; /* Minimum width before wrapping */
            margin-bottom: 0; /* Remove margin as we're using gap */
            cursor: pointer;
        }

        .skill-header {
            background: rgba(0, 255, 255, 0.05);
            padding: 1.4rem;
            border-radius: 10px;
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 255, 255, 0.1);
        }

        .skill-header:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
            border-color: #0ff;
        }

        .skill-title-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .skill-title {
            font-size: 1.2rem;
            margin: 0;
        }

        .skill-percentage {
            font-size: 1.2rem;
            color: #fff;
        }

        .progress-container {
            position: relative;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            border-radius: 4px;
            transition: width 1s ease;
        }

        /* Main skill colors */
        .html-bar { background: #6b46c1; }
        .css-bar { background: #ecc94b; }
        .js-bar { background: #e53e3e; }
        .angular-bar { background: #000; }
        .php-bar { background: #e53e3e; }
        .wp-bar { background: #00a0d2; }

        .sub-skills {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
            background: rgba(0, 255, 255, 0.02);
            border-radius: 0 0 10px 10px;
            margin-top: -10px;
            position: relative;
            z-index: 10;
        }

        .sub-skills.active {
            max-height: 500px;
            padding: 1.5rem;
            border: 1px solid rgba(0, 255, 255, 0.1);
            border-top: none;
        }

        .sub-skill {
            margin: 1rem 0;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
        }

        .sub-skills.active .sub-skill {
            opacity: 1;
            transform: translateY(0);
        }

        .sub-skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .sub-skill-name {
            color: #ccc;
        }

        .sub-skill-level {
            color: #fff;
        }

        .sub-skill .progress-container {
            height: 6px;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .skills-container {
                flex-direction: column;
            }
            
            .skill-track {
                flex: 1 1 100%;
            }
        }




        
         .template {
            min-height: auto;
            padding: 2rem;
            display: none;
        }

        .template.active {
            display: block;
        }

        .template-nav {
            margin-top:150px;
            left: 50%;
            background: rgba(26, 26, 26, 0.95);
            padding: 1rem 2rem;
            display: flex;
            justify-content: center;
            gap: 1rem;
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-radius: 50px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            width: auto;
            max-width: 90%;
        }

        .nav-btn {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.5rem 1.5rem;
            border-radius: 20px;
            transition: all 0.3s ease;
            font-size: 1.5rem;
            font-family: 'Courier New', Courier, monospace;
        }

        .nav-btn:hover {
            background: rgba(255, 107, 107, 0.2);
        }

        .nav-btn.active {
            background: #000000;
            border: 2px solid #423e3e; /* Border */
        }

       /* Template 1 - Languages (Hexagon) */
        .template-1::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
        }

        .template-1 .content {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            min-height: 100%;
            width: 100%;
            overflow: visible;
        }

        .template-1 .skills-hexagon {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            padding: 2rem 1rem;
            margin: 0 auto;
            width: 100%;
            overflow: visible;
        }

        .template-1 .skill-hex {
            width: 150px;
            height: 173px;
            background: #1a1a1a;
            position: relative;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
            gap: 0.5rem;
        }

        .language-icon {
         width: 40px;
         height: 40px;
         object-fit: contain;
         margin-bottom: 0.5rem;
        }

        .template-1 .skill-hex span {
            font-family: 'Courier New', Courier, monospace;
        }

        .template-1 .skill-hex:hover {
            transform: scale(1.1);
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        }

        /* Template 2 - Tools */
        .template-2 .skills-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            padding: 2rem;
            align-items: center;
            margin-top: 50px;
            width: 100%;
            overflow: visible;
        }

        .template-2 .skill-item {
            background: #1e1e1e;
            padding: 1rem 2rem;
            border-radius: 20px;
            position: relative;
            overflow: visible;
            display: flex;
            align-items: center;
            gap: 1rem;
            min-width: 200px;
            justify-content: center;
        }

        .template-2 .skill-item i {
            font-size: 1.5rem;
            z-index: 1;
        }

        .template-2 .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 0;
        }

        .template-2 .skill-item:hover::before {
            opacity: 0.1;
        }

        .template-2 .skill-item span {
            z-index: 1;
        }

        /* Template 3 - Libraries */
        .template-3 .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            padding: 1rem;
            margin-top: 30px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            overflow: visible;
        }

        .template-3 .skill-card {
            background: #1a1a1a;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            min-width: 200px;
            max-width: 300px;
            overflow: visible;
        }

        .template-3 .skill-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(78, 205, 196, 0.2);
        }

        .template-3 .skill-card i {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        

         /* Template 4 - security tools */
        .template-4::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
        }

        .template-4 .content {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            min-height: 100%;
            width: 100%;
            overflow: visible;
        }

        .template-4 .skills-hexagon {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            padding: 2rem 1rem;
            margin: 0 auto;
            width: 100%;
            overflow: visible;
        }

        .template-4 .skill-hex {
            width: 150px;
            height: 173px;
            background: #1a1a1a;
            position: relative;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
            gap: 0.5rem;
        }

        .language-icon {
         width: 60px;
         height: 40px;
         object-fit: contain;
         margin-bottom: 0.5rem;
        }
        .cyber-icon{
         width: 60px;
         height: 60px;
         object-fit: contain;
         margin-bottom: 0.5rem;
        }

        .template-4 .skill-hex span {
            font-family: 'Courier New', Courier, monospace;
        }

        .template-4 .skill-hex:hover {
            transform: scale(1.1);
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        }



        .skill-description {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-top: 0.5rem;
        }

        /* Media Queries */
        @media screen and (max-width: 768px) {
            .template-3 .skills-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media screen and (max-width: 480px) {
            .template-3 .skills-grid {
                grid-template-columns: 1fr;
            }
        }
     </style>


    
     <section class="SkillSection">
        <div class="header">
            <h1>My Skills</h1>
        </div>
        <div class="skills-container">

            <!-- Artificial intelligence (AI) -->
            <div class="skill-track">
               <div class="skill-header">
                    <div class="skill-title-wrapper">
                        <h3 class="skill-title">Artificial Intelligence (AI)❤️ </h3>
                        <span class="skill-percentage">95%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar html-bar" style="width: 95%"></div>
                    </div>
                </div>
                <div class="sub-skills">
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Data science</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Data analysis</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Machine Learning</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Deep Learning</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Computer vision</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Natural language processing</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar html-bar" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cybersecurity -->
            <div class="skill-track">
                <div class="skill-header">
                    <div class="skill-title-wrapper">
                        <h3 class="skill-title">Cybersecurity</h3>
                        <span class="skill-percentage">90%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar js-bar" style="width: 90%"></div>
                    </div>
                </div>
                
                <div class="sub-skills">
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Network security</span>
                            <span class="sub-skill-level">95%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 95%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Threat Intelligence</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Operating systems</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">SIEM Tools</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Forensics Tools</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Firewall and IDS/IPS</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Vulnerability Scanners</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Endpoint Detection and Response (EDR)</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar js-bar" style="width: 85%"></div>
                        </div>
                    </div>



                </div>
            </div>






            <!-- Embedded systems -->
            <div class="skill-track">
                <div class="skill-header">
                    <div class="skill-title-wrapper">
                        <h3 class="skill-title">Embedded systems</h3>
                        <span class="skill-percentage">85%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar css-bar" style="width: 85%"></div>
                    </div>
                </div>
                <div class="sub-skills">


                     <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">C (Programming Language)</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Computer Architecture</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Microcontroller Interfacing (AVR & ARM)</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Software Testing and Validation</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Real-Time Operating Systems (RTOS)</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Automotive Bus Technology</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">Communication protocols</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">AUTOSAR</span>
                            <span class="sub-skill-level">80%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar css-bar" style="width: 80%"></div>
                        </div>
                    </div>





                </div>
            </div>

            <!-- Full stack developer -->
            <div class="skill-track">
                <div class="skill-header">
                    <div class="skill-title-wrapper">
                        <h3 class="skill-title">Full stack developer</h3>
                        <span class="skill-percentage">70%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar angular-bar" style="width: 70%"></div>
                    </div>
                </div>
                <div class="sub-skills">
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">HTML</span>
                            <span class="sub-skill-level">90%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar angular-bar" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">CSS</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar angular-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="sub-skill">
                        <div class="sub-skill-header">
                            <span class="sub-skill-name">JavaScript</span>
                            <span class="sub-skill-level">85%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar angular-bar" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
     </section>








     <!-- Template Navigation -->
     <div class="template-nav">
        <button class="nav-btn active" onclick="showTemplate(1)">Programing</button>
        <button class="nav-btn" onclick="showTemplate(2)">Dev Tools</button>
        <button class="nav-btn" onclick="showTemplate(3)">Libraries</button>
        <button class="nav-btn" onclick="showTemplate(3)">Security Tools</button>
     </div>

     <!-- Template 1 - Programming Languages -->
     <div class="template template-1 active">
        <div class="content">
            <div class="skills-hexagon">
                
               
                <!-- Hexagon sections for programming languages -->
                <div class="skill-hex">
                    <img src="./Images/programing/Python.svg" alt="Python Logo" class="language-icon">
                    <span>Python</span>
                </div>
                <div class="skill-hex">
                    <img src="./Images/programing/C++.svg" alt="C++ Logo" class="language-icon">
                    <span>C++</span>
                </div>
                <div class="skill-hex">
                    <img src="./Images/programing/C.svg" alt="C Logo" class="language-icon">
                    <span>C</span>
                </div>
                <div class="skill-hex">
                    <img src="./Images/programing/Dart.svg" alt="Dart Logo" class="language-icon">
                    <span>Dart</span>
                </div>
                <div class="skill-hex">
                   <img src="./Images/programing/Sql.svg" alt="SQL Logo" class="language-icon">
                   <span>SQL</span>
               </div>
               <div class="skill-hex">
                    <img src="./Images/programing/html5.svg" alt="HTML5 Logo" class="language-icon">
                    <span>HTML5</span>
                </div>
                <div class="skill-hex">
                    <img src="./Images/programing/css3.svg" alt="CSS 3 Logo" class="language-icon">
                    <span>CSS3</span>
                </div>
                <div class="skill-hex">
                    <img src="./Images/programing/javascript.svg" alt="JavaScript Logo" class="language-icon">
                    <span>JavaScript</span>
                </div>
                
            </div>
        </div>
     </div>

     <!-- Template 2 - Development Tools -->
     <div class="template template-2">
        <div class="skills-container">
            <!-- General Development Tools -->
            <div class="skill-item">
                <i class="fa-solid fa-code"></i>
                <span>VS Code</span>
            </div>
             <div class="skill-item">
                <i class="fa-solid fa-code"></i>
                <span>cursor</span>
            </div>
            
            <div class="skill-item">
                <i class="fa-solid fa-terminal"></i>
                <span>Git Bash</span>
            </div>
            <div class="skill-item">
                <i class="fa-brands fa-github"></i>
                <span>GitHub</span>
            </div>
            
            <div class="skill-item">
                <i class="fa-solid fa-box"></i>
                <span>Docker</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-laptop-code"></i>
                <span>Postman</span>
            </div>

            <!-- AI Development Tools -->
            <div class="skill-item">
                <i class="fa-solid fa-brain"></i>
                <span>Jupyter Notebook</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-chart-line"></i>
                <span>Google Colab</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-chart-line"></i>
                <span>kaggle</span>
            </div>

            <div class="skill-item">
                <i class="fa-solid fa-microchip"></i>
                <span>TensorFlow</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-robot"></i>
                <span>PyTorch</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-network-wired"></i>
                <span>Keras</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-cloud"></i>
                <span>Hugging Face</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-flask"></i>
                <span>Scikit-learn</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-chart-bar"></i>
                <span>MLflow</span>
            </div>

            <!-- Cybersecurity Tools -->
            <div class="skill-item">
                <i class="fa-solid fa-shield-alt"></i>
                <span>Kali Linux</span>
            </div>
            
            
            
            
            
        </div>
     </div>

     <!-- Template 3 - Libraries & Frameworks -->
     <div class="template template-3">
        <div class="skills-grid">
            <div class="skill-card">
                <i class="fa-solid fa-chart-line"></i>
                <div>NumPy</div>
                <div class="skill-description">Scientific computing</div>
            </div>
            <div class="skill-card">
                <i class="fa-solid fa-table"></i>
                <div>Pandas</div>
                <div class="skill-description">Data manipulation & analysis</div>
            </div>
            <div class="skill-card">
                <i class="fa-solid fa-flask"></i>
                <div>Scikit-learn</div>
                <div class="skill-description">Machine learning library</div>
            </div>
            <div class="skill-card">
                <i class="fa-solid fa-chart-bar"></i>
                <div>Matplotlib</div>
                <div class="skill-description">Data visualization</div>
            </div>
            <div class="skill-card">
                <i class="fa-solid fa-brain"></i>
                <div>TensorFlow</div>
                <div class="skill-description">Machine learning framework</div>
            </div>
            <div class="skill-card">
                <i class="fa-solid fa-network-wired"></i>
                <div>Express.js</div>
                <div class="skill-description">Web application framework</div>
            </div>
            
        </div>
     </div>

     <!-- Template 4 - Libraries & Frameworks -->
     <div class="template template-4">
        <div class="content">
            <div class="skills-hexagon">
               <!-- Hexagon sections for Cybersecurity Tools -->

    <!-- Network Security -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/wireshark.svg" alt="Wireshark Logo" class="cyber-icon">
        <span>Wireshark</span>
    </div>
    <div class="skill-hex">
        <img src="./Images/cybersecurity/nmap.svg" alt="Nmap Logo" class="cyber-icon">
        <span>Nmap</span>
    </div>
    <div class="skill-hex">
        <img src="./Images/cybersecurity/snort.svg" alt="Snort Logo" class="cyber-icon">
        <span>Snort</span>
    </div>

    <!-- Penetration Testing -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/metasploit.svg" alt="Metasploit Logo" class="cyber-icon">
        <span>Metasploit</span>
    </div>
    <div class="skill-hex">
        <img src="./Images/cybersecurity/burpsuite.svg" alt="Burp Suite Logo" class="cyber-icon">
        <span>Burp Suite</span>
    </div>
  

    <!-- SIEM -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/splunk.svg" alt="Splunk Logo" class="cyber-icon">
        <span>Splunk</span>
    </div>


    <!-- Forensics -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/icon.ico" alt="Autopsy Logo" class="cyber-icon">
        <span>Autopsy</span>
    </div>
    <div class="skill-hex">
        <img src="./Images/cybersecurity/ghidra.svg" alt="Ghidra Logo" class="cyber-icon">
        <span>Ghidra</span>
    </div>

    <!-- Wireless Security -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/aircrack-ng.jpg" alt="Aircrack-ng Logo" class="cyber-icon">
        <span>Aircrack-ng</span>
    </div>
  
    

    <!-- Social Engineering -->
    <div class="skill-hex">
        <img src="./Images/cybersecurity/setoolkit.svg" alt="SET Logo" class="cyber-icon">
        <span>SET</span>
    </div>
    <div class="skill-hex">
        <img src="./Images/cybersecurity/beef.svg" alt="BeEF Logo" class="cyber-icon">
        <span>BeEF</span>
    </div>

    
</div>

        </div>
     </div>

     `;
            break;    




    case 'experience':
     newContent = `
     <style>
    /* Ensures the container takes up the full screen height */
    .experience-container {
        width: 100vw;
        padding: 1.5rem;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .timeline {
        position: relative;
        width: 100%;
        max-width: 1850px;
        padding: 2rem 0;
    }

   .timeline-line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(99, 102, 241, 0.3);
        transform: translateX(-50%);
    }

    .experience-card {
        position: relative;
        width: calc(45% - 2rem);
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(31, 31, 35, 0.95);
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .experience-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 25px rgba(99, 102, 241, 0.2);
    }

    .experience-card:nth-child(odd) {
        margin-right: auto;
    }

    .experience-card:nth-child(even) {
        margin-left: auto;
    }

    .timeline-dot {
        position: absolute;
        right: -2.5rem;
        top: 2rem;
        width: 1rem;
        height: 1rem;
        background: rgb(99, 102, 241);
        border-radius: 50%;
        transform: translateX(50%);
        box-shadow: 0 0 10px 4px rgba(99, 102, 241, 0.3);
    }

    .experience-card:nth-child(even) .timeline-dot {
        right: auto;
        left: -2.5rem;
        transform: translateX(-50%);
    }

    .card-header {
        display: flex;
        align-items: center;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: rgb(167, 139, 250);
        margin-bottom: 0.5rem;
        flex: 1;
    }

    .company-logo {
        width: 90px;
        height: 70px;
        margin-left: 0.5rem;
        margin-top:-0.5rem;
       
    }
 .card-subtitle {
        display: flex;
        justify-content: space-between;
        color: #94a3b8;
        font-size: 0.99rem;
        margin-bottom: 1.5rem;
        font-family: 'Courier New', Courier, monospace;
    }

    .card-meta {
        gap: 0.5rem;
        align-items: center;
    }

    .card-details {
        color: #e2e8f0;
        margin: 1rem 0;
    }

    .card-details ul {
        list-style-type: disc;
        margin-left: 1.5rem;
       font-family: 'Times New Roman', Times, serif;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .skill-badge {
        padding: 0.25rem 0.75rem;
        background: rgba(99, 102, 241, 0.2);
        color: rgb(167, 139, 250);
        border-radius: 9999px;
        font-size: 0.875rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .experience-card {
            width: 80%;
            margin: 1rem 0;
        }

        .timeline-line {
            left: 1rem;
        }

        .timeline-dot {
            left: 1rem;
            right: auto;
            transform: translateX(-50%);
        }

        .experience-card:nth-child(even) .timeline-dot {
            left: 1rem;
        }
    }
</style>

<div class="experience-container">
    <div class="timeline">
       <div class="timeline-line"></div>

       <div class="experience-card">
            <div class="timeline-dot"></div>
            <div class="card-header">
                <h3 class="card-title"> Artificial Intelligence in  Cybersecurity </h3>
                <img src="Images/work/NTI.png" alt="Creative Solutions Logo" class="company-logo">
            </div>
            <div class="card-subtitle">
                <span class="card-meta">National Telecommunication Institute (NTI)</span>
                <span class="card-meta">March 2025 - Present . 4 mos </span>
            </div>
            <div class="card-details">
                <ul>
                    <li><strong>Foundations of AI & Cybersecurity:</strong> Covers AI basics, historical evolution, and its applications; introduces core cybersecurity concepts, types of threats, and security frameworks.</li>
                    <li><strong>Machine Learning & Deep Learning Techniques:</strong> Explores supervised, unsupervised, and reinforcement learning; key ML algorithms like Decision Trees and SVM; dives into Neural Networks including CNNs, RNNs, LSTMs, and GANs.</li>
                    <li><strong>AI in Cybersecurity Applications:</strong> Focuses on threat detection using AI, anomaly detection, intrusion detection systems (IDS), and real-world case studies.</li>
                    <li><strong>Cybersecurity Data Handling:</strong> Teaches data collection, preprocessing, log analysis, incident response, and the use of Big Data tools like Hadoop and Spark.</li>
                    <li><strong>Advanced AI & Project Implementation:</strong> Discusses AI in authentication, encryption, and ethical hacking; concludes with a hands-on AI project addressing cybersecurity challenges.</li>

                </ul>
            </div>
            <div class="skills-list">
                <span class="skill-badge">Artificial Intelligence (AI)</span>
                <span class="skill-badge">Cybersecurity Fundamentals</span>
                <span class="skill-badge">Machine Learning (ML)</span>
                <span class="skill-badge">Deep Learning (DL)</span>
                <span class="skill-badge">Threat Detection</span>
                <span class="skill-badge">Neural Networks</span>
                <span class="skill-badge">TensorFlow & Keras</span>
                <span class="skill-badge">Data Preprocessing</span>
                <span class="skill-badge">Big Data (Hadoop & Spark)</span>
                <span class="skill-badge">Ethical Hacking with AI</span>

            </div>
        </div>


        <div class="experience-card">
            <div class="timeline-dot"></div>
            <div class="card-header">
                <h3 class="card-title">CyberSecurity Engineer</h3>
                <img src="Images/work/DEBI-EN.png" alt="Tech Innovators Logo" class="company-logo">
            </div>
            <div class="card-subtitle">
                <span class="card-meta">Digital Egypt Builders Initiative- DEBI</span>
                <span class="card-meta">Oct 2024 - Present . 9 mos</span>
            </div>
            <div class="card-details">
                <ul>
                    <li><strong>Practical Penetration Testing and Red Team Techniques:</strong> Gained hands-on experience in penetration testing through TryHackMe's CompTIA Pentest+ and JR Penetration Tester paths; covered enumeration, vulnerability scanning, exploitation, and post-exploitation phases.</li>
                    <li><strong>Security Operations Center (SOC) Level 1 & 2 Experience:</strong> Completed SOC Level 1 and SOC Level 2 paths on TryHackMe, focusing on log analysis, incident detection, SIEM tools, and real-world SOC workflows for threat identification and response.</li>
                    <li><strong>Cybersecurity Fundamentals & Risk Management:</strong> Earned Google Cybersecurity Specialization on Coursera; covered security foundations, threat modeling, Linux & SQL for cybersecurity, incident response, and automated security tasks using Python.</li>
                    <li><strong>Ethical Hacking and Network Defense Skills:</strong> Completed EC-Council Specialization (Coursera) in Ethical Hacking Essentials and Network Defense Essentials; learned attack techniques, ethical hacking methodology, and defense strategies to protect systems.</li>
                    <li><strong>Data Communication & Network Infrastructure:</strong> Achieved Huawei HCIA Data Communication certification; developed knowledge in routing, switching, TCP/IP, and network infrastructure critical to secure communications.</li>
                    <li><strong>Governance, Risk, and Compliance (GRC) & Cryptography:</strong> Attended specialized workshops on GRC and cryptography; explored risk management frameworks, compliance standards, encryption algorithms, digital signatures, and secure key management practices.</li>

                </ul>
            </div>
            <div class="skills-list">
               <span class="skill-badge">Penetration Testing</span>
               <span class="skill-badge">Vulnerability Assessment</span>
               <span class="skill-badge">Incident Response</span>
               <span class="skill-badge">Threat Hunting</span>
               <span class="skill-badge">SOC Operations</span>
               <span class="skill-badge">Linux for Cybersecurity</span>
               <span class="skill-badge">SQL for Security</span>
               <span class="skill-badge">Python for Cybersecurity</span>
               <span class="skill-badge">Network Defense</span>
               <span class="skill-badge">Ethical Hacking</span>
               <span class="skill-badge">Risk Management</span>
               <span class="skill-badge">Security Information and Event Management (SIEM)</span>
               <span class="skill-badge">Cryptography</span>
               <span class="skill-badge">GRC (Governance, Risk, and Compliance)</span>
               <span class="skill-badge">Data Communication Protocols</span>

            </div>
        </div>

        <div class="experience-card">
            <div class="timeline-dot"></div>
            <div class="card-header">
                <h3 class="card-title">Microsoft Machine Learning Engineer</h3>
                <img src="Images/work/DEPI-EN.png" alt="Creative Solutions Logo" class="company-logo">
            </div>
            <div class="card-subtitle">
                <span class="card-meta">Digital Egypt Pioneers Initiative - DEPI</span>
                <span class="card-meta">Jun 2024 - Nov 2024 . 6 mos</span>
            </div>
            <div class="card-details">
                <ul>
                    <li>Applied foundational concepts in Statistics and Linear Algebra for data analysis and problem-solving.</li>
                    <li>Developed and deployed data-driven solutions and machine learning models using Python.</li>
                    <li>Achieved proficiency in Azure AI, including earning the Azure AI Engineer Associate certification.</li>
                    <li>Designed and implemented NLP systems with Attention Models and built GANs for generative tasks.</li>
                    <li>Utilized MLOps tools, including MLflow and Hugging Face, to manage and optimize machine learning projects.</li>
                </ul>
            </div>
            <div class="skills-list">
                <span class="skill-badge">Python</span>
                <span class="skill-badge">Data Science</span>
                <span class="skill-badge">Machine Learning</span>
                <span class="skill-badge">Deep Learning</span>
                <span class="skill-badge">Natural Language Processing (NLP)</span>
                <span class="skill-badge">Computer Vision</span>
                <span class="skill-badge">Microsoft Azure</span>
                <span class="skill-badge">GANs</span>
                <span class="skill-badge">MLOps</span>
                <span class="skill-badge">Hugging Face</span>
               
            </div>
        </div>




        <div class="experience-card">
            <div class="timeline-dot"></div>
            <div class="card-header">
                <h3 class="card-title">Machine Learning for Data Analysis trainee </h3>
                <img src="Images/work/NTI.png" alt="Creative Solutions Logo" class="company-logo">
            </div>
            <div class="card-subtitle">
                <span class="card-meta">National Telecommunication Institute (NTI)</span>
                <span class="card-meta">Sep 2024 - Oct 2024 · 2 mos</span>
            </div>
            <div class="card-details">
                <ul>
                    <li>AI and Machine Learning Foundations: Gained comprehensive knowledge in AI concepts and their applications across domains.</li>
                    <li>Data Preprocessing Skills: Proficient in handling CSV and Excel files, text, and image data preprocessing, including techniques like tokenization, lemmatization, augmentation, and using OpenCV for image processing.</li>
                    <li>Model Building and Optimization: Built and optimized machine learning algorithms (regression, classification, clustering) and deep learning models (CNNs, RNNs) for diverse data analysis tasks.</li>
                    <li>Performance Evaluation: Evaluated models using key metrics like accuracy, precision, recall, and F1-score to ensure high-quality results.</li>
                    <li>Soft Skills Development: Developed communication, collaboration, leadership, and problem-solving skills, with a strong focus on continuous learning and effective time management.</li>
                    <li>Freelancing Experience: Delivered data analysis and machine learning services to clients, managed client relationships, and successfully completed AI-related freelance projects.</li>
                </ul>
            </div>
            <div class="skills-list">
                <span class="skill-badge">Python</span>
                <span class="skill-badge">Data Analysis</span>
                <span class="skill-badge">Data Preparation</span>
                <span class="skill-badge">Machine Learning</span>
                <span class="skill-badge">Deep Learning</span>
            </div>
        </div>
        


    </div>
</div>


 `;
 break;

       

        default:
            newContent = '<p>Select a category to see the content.</p>';
    }
   }
    // Insert the new content into the container
    contentContainer.innerHTML = newContent;
    
    // If we're showing skills section, set up the event listeners
    if (type === 'skills') {
        // Set up event listeners after content is added
        const skillTracks = document.querySelectorAll('.skill-track');
        
        skillTracks.forEach(track => {
            track.addEventListener('click', function() {
                // Close all other sub-skills
                skillTracks.forEach(otherTrack => {
                    if (otherTrack !== track) {
                        const otherSubSkills = otherTrack.querySelector('.sub-skills');
                        if (otherSubSkills) {
                            otherSubSkills.classList.remove('active');
                            const otherHeader = otherTrack.querySelector('.skill-header');
                            if (otherHeader) {
                                otherHeader.style.transform = '';
                                otherHeader.style.borderColor = 'rgba(0, 255, 255, 0.1)';
                            }
                        }
                    }
                });

                // Toggle current sub-skills
                const subSkills = this.querySelector('.sub-skills');
                if (subSkills) {
                    subSkills.classList.toggle('active');
                }

                // Animate skill header
                const skillHeader = this.querySelector('.skill-header');
                if (skillHeader) {
                    skillHeader.style.transform = 'translateY(-5px)';
                    skillHeader.style.borderColor = '#0ff';
                    
                    setTimeout(() => {
                        if (!subSkills.classList.contains('active')) {
                            skillHeader.style.transform = '';
                            skillHeader.style.borderColor = 'rgba(0, 255, 255, 0.1)';
                        }
                    }, 300);
                }
            });
        });

        function showTemplate(num) {
            document.querySelectorAll('.template').forEach(template => {
                template.classList.remove('active');
            });
            document.querySelector(`.template-${num}`).classList.add('active');
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.nav-btn')[num-1].classList.add('active');

        }
        

        // Add click event listeners for template navigation buttons
        document.querySelectorAll('.nav-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => showTemplate(index + 1));
        });


    }



}



// Call showContent with 'Start' when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showContent('Start');
});























// Projects Page

       

// Function to toggle main category
function toggleMainField(element) {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
    }
}

// Function to toggle subcategory
function toggleSubField(element, event) {
    // Prevent the click event from bubbling up to parent elements
    event.stopPropagation();
    
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    const parentContent = element.closest('.field-content');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        // Update parent's maxHeight to accommodate the expanded subcontent
        parentContent.style.maxHeight = parentContent.scrollHeight + content.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
    }
}
