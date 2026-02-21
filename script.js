document.getElementById("cadastro")?.addEventListener("submit",function(e){
e.preventDefault();

const user={
nome:document.getElementById("nome").value,
email:document.getElementById("email").value,
telefone:document.getElementById("telefone").value,
senha:document.getElementById("senha").value
};

localStorage.setItem("usuario",JSON.stringify(user));

alert("Conta criada!");
window.location="login.html";
});
