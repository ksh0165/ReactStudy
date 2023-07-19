let postObject = {
	init: function(){
		let _this = this;
		
		$("#btn-insert").on("click", () => {
			_this.insertPost();
		});
		
		$("#btn-update").on("click", () => {
			_this.updatePost();
		});
		
		$("#btn-delete").on("click", () => {
			_this.deletePost();
		});
	},
	
	insertPost: function(){

		let post = {
			title : $("#title").val(),
			content : $("#content").val(),
		}
		
		$.ajax({
			type: "POST",
			url: "/post",
			data: JSON.stringify(post),
			contentType: "application/json; charset=utf-8"
		}).done(function(response){
			let message = response["data"];
			console.log(message);
			location="/";
		}).fail(function(error){
			let message = error["data"];
			alert("에러발생: "+message);
		})
		
	},
	
	updatePost:function(){
		let post = {
			id: $("#id").val(),
			title: $("#title").val(),
			content: $("#content").val()
		}
		
		$.ajax({
			type:"PUT",
			url: "/post",
			data: JSON.stringify(post),
			contentType: "application/json; charset=utf-8"
		}).done(function(response){
			let message = response["data"];
			location="/";
		}).fail(function(error){
			let message = error["data"];
			alert("문제 발생 : "+message);
		})
	},
	
	deletePost: function(){
		let id = $("#id").text();
		
		$.ajax({
			type:"DELETE",
			url: "/post/"+id,
			contentType: "application/json; charset=utf-8"
		}).done(function(response){
			let message = response["data"];
			locaton="/";
		}).fail(function(error){
			let message = error["data"];
			alert("문제 발생 :"+message);
		})
	}
}

postObject.init();
