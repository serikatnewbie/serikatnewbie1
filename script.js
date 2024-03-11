document.addEventListener("DOMContentLoaded", function() {
    const teamContainer = document.getElementById("team-container");
    const achievementsList = document.getElementById("achievements-list");
  
    // Sample player data
    const players = [
        { name: "itoid", role: "PWN", image: "pictures/player1.png", bio: "PWN Addict", bio2: "Student at National Cyber and Crypto Polytechnic" },
        { name: "k.eii", role: "Digital Forensic/OSINT", image: "pictures/player2.png", bio: "Instant Coffee Addict", bio2: "Student at National Cyber and Crypto Polytechnic" },
        { name: "FlaB", role: "Reverse/Cryptography", image: "pictures/player3.webp", bio: "Addicted to reverse engineering and cryptography. Pursuing a degree in Computer Science." },
        { name: "bengsky", role: "Web Exploitation", image: "pictures/player4.webp", bio: "Master of web exploitation with extensive penetration testing experience." },
        { name: "Azuketto", role: "Cryptography", image: "pictures/player5.webp", bio: "Cryptographer extraordinaire, continuously exploring new encryption techniques." },
        { name: "zran", role: "PWN/Digital Forensic", image: "pictures/player6.webp", bio: "Versatile cybersecurity enthusiast specializing in PWN challenges and digital forensics." },
        { name: "TunangannyaChizuru", role: "Digital Forensic", image: "pictures/player7.webp", bio: "Meticulous digital forensic analyst with a passion for cyber law and ethics." },
        { name: "msfir", role: "PWN/Reverse", image: "pictures/player8.jpg", bio: "Seasoned cybersecurity professional excelling in PWN challenges and reverse engineering." },
        { name: "Fejka", role: "Web Exploitation", image: "pictures/player9.webp", bio: "Proficient Web Pentester with a strategic approach to penetration testing." },
        { name: "Rival", role: "Web Exploitation", image: "pictures/player10.webp", bio: "Adept web exploitation expert passionate about cybersecurity education." },
        { name: "Kiaraa", role: "Cryptography", image: "pictures/player11.webp", bio: "Passionate cryptographer dedicated to advancing cybersecurity through research." },
        { name: "kisanakk", role: "Cryptography/Mobile", image: "pictures/player12.webp", bio: "Dedicated cryptography enthusiast with a background in mathematics." }
    ];    
    
    // Create profile elements for each player
    players.forEach(player => {
      const profile = document.createElement("div");
      profile.classList.add("profile");
  
      const image = document.createElement("img");
      image.src = player.image;
      image.alt = `${player.name}'s profile picture`;
  
      const name = document.createElement("h1");
      name.textContent = player.name;
  
      const role = document.createElement("h2");
      role.textContent = player.role;
  
      const bio = document.createElement("p");
      bio.textContent = player.bio;

      const bio2 = document.createElement("p");
      bio2.textContent = player.bio2;
  
      profile.appendChild(image);
      profile.appendChild(name);
      profile.appendChild(role);
      profile.appendChild(bio);
      profile.appendChild(bio2);
  
      teamContainer.appendChild(profile);
    });

    const achievements = [
        { title: "ShaktiCTF 2024", result: "2nd Rank" },
        { title: "UgraCTF Quals 2024", result: "13th Rank" },
        { title: "GCC CTF 2024", result: "9th Rank" },
        { title: "Pearl CTF 2024", result: "11th Rank" },
        { title: "Braeker CTF 2024", result: "18th Rank" },
        { title: "Bronco CTF 2024", result: "20th Rank" }
    ];
    
    achievements.forEach(achievement => {
        const listItem = document.createElement("li");
    
        const icon = document.createElement("i");
        icon.classList.add("fas", achievement.result.includes("1st") || achievement.result.includes("2nd") || achievement.result.includes("3rd") ? "fa-trophy" : "fa-medal"); // Choose gold trophy for 1st, 2nd, and 3rd place, otherwise use bronze medal
        // Adjust the icon class based on the desired icon from Font Awesome
    
        const title = document.createElement("h2");
        title.textContent = achievement.title;
    
        const result = document.createElement("p");
        result.textContent = achievement.result;
    
        listItem.appendChild(icon);
        listItem.appendChild(title);
        listItem.appendChild(result);
    
        achievementsList.appendChild(listItem);
    });
    
    // Initialize Glide.js carousel
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center'
    }).mount();
    

  });
