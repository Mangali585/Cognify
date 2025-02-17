document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "34d0eae0ecbec1bf5f8fb148c9e7ecd1"; 
    const url = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=${apiKey}`;

    let isLoggedIn = false;

    const fetchNews = (limit, blur) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById("news-container");
                newsContainer.innerHTML = "";

                if (!data.articles || data.articles.length === 0) {
                    newsContainer.innerHTML = "<p>No news available at the moment.</p>";
                    return;
                }

                data.articles.slice(0, limit).forEach(article => {
                    const newsItem = document.createElement("div");
                    newsItem.classList.add("news-item");

                    const imageUrl = article.image ? article.image : "https://via.placeholder.com/100";

                    newsItem.innerHTML = `
                        <img src="${imageUrl}" alt="News Image">
                        <div>
                            <h3>${article.title}</h3>
                            <p>${article.description || "No description available."}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        </div>
                    `;

                    if (blur) {
                        newsItem.classList.add("blurred");
                        newsItem.addEventListener("click", () => {
                            document.getElementById("login-popup").classList.remove("hidden");
                            document.getElementById("login-popup").style.display = "block"; 
                        });
                    }

                    newsContainer.appendChild(newsItem);
                });
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                document.getElementById("news-container").innerHTML = "<p>Failed to load news. Please try again later.</p>";
            });
    };

    fetchNews(7, true);

    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("login-popup").classList.add("hidden");
        document.getElementById("login-popup").style.display = "none"; 
    });

    document.getElementById("contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        isLoggedIn = true;

        document.getElementById("login-popup").classList.add("hidden");
        document.getElementById("login-popup").style.display = "none"; 

        alert("You have successfully logged in!");

        fetchNews(7, false);
    });

    document.getElementById("subscribe-btn").addEventListener("click", () => {
        alert("Thank you for subscribing to Tech News!");
    });

    document.getElementById("login-btn").addEventListener("click", () => {
            alert("You've already logged in. Stay connected for more latest news!");
        
    });
});
