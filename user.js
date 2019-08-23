var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');
var btnAddUser = document.getElementById("btn-add-user");
var txtNewPhone =document.getElementById("new-phone");
var txtNewName =document.getElementById("new-name");

btnAddUser.addEventListener('click',addUers);
var keySearch = "keySearch";

var UserString = localStorage.getItem(keySearch);
if(UserString){
    var users = JSON.parse(UserString);
}else{
    var users = [];
}

function renderSearch(us) { // render
            
    var content = us.map(function(us,i) {
     a = '<li class = "list-group-item" id="li-user-'+i+'">' + '<span id="sp-name">'+us.name +'</span>'+ ' - ' + '<span>'+us.phone 
     +'</span>'+ '<button class ="btn btn-outline-secondary _btn-delete" onclick="deleteUser('+i+')"> Delete </button></li>';
    return a;
    });
    var contentrs=content.join('');
    if(contentrs){
    userList.innerHTML = contentrs;
    }else{
        userList.innerHTML = 'Empty';
    }
    txtNewName.value = xx;
    }

    searchInput.addEventListener('keyup', function(event) { // search function
    var value = searchInput.value;
    var result = users.filter(function(us){
         var resPhone =  us.phone.includes(value);
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
        var number =parseInt(phoneStr);
        var nameStr = txtNewName.value;
        if(phoneStr && nameStr){
            if(number && phoneStr.length === 10 && phoneStr[0]==='0'){
            var newUser = {
                name:nameStr,
                phone:phoneStr
            };
            users.push(newUser);
            txtNewName.value='';
            txtNewPhone.value='';

            }else{
                alert('Phone number is false');
                txtNewPhone.focus();
            
            }
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
       
    }
    function deleteUser(a){
        users.splice(a,1);
        localStorage.setItem(keySearch,JSON.stringify(users));
        renderSearch(users);
    }
    
    renderSearch(users);       