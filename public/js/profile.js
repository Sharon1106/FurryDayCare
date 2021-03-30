let profileInfo;
let saveButton;

if (window.location.pathname === '/profile') {
    profileInfo = document.querySelector('.profile-info');
    saveButton = document.querySelector('.save-profile');
}

let activeProfile = {};

const renderProfile = () => {
  
    if (activeProfile.id) {
      profileInfo.setAttribute();

    } else {
      profileInfo.value = '';
    }
  };


  document
  .querySelector('#profile-saveBtn')
  .addEventListener('click', function(){
      const name = document.querySelector('#profile-name').value;
      const email = document.querySelector('#profile-email').value;
      const number = document.querySelector('#profile-number').value;
      const address = document.querySelector('#profile-address').value;

        // add fetch function 
        
        // callback 

      console.log('save user', name, email, number, address)
  });


  //add fetch 


// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);


// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querlsySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };


