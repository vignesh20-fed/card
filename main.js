        let add = document.getElementById("plus");
		add.addEventListener("click",addFunc);
		let min = document.getElementById("sub");
		min.addEventListener("click",minFunc);
		
		let input = document.getElementById("text");
		
		let rights = document.getElementById("rights");
		
		
		function addFunc(){
			input.value=Number(input.value)+1;
			read(addFunc);
		}
		function minFunc(){
			if(input.value>0){
				input.value=Number(input.value)-1;
			}
			rem();
		}

		let data={};
		function read(){
			data['hotalname']="Hotel Grill Land";
			console.log(data)
			createPost();
		}
		function createPost(){
			rights.innerHTML= `<div> 
			    <p>${data.hotalname}</p>
				</div>`;
			rights.style.boxShadow = "0 0 10px #ccc";
			rights.style.padding = "40px";
			rights.style.margin = "40px"; 
			rights.style.color="red";
		}
		function rem(){
			rights.remove();
		}