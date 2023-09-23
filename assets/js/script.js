let resume = document.getElementById('resume')
resume.style.display = 'none'

let addSkills = () => {
    let skills = document.getElementById('skills')
    let skillResume = document.getElementById('skillResume')
    let skillList = document.createElement('li')
    skillList.textContent = skills.value
    skillResume.appendChild(skillList)
    skills.value = ""
}

skills.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addSkills()
    }
})


let getResume = () => {
    document.body.style.backgroundImage = 'url(https://img.freepik.com/premium-photo/abstract-blue-background-beautiful-texture_49507-2340.jpg)'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.color = 'black'

    resume.style.display = 'block'

    let inputContainer = document.getElementById('inputContainer')
    inputContainer.style.display = 'none'

    let name = document.getElementById('name')
    localStorage.setItem('name', name.value)
    let nameGet = localStorage.getItem('name')

    let degName = document.getElementById('degName')
    localStorage.setItem('degName', degName.value)
    let degNameGet = localStorage.getItem('degName')

    let degInstitution = document.getElementById('degInstitution')
    localStorage.setItem('degInstitution', degInstitution.value)
    let degInstitutionGet = localStorage.getItem('degInstitution')

    let degYear = document.getElementById('degYear')
    localStorage.setItem('degYear', degYear.value)
    let degYearGet = localStorage.getItem('degYear')

    let degPercent = document.getElementById('degPercent')
    localStorage.setItem('degPercent', degPercent.value)
    let degPercentGet = localStorage.getItem('degPercent')

    let hscInstitution = document.getElementById('hscInstitution')
    localStorage.setItem('hscInstitution', hscInstitution.value)
    let hscInstitutionGet = localStorage.getItem('hscInstitution')

    let hscYear = document.getElementById('hscYear')
    localStorage.setItem('hscYear', hscYear.value)
    let hscYearGet = localStorage.getItem('hscYear')

    let hscPercent = document.getElementById('hscPercent')
    localStorage.setItem('hscPercent', hscPercent.value)
    let hscPercentGet = localStorage.getItem('hscPercent')

    let sslcInstitution = document.getElementById('sslcInstitution')
    localStorage.setItem('sslcInstitution', sslcInstitution.value)
    let sslcInstitutionGet = localStorage.getItem('sslcInstitution')

    let sslcYear = document.getElementById('sslcYear')
    localStorage.setItem('sslcYear', sslcYear.value)
    let sslcYearGet = localStorage.getItem('sslcYear')

    let sslcPercent = document.getElementById('sslcPercent')
    localStorage.setItem('sslcPercent', sslcPercent.value)
    let sslcPercentGet = localStorage.getItem('sslcPercent')

    let email = document.getElementById('email')
    localStorage.setItem('email', email.value)
    let emailGet = localStorage.getItem('email')

    let mobile = document.getElementById('mobile')
    localStorage.setItem('mobile', mobile.value)
    let mobileGet = localStorage.getItem('mobile')

    let linkedin = document.getElementById('linkedin')
    localStorage.setItem('linkedin', linkedin.value)
    let linkedinGet = localStorage.getItem('linkedin')

    let dob = document.getElementById('dob')
    let date = new Date(dob.value)
    let d = date.getDate()
    if (d < 10) {
        d = "0" + d
    }
    let m = date.getMonth() + 1
    if (m < 10) {
        m = "0" + m
    }
    let y = date.getFullYear()

    localStorage.setItem('dob',d+'/'+m+'/'+y)
    let dobGet = localStorage.getItem('dob')

    // Resume
    let resumeName = document.getElementById('resumeName')
    resumeName.textContent = nameGet.toUpperCase()

    let table = document.querySelector('table')
    table.innerHTML = `<thead>
    <tr>
        <th>Course</th>
        <th>Institution</th>
        <th>year of pass</th>
        <th>Percentage</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>${degNameGet}</td>
        <td>${degInstitutionGet}</td>
        <td>${degYearGet}</td>
        <td>${degPercentGet}</td>
    </tr>
    <tr>
        <td>12th</td>
        <td>${hscInstitutionGet}</td>
        <td>${hscYearGet}</td>
        <td>${hscPercentGet}</td>
    </tr>
    <tr>
        <td>10th</td>
        <td>${sslcInstitutionGet}</td>
        <td>${sslcYearGet}</td>
        <td>${sslcPercentGet}</td>
    </tr>
</tbody>`

    let personal = document.getElementById('personal')
    personal.innerHTML = `<h1>Personal information</h1>
<ul>
<li><span>Date Of Birth: </span>${dobGet}</li>
    <li><span>Email: </span>${emailGet}</li>
    <li><span>Mobile: </span>${mobileGet}</li>
    <li><span>LinkedIn: </span>${linkedinGet}</li>
</ul>`

    let footer = document.querySelector('footer')
    footer.innerHTML = `<p>Hereby, I ${nameGet}, declare that all the above information is true and correct to the
best of my knowledge</p>
<p class="name">${nameGet.toUpperCase()}</p>`


}