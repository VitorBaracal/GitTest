function Login() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    alert("Ops! Parece que você não possuí cadastro conosco! Clique em OK para prosseguir")

    const formadd = `
    <h2> Sign Up on Website </h2>
    <form action="" method="post">  

        <div class="form-group">
            <label class="label" for="name"> Name </label>
            <input type="text" id="name" name="name" required>
        </div>  
        <div class="form-group">
            <label class="label" for="email"> Email </label>
            <input type="email" id="email" name="email" required>
        </div>      
        <div class="form-group">
            <label class="label" for="address">Address</label>
            <input type="text" id="address" name="address" required>
        </div>
        <div class="form-group">
            <label class="label" for="phone">Phone</label>
            <input type="text" id="phone" name="phone" required>
        </div>
        <div class="form-group">
            <label class="label" for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required>
        </div> 
        <div class="form-group">
            <label class="label" for="password"> Password </label>
            <input type="password" id="password" name="password" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$">
            <p class="caption"> minimum 8 characters, including a special character </p>
        </div>   
        <button type="submit" class="button" onclick="Cadastro()">Login</button>
            
    </form>
    ` ;

    document.getElementById('main').innerHTML = formadd;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;

    
}
function Cadastro(){
    alert ("Cadastro realizado com sucesso");

    window.location.href = "index.html";



}

