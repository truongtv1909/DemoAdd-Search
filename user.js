

var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');
var btnAddUser = document.getElementById("btn-add-user");
var txtNewPhone =document.getElementById("new-phone");
var txtNewName =document.getElementById("new-name");

btnAddUser.addEventListener('click',addUers);

var keySearch = "keySearch";


// sessionStorage.setItem(keySearch,JSON.stringify(users));
var UserString = localStorage.getItem(keySearch);
if(UserString){
    var users = JSON.parse(UserString);
}else{
    var users = [];
}

function renderSearch(us) { // render
            
    var content = us.map(function(us) {
     a = '<li class = "list-group-item">' + us.name + ' - ' + us.phone + '</li>';

    return a;
    });
    var contentrs=content.join('');
    if(contentrs){
    userList.innerHTML = contentrs;
    }else{
        userList.innerHTML = 'Empty';
    }
    }

    searchInput.addEventListener('keyup', function(event) { // search function
    var value = searchInput.value;
    var result = users.filter(function(us){
         var resPhone =  us.phone.includes(value);
         console.log(us.phone);
         var resName = us.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
         if(resPhone){
            return resPhone;
         }if(resName){
             return resName;
         }             
    });
    renderSearch(result);
    });

    function addUers(){
        var phoneStr = txtNewPhone.value;
        var nameStr = txtNewName.value;
        if(phoneStr && nameStr){
            var newUser = {
                name:nameStr,
                phone:phoneStr
            };
            users.push(newUser);
        }else{
            if(nameStr){
                alert('Warning! Please input user phone');
                txtNewPhone.focus();
            }else{
               
                alert('Warning! Please input user name');
                txtNewName.focus();
            }
            
        }
       
        localStorage.setItem(keySearch,JSON.stringify(users));
        renderSearch(users); 
        txtNewName.value='';
        txtNewPhone.value='';
    }

    renderSearch(users);       