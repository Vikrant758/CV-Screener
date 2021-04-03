console.log('This is Project CV Screener');

const data = [
    {
        name: 'Neel Dave',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },

    {
        name: 'Atharva Chavan',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/47.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/21.jpg'
    }
];


//cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                {
                    value: profiles[nextIndex++], done: false
                } :
                {
                    done: true
                };
        }
    }
}

const candidates = cvIterator(data);
nextCV();
//Button Listener for next button

const next = document.getElementById('next');
next.addEventListener('click', nextCV );


//Function to show next Profilee

function nextCV(){
    let currentCandidate = candidates.next().value;
    let image = document.getElementById('img');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src="${currentCandidate.image}">`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in${currentCandidate.city}</li>
    <li class="list-group-item">Prefer ${currentCandidate.language} laguage</li>
    <li class="list-group-item"> Use ${currentCandidate.framework} framework</li>
    
  </ul>`}
  else{
      alert('No More Candidates are present');
      window.location.reload();
  }
}