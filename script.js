// Simulated function to fetch geological disaster data
function fetchGeologicalDisasters(startDate, endDate) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { date: "2023-01-15", type: "Flood", location: "Location 1" },
                { date: "2023-01-20", type: "Landslide", location: "Location 2" },
            ]);
        }, 1000);
    });
}

form.onsubmit = function (event) {
    event.preventDefault();
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;

    // Fetch geological disasters data
    fetchGeologicalDisasters(startDate, endDate)
        .then((data) => {
            // Clear the list and display the results
            var resultsDiv = document.getElementById("geologicalDisasterResults");
            var list = document.getElementById("geologicalDisasterList");
            list.innerHTML = "";

            data.forEach((disaster) => {
                var listItem = document.createElement("li");
                listItem.textContent = `${disaster.date} - ${disaster.type} - ${disaster.location}`;
                list.appendChild(listItem);
            });

            resultsDiv.style.display = "block";
        })
        .catch((error) => {
            // Handle errors
            console.error("Error fetching geological disaster data:", error);
        });
};
document.getElementById("geologicalDisasterBtn").addEventListener("click", function () {
    var content = document.getElementById("geologicalDisasterContent");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((countries) => {
            var countryDropdown = document.querySelector(".dropdown2 .dropdown-content");


            countries.forEach((country) => {
                var option = document.createElement("p");
                option.classList.add("country-option");
                option.textContent = country.name.common;
                option.setAttribute("data-lat", country.latlng[0]);
                option.setAttribute("data-lng", country.latlng[1]);
                countryDropdown.appendChild(option);
            });

            // Add event listeners to the country options
            var countryOptions = document.querySelectorAll(".country-option");
            countryOptions.forEach(function (option) {
                option.addEventListener("click", function () {
                    var lat = parseFloat(this.getAttribute("data-lat"));
                    var lng = parseFloat(this.getAttribute("data-lng"));
                    map.setView([lat, lng], 6);
                });
            });
        });
}

fetchCountries();


// Get the dropdown container
var dropdownContainer = document.querySelector('.dropdown2 .dropdown-content');

// Get all the country options
var countryOptions = document.querySelectorAll('.country-option');

// Add an event listener to the input field
input.addEventListener('input', function () {
    // Get the value of the input field and convert to lowercase
    var value = input.value.toLowerCase();

    // Filter the country options to get only those that match the search query
    var filteredOptions = Array.from(countryOptions).filter(function (option) {
        return option.textContent.toLowerCase().startsWith(value);
    });

    // Clear the dropdown container
    dropdownContainer.innerHTML = '';

    // Add the filtered options to the dropdown container
    filteredOptions.forEach(function (option) {
        dropdownContainer.appendChild(option);
    });
});

const titleInput = card.querySelector('.title-input');
const descriptionInput = card.querySelector('.description-input');
const imageInput = card.querySelector('.image-input');
const imagePreview = card.querySelector('.image-preview');
const submitButton = card.querySelector('.submit-button');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      imagePreview.style.backgroundImage = `url(${this.result})`;
    });
    reader.readAsDataURL(file);
  }
});

submitButton.addEventListener('click', function() {
  const title = titleInput.value;
  const description = descriptionInput.value;
  const imageFile = imageInput.files[0];
  
  // TODO: 将数据上传到服务器或进行其他处理
});

const addButton = document.getElementById('add-button');
const card = document.querySelector('.card');

addButton.addEventListener('click', function() {
  // 切换 card 元素的可见性
  card.style.display = card.style.display === 'none' ? 'block' : 'none';

  // 更改“添加”按钮的文本
  addButton.textContent = card.style.display === 'none' ? 'Add Image' : 'Hide Form';
});
// 获取删除按钮和图像元素
const deleteButton = document.querySelector('.delete-button');
const modalImage = document.querySelector('.modal-image');

// 添加点击事件监听器
deleteButton.addEventListener('click', () => {
  // 调用删除函数
  deleteItem(modalImage.src);
  // 关闭模态框
  closeModal();
});
const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
  });
});
const modalContent = document.querySelector('.modal-content');

modalContent.addEventListener('wheel', (event) => {
  event.preventDefault();

  const scrollStep = 100;
  const delta = Math.sign(event.deltaY) * scrollStep;

  modalContent.scrollTop += delta;
});
var popupContent = `
    <p>Flood Year: ${year}</p>
    <video width="320" height="240" controls autoplay>
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <button id="addContentButton">Add Content</button>
    <button>View Content</button> 
`;

// button add content
var marker = L.marker([lng, lat], { icon: customIcon })
    .bindPopup(popupContent)
    .addTo(map);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addContentButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks the submit button, add the content to the padlet
document.getElementById("submitButton").onclick = function() {
  // Get the values from the form
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var image = document.getElementById("image").value;

  // Add the content to the padlet
  var content = `
    <div class="card">
      <h3>${title}</h3>
      <p>${description}</p>
      <img src="${image}">
    </div>
  `;
  document.getElementById("padlet").innerHTML += content;

  // Close the modal
  modal.style.display = "none";
}
