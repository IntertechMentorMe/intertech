// Javascript for the mentors page

// Insert mentors cards in the Dom

function mentorsDisplay() {
	
	// Pull Mentors list from DB through Json object 

		// To be adapted following discussion with back-end developer

		$.getJSON( "/mentors.json", function(data) {
		  var mentors = data;
		  console.log( "success" );
			})
		  .done(function() {
		    console.log( "second success" );
		  })
		  .fail(function() {
		    console.log( "error extracting the list of mentors. Seeding data" );
		  });

		// Provisionnaly using an array of data

		var mentors = [
				{user_id: 45566, first_name: "Paul", last_name: "Stanford", email_address: "paul.stanford@gmail.com", photo: "photo1", headline: "I am an expert in People", profile: "I am Paul from London and I love helping others finding their way through this difficult life."},
				{user_id: 45567, first_name: "Chris", last_name: "Cranleigh", email_address: "chris.cranleigh@gmail.com", photo: "photo2", headline: "I love helping you!", profile: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ."},
				{user_id: 45568, first_name: "Heidi", last_name: "Stevens", email_address: "heidi.stevens@gmail.com", photo: "photo3", headline: "I am the right choice...", profile: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy."},
				{user_id: 45569, first_name: "Jay", last_name: "Root", email_address: "jay.root@gmail.com", photo: "photo4", headline: "Dont trust me", profile: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
				{user_id: 45570, first_name: "Tim", last_name: "Amber", email_address: "tim.amber@gmail.com", photo: "photo5", headline: "You can do it too...", profile: "I am Tim from Bristol and I love helping others."},
				{user_id: 45571, first_name: "Carrie", last_name: "Coral", email_address: "carrie.coral@gmail.com", photo: "photo6", headline: "I love meeting you and working together!", profile: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ."},
				{user_id: 45572, first_name: "Heidi", last_name: "Stevens", email_address: "heidi.stevens@gmail.com", photo: "photo7", headline: "This not Tinder...", profile: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy."},
				{user_id: 45573, first_name: "Alli", last_name: "Big", email_address: "alli.big@gmail.com", photo: "photo8", headline: "Don't ask for my measurments", profile: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
		];
		
	// Iterate through the array and push the data into the Dom

		// Note to replace the href='/mentor/" + mentor.user_id by the exact route
		
		var mentorCards =  "";

		if (mentors.length === 0) {

			// Debug why this is not displayed when I delete all the seed data in line 13
			mentorCards = "Hum, hum, something got wrong.... There is no mentor!"

		} else {

			$.each( mentors, function( key, mentor ) {
				mentorCards += "<div class='card mentorCard'> <img class='card-img-top mentorPhoto' data-src='" + mentor.photo + "' alt='Mentor Image'> <div class='card-block'> <h4 class='card-title mentorName'> " + mentor.first_name + " " + mentor.last_name + "</h4> <p class='card-text mentorHeadline'> " + mentor.headline + " </p> <a href='/mentor/" + mentor.user_id + "' class='btn btn-primary'>View profile</a> </div> </div> "
			});

			console.log(mentorCards);		

		$("div.mentorCards").html( mentorCards );
		};
}



// $( document ).ready() block

$( document ).ready(function() {
		mentorsDisplay();
		console.log ("JS working");
});