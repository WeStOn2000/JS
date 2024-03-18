function isFieldEmpty(){
    const Field = document.querySelector("#info");
    if (Field.value ===''){
        return true;
} else{
    return false;
}
}
const fieldtest = isFieldEmpty();

if(fieldtest === true){
  alert('please provide your info');
}